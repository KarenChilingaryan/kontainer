import { defineNuxtConfig } from "nuxt/config"
import svgLoader from 'vite-svg-loader';


let baseUrl = 'http://localhost:3000';
let siteUrl = 'siteUrl';
let apiUrl = 'apiUrl';
let appUrl = 'appUrl';
let gtmId = null;
let sentryDSN = 'sentryDSN';
let redisUrl = 'redis://localhost:6379';


export const config = {
  baseUrl: baseUrl,
  siteUrl: siteUrl,
  apiUrl: apiUrl,
  appUrl: appUrl,
  sentryDSN: sentryDSN,
  gtmId: gtmId,
  postTypes: {
    news: 'news',
    blog: 'blog',
    prices: 'prices',
    prices_new: 'prices_new',
    cases: 'cases',
  },
}

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      ...config,
    },
    private: {
      redisUrl,
    }
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        port: 6379,
        host: "127.0.0.1", // Redis host
        username: "", // needs Redis >= 6
        password: "",
        db: 0, // Defaults to 0
        tls: {} // tls/ssl
      }
    }
  },
  css: [
    '@/assets/scss/framework.scss',
  ],
  vite: {
    plugins: [
      svgLoader()
    ],
  },
  devtools: { enabled: false },
  plugins: [
    '~/plugins/swiper.js',
    '~/plugins/vuex-store.js',
    '~/plugins/directives.js',
    '~/plugins/vee-validate.js',
    '~/plugins/api.js',
    '~/plugins/meta.js',
    '~/plugins/fonts.js',
    '~/plugins/vue-select.js',
    '~/plugins/googletagmanager.js',
  ],
  css: ['~/assets/scss/framework.scss', '~/assets/scss/import.scss'],
  ssr: true,
  debug: false,
  app: {
    vueRouterOptions: {
      strict: true,
      trailingSlash: true,
    },
    layoutTransition: {
      name: 'layout',
      mode: 'in-out',
    },
    head: {
      title: 'Kontainer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'Kontainer' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', type: '/safari-pinned-tab.svg', href: '#5bbad5' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      script: [],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },

  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/sitemap',
    '@vee-validate/nuxt',
    '@nuxt/image',
    'nuxt-delay-hydration'
    // '@nuxt/content'
  ],
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    debug: true
  },
  // content: {
    
  // },
  sitemap: {
    sources: ['/api/sitemap'],
    defaultSitemapsChunkSize: 1000 * 60 * 15,
    experimentalCompression: true,
    exclude: ['/register'],
  },
  srcDir: '.',
  image: {
    inject: true,
    quality: 100,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  build: {
    analyze: true
  },
})
