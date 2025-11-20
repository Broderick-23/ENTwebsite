import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 替换为你的 GitHub 仓库名称！
const repoName = 'Entwebsite'; 

export default defineConfig({
  // 设置基础路径，这是部署到 GitHub Pages 的关键
  base: `/${repoName}/`,
  plugins: [react()],
  build: {
    // 默认输出目录为 dist
    outDir: 'dist',
  }
})
