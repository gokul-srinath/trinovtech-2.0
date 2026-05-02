import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        heading1: 'var(--heading1)',
        heading2: 'var(--color-heading2)',
        body: 'var(--color-body)',
        card: 'var(--color-card)',
        bg: 'var(--color-bg)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        heading1: ['36px', { lineHeight: 'normal', fontWeight: '700' }],
        body: ['24px', { lineHeight: 'normal', fontWeight: '400' }],
      },
      spacing: {
        section: '5rem',
        gap: '1.5rem',
      },
      borderRadius: {
        card: '1rem',
        btn: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
