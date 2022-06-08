module.exports = {
  // theme: '@vuepress/blog',
  themeConfig: {
    // 导航栏 logo, 地址: .vuepress/public/
    logo: '/assets/img/logo.png',    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'About1', link: '/about1/' },
      { text: 'bar', link: '/bar/' },
      { text: 'FOO', link: '/foo/' },
      { text: '美丽的CSS', link: '/css/' },
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
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
      
  }
  // plugins: [
  //   ["vuepress-plugin-auto-sidebar", {
  //     // options
  //     sort: {
  //       mode: "asc",
  //       readmeFirst: true,
  //     },
  //     title: {
  //       mode: "titlecase",
  //       map: {}
  //     },
  //     sidebarDepth: 1,
  //     collapse: {
  //       open: false,
  //       collapseList: [],
  //       uncollapseList: []
  //     },
  //     ignore: [],
  //     git: {
  //       trackStatus: 'all'
  //     }
  //   }]
  // ]
}