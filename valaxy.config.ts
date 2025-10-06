import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  //  base: process.env.NODE_ENV === 'production' ? '/IRendy/IRendy.github.io' : '/',

  themeConfig: {
    banner: {
      enable: true,
      title: '冬逝枝的小站',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      /*{
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },*/
    ],

    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '',
      },
    },
  },

  unocss: { safelist },
})
