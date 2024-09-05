/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    fontFamily: {
      noto: ['Noto Serif', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        dark: 'var(--color-primary-dark)',
        'dark-60': 'var(--color-primary-dark-60)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
      },
      bg: {
        DEFAULT: 'var(--bg)',
        light: 'var(--bg-light)',
        highlight: 'var(--bg-highlight)',
        grey: 'var(--bg-grey)',
        'grey-light': 'var(--bg-grey-light)',
        'grey-dark': 'var(--bg-grey-dark)',
      },
      border: {
        DEFAULT: 'var(--border)',
      },
    },
  },
}
