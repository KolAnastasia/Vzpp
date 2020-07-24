module.exports = {
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://serene-hypatia-a3aebe.netlify.com' : 'http://localhost:3000')
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'VZPP',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      {
        rel: "stylesheet", 
        href: "https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap&subset=cyrillic"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/themes/main.sass',
    '@/themes/main.scss'
  ],
  /*
  ** Build configuration
  */
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/axios',
  ],
  axios: {
     proxyHeaders: false
  },
  plugins: [ 
    { src: '~/plugins/main.js'},
    { src: '~plugins/mainslider.js', ssr: false },
    { src: '~/plugins/ymapPlugin.js',  ssr: false }
  ],
  
  build: {
    /*
    ** Run ESLint on save
    */    
    extend (config, { isDev }) {
      if (isDev && process.client) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
      }
    }
  }
}

