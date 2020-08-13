module.exports = {
    title: '官网',
    description: '用Vue造轮子',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'},
            {text:'交流',link:'https://google.com'},
        ],
        sidebar: [
            {
                title:'入门',
                children:['/install/','/start/']
            },
            {
                title:'组件',
                children:['/components/button']
            }
        ]
    }
}