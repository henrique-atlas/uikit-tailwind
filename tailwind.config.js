/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx, ts}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'primary-blue': {
          100: '#D2DFFF',
          500: '#0559FA',
          900: '#06195E',
        },
    },
    // colors: {
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    // extend: {},
  } 
  },
  plugins: [],
}

