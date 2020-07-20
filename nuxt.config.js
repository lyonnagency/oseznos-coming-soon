export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Oseznos Fútbol Américano Club Morelia - Espéralo' || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'theme-color', content: '#302d5c'},
      {name: 'msapplication-navbutton-color', content: '#302d5c'},
      {name: 'apple-mobile-web-app-status-bar-style', content: '#302d5c'},
      {
        hid: 'description',
        name: 'description',
        content: 'Oseznos. El equipo de fútbol américano de Morelia, espéralo muy pronto' || ''
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],

  server: {
    // host:'192.168.100.4'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
