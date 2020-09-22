module.exports = {
    type: 'blog',
    // 博客设置
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: '文章分类' // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: '标签' // 默认 “标签”
        }
    },
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'badeve/ibook',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'badeve/ibook',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',

    // 作者
    author: 'BadCode',
    // 备案号
    record: '沪ICP备20160114号',
    // 项目开始时间
    startYear: '2016'
}