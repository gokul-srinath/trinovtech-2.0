'use client'

import { useEffect, useState, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import type { BlogPostRow } from '@/lib/blog-api'

/* ─── helpers ─────────────────────────────────────────────── */
const EMPTY_FORM = {
  title: '',
  tag: '',
  excerpt: '',
  author: 'Trinovtech',
  date: '',
  read_time: '',
  image_path: '',
  href: '',
  is_featured: false,
  is_published: true,
}

type FormState = typeof EMPTY_FORM

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

/* ─── component ───────────────────────────────────────────── */
export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPostRow[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)
  const [editId, setEditId] = useState<string | null>(null)   // null = new post
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const formRef = useRef<HTMLDivElement>(null)

  /* ── fetch ── */
  async function fetchPosts() {
    setLoading(true)
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
    setPosts((data as BlogPostRow[]) ?? [])
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [])

  /* ── toast helper ── */
  function showToast(msg: string, ok = true) {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 3000)
  }

  /* ── open form ── */
  function openNew() {
    setEditId(null)
    setForm(EMPTY_FORM)
    setShowForm(true)
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }

  function openEdit(post: BlogPostRow) {
    setEditId(post.id)
    setForm({
      title: post.title,
      tag: post.tag ?? '',
      excerpt: post.excerpt ?? '',
      author: post.author ?? 'Trinovtech',
      date: post.date ?? '',
      read_time: post.read_time ?? '',
      image_path: post.image_path ?? '',
      href: post.href ?? '',
      is_featured: post.is_featured,
      is_published: post.is_published,
    })
    setShowForm(true)
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }

  function cancelForm() {
    setShowForm(false)
    setEditId(null)
    setForm(EMPTY_FORM)
  }

  /* ── save ── */
  async function handleSave() {
    if (!form.title.trim()) { showToast('Title is required', false); return }
    setSaving(true)
    const payload = {
      ...form,
      tag: form.tag || null,
      excerpt: form.excerpt || null,
      author: form.author || null,
      date: form.date || null,
      read_time: form.read_time || null,
      image_path: form.image_path || null,
      href: form.href || null,
    }

    let error
    if (editId) {
      ;({ error } = await supabase.from('blog_posts').update(payload).eq('id', editId))
    } else {
      ;({ error } = await supabase.from('blog_posts').insert(payload))
    }
    setSaving(false)
    if (error) { showToast('Error: ' + error.message, false); return }
    showToast(editId ? 'Post updated!' : 'Post created!')
    cancelForm()
    fetchPosts()
  }

  /* ── delete ── */
  async function handleDelete(id: string) {
    if (!confirm('Delete this post permanently?')) return
    setDeleting(id)
    const { error } = await supabase.from('blog_posts').delete().eq('id', id)
    setDeleting(null)
    if (error) { showToast('Error: ' + error.message, false); return }
    showToast('Post deleted')
    setPosts((p) => p.filter((x) => x.id !== id))
  }

  /* ── toggle published ── */
  async function togglePublish(post: BlogPostRow) {
    await supabase.from('blog_posts').update({ is_published: !post.is_published }).eq('id', post.id)
    setPosts((p) => p.map((x) => x.id === post.id ? { ...x, is_published: !x.is_published } : x))
  }

  /* ── filtered list ── */
  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    (p.tag ?? '').toLowerCase().includes(search.toLowerCase())
  )

  /* ── render ── */
  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FA', fontFamily: 'Poppins, sans-serif' }}>

      {/* ─ Header ─ */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#1F7A63', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#1A1A1A' }}>Blog Admin</span>
            <span style={{ fontSize: 12, color: '#6B7280', marginLeft: 4 }}>Trinovtech</span>
          </div>
          <a href="/blog" target="_blank" style={{ fontSize: 13, color: '#1F7A63', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            View Blog
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1F7A63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ─ Toast ─ */}
      {toast && (
        <div style={{
          position: 'fixed', top: 20, right: 20, zIndex: 9999,
          background: toast.ok ? '#1F7A63' : '#EF4444',
          color: '#fff', borderRadius: 10, padding: '12px 20px',
          fontSize: 14, fontWeight: 600, boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          animation: 'fadeIn 0.2s ease',
        }}>
          {toast.msg}
        </div>
      )}

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px' }}>

        {/* ─ Stats bar ─ */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
          {[
            { label: 'Total Posts', value: posts.length },
            { label: 'Published', value: posts.filter(p => p.is_published).length },
            { label: 'Drafts', value: posts.filter(p => !p.is_published).length },
            { label: 'Featured', value: posts.filter(p => p.is_featured).length },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: '#fff', borderRadius: 12, padding: '16px 24px', flex: '1 1 160px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#1F7A63' }}>{value}</div>
              <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ─ Actions row ─ */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts…"
            style={{ flex: 1, minWidth: 200, padding: '10px 16px', borderRadius: 10, border: '1.5px solid #E5E7EB', fontSize: 14, outline: 'none', fontFamily: 'Poppins, sans-serif' }}
          />
          <button
            onClick={openNew}
            style={{ padding: '10px 22px', borderRadius: 10, background: '#1F7A63', color: '#fff', border: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Post
          </button>
        </div>

        {/* ─ Form ─ */}
        {showForm && (
          <div ref={formRef} style={{ background: '#fff', borderRadius: 16, padding: 28, marginBottom: 28, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', border: '1.5px solid #E5E7EB' }}>
            <h2 style={{ fontWeight: 700, fontSize: 18, color: '#1A1A1A', marginBottom: 20 }}>
              {editId ? 'Edit Post' : 'New Blog Post'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Title */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Title *</label>
                <input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Post title" />
              </div>
              {/* Tag */}
              <div>
                <label style={labelStyle}>Tag / Category</label>
                <input style={inputStyle} value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} placeholder="e.g. IoT, Cloud" />
              </div>
              {/* Author */}
              <div>
                <label style={labelStyle}>Author</label>
                <input style={inputStyle} value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author name" />
              </div>
              {/* Date */}
              <div>
                <label style={labelStyle}>Date (display)</label>
                <input style={inputStyle} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="e.g. May 15, 2026" />
              </div>
              {/* Read time */}
              <div>
                <label style={labelStyle}>Read Time</label>
                <input style={inputStyle} value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} placeholder="e.g. 5 min read" />
              </div>
              {/* Image path */}
              <div>
                <label style={labelStyle}>Image Path</label>
                <input style={inputStyle} value={form.image_path} onChange={(e) => setForm({ ...form, image_path: e.target.value })} placeholder="/images/my-image.png" />
              </div>
              {/* Href */}
              <div>
                <label style={labelStyle}>Post URL (href)</label>
                <input style={inputStyle} value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} placeholder="/blog/my-post" />
              </div>
              {/* Excerpt */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Excerpt</label>
                <textarea
                  style={{ ...inputStyle, height: 96, resize: 'vertical' }}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Short summary of the post…"
                />
              </div>
              {/* Toggles */}
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <Toggle label="Published" checked={form.is_published} onChange={(v) => setForm({ ...form, is_published: v })} />
                <Toggle label="Featured" checked={form.is_featured} onChange={(v) => setForm({ ...form, is_featured: v })} />
              </div>
            </div>
            {/* Buttons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <button
                onClick={handleSave}
                disabled={saving}
                style={{ padding: '10px 24px', background: '#1F7A63', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}
              >
                {saving ? 'Saving…' : editId ? 'Save Changes' : 'Create Post'}
              </button>
              <button
                onClick={cancelForm}
                style={{ padding: '10px 24px', background: 'transparent', color: '#6B7280', border: '1.5px solid #E5E7EB', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* ─ Posts table ─ */}
        <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#9CA3AF', fontSize: 14 }}>Loading posts…</div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0', color: '#9CA3AF', fontSize: 14 }}>
              {search ? 'No posts match your search.' : 'No posts yet. Create your first post!'}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                  {['Title', 'Tag', 'Author', 'Date', 'Status', 'Actions'].map((h) => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#6B7280', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((post, i) => (
                  <tr key={post.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                    <td style={{ padding: '14px 16px', maxWidth: 260 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#1A1A1A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {post.is_featured && <span style={{ background: '#1F7A63', color: '#fff', fontSize: 10, borderRadius: 4, padding: '1px 6px', marginRight: 6, fontWeight: 700 }}>Featured</span>}
                        {post.title}
                      </div>
                      <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>Created {formatDate(post.created_at)}</div>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      {post.tag ? (
                        <span style={{ background: 'rgba(31,122,99,0.1)', color: '#1F7A63', fontSize: 11, fontWeight: 600, borderRadius: 9999, padding: '2px 10px' }}>{post.tag}</span>
                      ) : <span style={{ color: '#D1D5DB', fontSize: 12 }}>—</span>}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#374151' }}>{post.author ?? '—'}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: '#6B7280' }}>{post.date ?? '—'}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <button
                        onClick={() => togglePublish(post)}
                        style={{
                          fontSize: 11, fontWeight: 600, borderRadius: 9999, padding: '3px 12px', border: 'none', cursor: 'pointer',
                          background: post.is_published ? 'rgba(31,122,99,0.12)' : 'rgba(107,114,128,0.1)',
                          color: post.is_published ? '#1F7A63' : '#6B7280',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {post.is_published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => openEdit(post)} style={actionBtn('#1F7A63')}>Edit</button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          disabled={deleting === post.id}
                          style={actionBtn('#EF4444')}
                        >
                          {deleting === post.id ? '…' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: '#D1D5DB', marginTop: 24 }}>
          Trinovtech Blog Admin · {posts.length} post{posts.length !== 1 ? 's' : ''} total
        </p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        input:focus, textarea:focus { outline: none; border-color: #1F7A63 !important; }
      `}</style>
    </div>
  )
}

/* ─── small sub-components ─────────────────────────────────── */
function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
      <div
        onClick={() => onChange(!checked)}
        style={{
          width: 40, height: 22, borderRadius: 11,
          background: checked ? '#1F7A63' : '#D1D5DB',
          position: 'relative', transition: 'background 0.2s', cursor: 'pointer',
        }}
      >
        <div style={{
          position: 'absolute', top: 3, left: checked ? 21 : 3,
          width: 16, height: 16, borderRadius: '50%', background: '#fff',
          transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#374151', fontFamily: 'Poppins, sans-serif' }}>{label}</span>
    </label>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 12, fontWeight: 600, color: '#374151',
  marginBottom: 6, fontFamily: 'Poppins, sans-serif',
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 10,
  border: '1.5px solid #E5E7EB', fontSize: 14,
  fontFamily: 'Poppins, sans-serif', color: '#1A1A1A',
  background: '#F9FAFB', boxSizing: 'border-box',
  transition: 'border-color 0.2s',
}

function actionBtn(color: string): React.CSSProperties {
  return {
    padding: '5px 14px', fontSize: 12, fontWeight: 600,
    borderRadius: 8, border: `1.5px solid ${color}`,
    color: color, background: 'transparent',
    fontFamily: 'Poppins, sans-serif', cursor: 'pointer',
  }
}
