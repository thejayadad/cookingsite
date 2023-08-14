/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#798071',
        'secondary': '#999ac6',
        'secondary-black': '#222222',
        'light': '#b8bacf',
        'lighter': '#d2d5dd',
        'body': '#e8ebe4'
      },
      backgroundImage: {
        'header-image': "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }
    },
  },
  plugins: [],
}
 