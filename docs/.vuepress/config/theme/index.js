const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')
const {
    appId,
    appKey
} = require('../privacy')

module.exports = Object.assign({}, themeReco, {
    // 首页相关配置部分在 /README.md 文件中
    type: 'blog',
    nav,
    sidebar,
    subSidebar: 'auto',
    // logo: '/logo.png',
    authorAvatar: 'https://cdn.jsdelivr.net/gh/SevenKiss/imgPicGo/image/20200706095911.jpg', // 设置博客头像
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 配置评论功能
    valineConfig: {
        appId: appId, // your appId
        appKey: appKey, // your appKey
        placeholder: '在昵称输入框中输入QQ号，自动获取邮箱和头像哦...',
        requiredFields: ['nick', 'mail'], // 关闭匿名评论，设置必填信息 v1.4.6+生效
        recordIP: true, // 记录评论者IP v1.3.5+生效
        visitor: true,
        enableQQ: true,
        avatar: 'mp'  // 头像样式
    },
    // 配置友链
    friendLink: [
        {
            title: '午后南杂',
            desc: 'Enjoy when you can, and endure when you must.',
            email: 'recoluan@qq.com',
            link: 'https://www.recoluan.com'
        },
        {
            title: '柚見USee',
            desc: '挚友的一个博客站，分享有关网络、运维等方面知识',
            email: 'jianzking@qq.com',
            link: 'https://www.useenet.cn'
        },
        {
            title: 'BadCode',
            desc: '挚友的一个博客站，分享有关网络、运维等方面知识',
            email: '2233237510@qq.com',
            link: 'https://blog.badcode.icu'
        }
    ],

    // 上/下一篇
    nextLinks: true,
    prevLinks: true,

    // 开启页面滚动
    smoothScroll: true
})