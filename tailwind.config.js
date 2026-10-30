// Configuración de Tailwind (antes estaba inline con el CDN).
// Tras cambiar clases en index.html o en/index.html, regenera el CSS:
//   npx tailwindcss@3.4.17 -c tailwind.config.js -i src/tailwind.css -o css/styles.css --minify
module.exports = {
  content: ['./index.html', './en/index.html'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf7ea',
          100: '#f4e9c9',
          200: '#e9d290',
          300: '#dcb85f',
          400: '#cfa03f',
          500: '#b8862b',
          600: '#9c6d22',
          700: '#7d551c',
          800: '#5f4016',
          900: '#3f2b0f',
        },
        ink: {
          900: '#0b0b0a',
          800: '#141312',
          700: '#1d1b19',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Jost', 'sans-serif'],
      }
    }
  }
}
