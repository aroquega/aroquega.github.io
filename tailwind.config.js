module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mountains-md': "url('../images/background-md.webp')",
      }),
    },
    colors: {
      xiketic: '#07020d',
      primaryLight: '#0b0414',
      cyanprocess: '#0371a0',
      eggshell: '#f1e9db',
      grullo: '#a39b8b',
      dimgray: '#716a5c',
      dark: '#141414',
      white: '#ffffff',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
