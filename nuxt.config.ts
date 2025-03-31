// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    head: {
      title: '零零仓(上海)物流科技有限公司',
      htmlAttrs: {
        lang: 'zh-Ch'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '零零仓(上海)物流科技有限公司是一家专业的海外仓WMS、跨境物流TMS软件服务商，支持海外仓一件代发、FBA转运、大件物流等多种业态，是领先的精益物流体系解决方案供应商。现已经为美国、加拿大、欧洲、东南亚、中东等多个国家地区的近50多个海外仓实现数字化转型升级。' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'keywords', name: 'keywords', content: '零零仓(上海)物流科技有限公司,零零仓物流,零零仓跨境物流,零零仓,跨境物流软件,TMS,WMS,海外仓,海外仓系统,一件代发,FBA转运,大件物流' }
      ]
    }
  },

  css: [
    'element-plus/dist/index.css',
    '~/assets/css/common.scss'
  ],

  modules: [
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    'nuxt-swiper'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/element-variables.scss" as element;`
        }
      }
    }
  },

  i18n: {
    // 添加路由前缀方式
    strategy: 'prefix_and_default',
    // 配置语种
    locales: ['zh', 'en'],
    // 默认语种
    defaultLocale: 'zh',
    // 通过vueI8配置
    vueI18n: './i18n.config.ts'
  },

  elementPlus: {
    importStyle: 'scss'
  },

  plugins: [
  ],

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://www.zerocang.com/api',
        changeOrigin: true,
        prependPath: true
      }
    }
  },

  compatibilityDate: '2024-11-29'
})