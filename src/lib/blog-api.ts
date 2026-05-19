/**
 * Blog API — all Supabase data-fetching for blog posts
 *
 * Table: blog_posts
 * Columns:
 *   id          uuid primary key default gen_random_uuid()
 *   tag         text
 *   title       text not null
 *   excerpt     text
 *   author      text default 'Trinovtech'
 *   date        text                  -- human-readable e.g. "May 10, 2026"
 *   read_time   text
 *   image_path  text
 *   href        text
 *   is_featured boolean default false
 *   is_published boolean default true
 *   created_at  timestamptz default now()
 */

import { supabase } from './supabase'
import type { BlogPost } from '@/components/sections/BlogGrid'

export interface BlogPostRow {
  id: string
  tag: string | null
  title: string
  excerpt: string | null
  author: string | null
  date: string | null
  read_time: string | null
  image_path: string | null
  href: string | null
  is_featured: boolean
  is_published: boolean
  created_at: string
}

function rowToPost(row: BlogPostRow): BlogPost {
  return {
    tag: row.tag ?? undefined,
    title: row.title,
    excerpt: row.excerpt ?? '',
    author: row.author ?? undefined,
    date: row.date ?? undefined,
    readTime: row.read_time ?? undefined,
    imagePath: row.image_path ?? undefined,
    href: row.href ?? '#',
  }
}

/** Fetch the single featured post */
export async function getFeaturedPost(): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', true)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) return null
  return rowToPost(data as BlogPostRow)
}

/** Fetch all published non-featured posts for the grid */
export async function getGridPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', false)
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error || !data) return []
  return (data as BlogPostRow[]).map(rowToPost)
}

/** Fetch ALL posts (admin) */
export async function getAllPosts(): Promise<BlogPostRow[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error || !data) return []
  return data as BlogPostRow[]
}
