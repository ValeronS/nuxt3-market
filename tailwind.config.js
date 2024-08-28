/** @type {import('tailwindcss').Config} */
export const theme = {
  container: {
    center: true,
    screens: {
      '2xl': '1200px',
    },
  },
  extend: {
    fontFamily: {
      noto: ['Noto Serif', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
      },
      bg: {
        DEFAULT: 'var(--bg)',
        highlight: 'var(--bg-highlight)',
        grey: 'var(--bg-grey)',
        'grey-light': 'var(--bg-grey-light)',
      },
      border: {
        DEFAULT: 'var(--border)',
      },
    },
  },
}
