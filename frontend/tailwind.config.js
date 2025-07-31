/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px', // 2x Extra large devices (default 2xl breakpoint)
        'xl': '1280px',  // Extra large devices (default xl breakpoint)
        'lg': '1024px',  // Large devices (default lg breakpoint)
        'md2': '988px',
        'md': '768px',   // Medium devices (default md breakpoint)
        'sm': '640px',   // Small devices (default sm breakpoint)
        'xs': '480px',   // Extra small devices
      },
      fontFamily: {
        bold: ['Gordita-Bold', 'sans-serif'],
        medium: ['Gordita-Medium', 'sans-serif'],
        regular: ['Gordita-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
