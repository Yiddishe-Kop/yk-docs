
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
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
    'assets/css/article.scss',
    'assets/css/transitions.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/prism',
    'plugins/components'
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
    'portal-vue/nuxt',
  ],
  content: {
    markdown: {
      prism: {
        theme: '~/assets/css/dracula.scss'
      }
    }
  },
  axios: {
  },
  build: {
    extend(config, ctx) {
    }
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)
        document.readingTime = text
      }
    }
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('docs').only(['path']).fetch()
      console.log(files)

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
}
