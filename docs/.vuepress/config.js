module.exports = {
  title: '曹增的个人博客',
  description: '欢迎来到我的个人主页',
  themeConfig: {
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    markdown: {
      // 代码块行号
      lineNumbers: true
    },
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    nav: [
      { text: 'javascript高级程序设计', link: '/javascript高级程序设计/' },
      { text: 'Css', link: '/Css/' },
      { text: 'Webpack', link: '/Webpack/' },
      { text: 'React', link: '/React/' },
      { text: 'Vuejs', link: '/Vuejs/' },
      { text: 'GitHub', link: 'https://github.com/StoneMancz' },
    ]
  }
}