/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,html}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'navy-900': '#0F2137',
        'navy-700': '#1B3A5C',
        'navy-500': '#2D5F8A',
        'cream-100': '#FAF7F2',
        'cream-200': '#F0E8DB',
        'cream-300': '#E5D9C9',
        'rust-500': '#A0522D',
        'rust-400': '#C06E3E',
        charcoal: '#2C2C2C'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
