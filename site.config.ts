import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://irendy.github.io/',
  lang: 'zh-CN',
  title: '记录生活和技术日常',
  author: {
    name: '冬逝枝',
    avatar: 'https://avatars.githubusercontent.com/u/42890271?s=400&u=63bdbba2cff978483bd697a2152ed890d3587031&v=4',
    status: {
      emoji: '😎',
    }
  },
  favicon: 'https://avatars.githubusercontent.com/u/42890271?s=400&u=63bdbba2cff978483bd697a2152ed890d3587031&v=4',

  description: '肥皂泡里什么都没有',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 3509725139',
      link: 'https://qm.qq.com/q/yNBhC0em7C',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/IRendy',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    /*{
      name: '微博',
      link: '',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣',
      link: '',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },*/
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=541863523',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/big-bang-79',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/102601544',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    /* {
       name: '微信公众号',
       link: '',
       icon: 'i-ri-wechat-2-line',
       color: '#1AAD19',
     },
     {
       name: 'Twitter',
       link: '',
       icon: 'i-ri-twitter-x-fill',
       color: 'black',
     },
     {
       name: 'Telegram Channel',
       link: '',
       icon: 'i-ri-telegram-line',
       color: '#0088CC',
     },*/
    {
      name: 'E-Mail',
      link: 'mailto:326821729@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
