
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[200],
        secondary: colors.stone[900],
        link: {
          txt: colors.stone[100],
          hover_txt: colors.amber[600],
        },
        emphasis: {
          one: colors.amber[200],
          two: colors.amber[400],
        },
      },
      fontSize: {
        xxs: ['0.6rem', '1rem'],
      },
      height: {
        '75': '75vh',
      }
    },
  },
  plugins: [],
}