module.exports = {
  darkMode: 'class',
  content: [
    './_includes/**/*.{njk,js}',
    './assets/**/*.{njk,js}',
    './works/**/*.{njk,js}',
    './*.{njk,js}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
        lg: '0',
        xl: '0',
        // '2xl': '6rem',
      },
      screens: {
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
      },
    },
    fontWeight: {
      normal: 450,
      medium: 700,
      semibold: 600,
      bold: 700,
    },
    extend: {
      fontFamily: {
        sans: ['PPNeueMontreal', 'sans-serif'],
        // serif: ['Recoleta', 'serif'],
        // 'serif-alt': ['Recoleta Alt', 'serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        // 'background-light': 
        // 'primary': {
        //   50: '#ecfdf5',
        //   50: '#d1fae5',
        //   50: '#a7f3d0',
        //   50: '#6ee7b7',
        //   50: '#34d399',
        //   50: '#10b981',
        //   50: '#059669',
        //   50: '#047857',
        //   50: '#065f46',
        //   50: '#064e3b'
        // }
      },
    },
  },
  safelist: ['@import'],
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
