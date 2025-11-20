/** @type {import('tailwindcss').Config} */
export default {
  // 确保它能扫描所有 .html, .js, .jsx 文件中的 Tailwind class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 在这里可以添加自定义主题
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        // 自定义动画，如 Hero Section 使用的
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
