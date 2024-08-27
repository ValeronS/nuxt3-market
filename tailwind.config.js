/** @type {import('tailwindcss').Config} */
export const theme = {
  container: {
    center: true,
    screens: {
      '2xl': '1200px',
    },
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
      },
      bg: {
        DEFAULT: 'var(--bg)',
        highlight: 'var(--bg-highlight)',
        grey: 'var(--bg-grey)',
      },
      border: {
        DEFAULT: 'var(--border)',
      },
    },
  },
}
