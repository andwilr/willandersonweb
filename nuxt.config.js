module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Will Anderson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front-end Developer and Problem Solver' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates:800i|Share+Tech+Mono' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~assets/scss/_variables.scss'
      ]
  },

  layoutTransition: 'layout',

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)||(.svg$)/
        })
      }
    }
  }
}

