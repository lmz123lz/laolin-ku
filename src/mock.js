import Mock from 'mockjs' // 引入mockjs
 
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
 
let data = [] // 用于接受生成数据的数组
let template={
"list":[
    {
        path:'/',
        name:'home',
        lable:'首页',
        icom:'s-home',
        url:''
    },
    {
        path:'/mall',
        name:'mall',
        lable:'商品管理',
        icom:'video-play',
        url:''
    },
    {
        path:'/user',
        name:'user',
        lable:'用户管理',
        icom:'user',
        url:''
    },
   {
       lable:'其他',
       icon:'location',
       children:[
           {
                path:'/page1',
                name:'page1',
                lable:'页面1',
                icon:'setting',
                url:''
           },
           {
               path:'/page2',
               name:'page2',
               lable:'页面2',
               icon:'setting',
               url:''
           }
       ]
   }

]
}
data.push(template)
Mock.mock('/data/index', 'get', data) // 根据数据模板生成模拟数据