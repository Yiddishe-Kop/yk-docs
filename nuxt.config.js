
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'YK Docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/css/tailwind.css',
    'assets/css/transitions.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/prism'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
      '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  content: {
    markdown: {
      prism: {
        theme: 'assets/css/dracula.css'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
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
