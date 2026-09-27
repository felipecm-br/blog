/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          darker: 'var(--bg-darker)',
        },
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
          muted: 'var(--fg-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        theme: {
          border: 'var(--border)',
          card: 'var(--card-bg)',
          code: 'var(--code-bg)',
          selection: 'var(--selection)',
          green: 'var(--color-green)',
          yellow: 'var(--color-yellow)',
          red: 'var(--color-red)',
          blue: 'var(--color-blue)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--fg-primary)',
            a: {
              color: 'var(--accent)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              fontWeight: '500',
              '&:hover': {
                color: 'var(--accent-hover)',
              },
            },
            strong: {
              color: 'var(--fg-primary)',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--fg-primary)',
              fontWeight: '700',
            },
            code: {
              color: 'var(--accent)',
              backgroundColor: 'var(--code-bg)',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--code-bg)',
              color: 'var(--fg-primary)',
              border: '1px solid var(--border)',
            },
            blockquote: {
              borderLeftColor: 'var(--accent)',
              color: 'var(--fg-secondary)',
            },
            hr: {
              borderColor: 'var(--border)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
