module.exports = {
  themeConfig: {
    // 导航栏 logo, 地址: .vuepress/public/
    logo: '/assets/img/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'About1', link: '/about1/' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [{ text: 'Home', link: '/' },
              { text: 'About', link: '/about/' }] },
          {
            text: 'Group2', items: [{ text: 'Home', link: '/' },
              { text: 'About', link: '/about/' }] }
        ]
      },
      { text: 'External', link: 'https://google.com' }
      
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      '/',
      'about',
      ['about1', 'Explicit link text'],
      {
        title: '美丽的CSS',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/aaa.css',
          '/css/aaa copy.css',
          '/css/aaa copy 2.css',
        ]
      }
    ],
    sidebarDepth: 2
  }
}