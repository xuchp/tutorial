/*
 * @Date: 2024-05-27 15:52:09
 * @LastEditTime: 2024-05-30 15:11:18
 * @Description:
 * @FilePath: /tutorial/docs/.vitepress/config.mts
 */
import { defineConfig } from 'vitepress'
import autoSidebar from 'amtf-vitepress-auto-sidebar'
import { SearchPlugin } from 'vitepress-plugin-search'
import flexSearchIndexOptions from 'flexsearch'

var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: '搜索',
  placeholder: '请输入关键词'
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      autoSidebar({
        collapsed: false,
        忽略后缀名: ['.DS_store']
      }),
      SearchPlugin(options)
    ]
  },
  base: '/tutorial/',
  title: 'My Tutorial',
  description: 'A VitePress Site',
  themeConfig: {
    outline: {
      level: [2, 6],
      label: '章节内容'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'html',
        items: [{ text: 'canvas', link: '/canvas/index.md' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
