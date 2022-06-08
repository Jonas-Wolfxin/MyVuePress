module.exports = {
	title: 'Jonas Wolfxin',
	description: '生如逆旅, 一苇以航',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'keywords', content:'Jonas Wolfxin VuePress'} ]
	],
 	themeConfig: {
    // 导航栏 logo, 地址: .vuepress/public/
    logo: '/assets/img/logo.png', 
		lastUpdated: 'Last Updated', // string | boolean   
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'About1', link: '/about1/' },
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
  },
  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      // options
      sort: {
        mode: "asc",
        readmeFirst: true,
      },
      // title: {
      //   mode: "titlecase",
      //   map: {}
      // },
      sidebarDepth: 2,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: []
      },
      ignore: [],
      git: {
        trackStatus: 'all'
      }
    }]
  ]
}