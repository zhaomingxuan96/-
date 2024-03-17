import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue'
import {store} from '@/store'
import {loginByToken} from '@/api/Auth'
const routes:Array<RouteRecordRaw> = [
{
    path:'/register',//这个path是浏览器上显示的路径http://localhost:3001/#/register
    component: () => import('@/views/register/register.vue')
}, 
{
  path:'/login',
  component: () => import('@/views/login/Login.vue')
}, 
{
  path: '/',
  redirect: '/workbench',
  name: 'workbench',
  component:Layout,
  meta: {
      title: '工作台',
      icon:'Grid',
  },
  children: [
    {
      path: 'workbench',
      name: 'workbench',
      component:() => import('@/views/workbench/workbench.vue'),
      meta: {
          title: '工作台',
      },
    },
  ],
},
{
  path: '/index',
  //redirect: '/index/index',//重定向是定向到children中的页面
  name: 'Index',
  component:() => import('@/views/index/index.vue'),
  meta: {
   title: '数据大屏',//侧边栏名称
        icon:'house',//侧边栏图标
  },
  //children是主要的页面（除去侧边栏和上边栏的那部分区域）
},
  {
  path: '/files',
  name: 'files',
  component:Layout,
  meta: {
      title: '文件管理',
      icon:'Files',
  },
  children: [
    {
      path: 'file',
      name: 'file',
      component:() => import('@/views/file/file.vue'),
      meta: {
          title: '文件列表',
      },
    },
    {
      path: 'excelFile',
      name: 'excelFile',
      component:() => import('@/views/file/excelFile.vue'),
      meta: {
          title: 'excel录入(下拉)',
      },
    },
    {
      path: 'excelFileinput',
      name: 'excelFileinput',
      component:() => import('@/views/file/excelFileinput.vue'),
      meta: {
          title: 'excel录入(输入)',
      },
    },
  ],
},
  {
    path: '/user',
    redirect: '/user/manger',
    name: 'User',
    component:Layout,
    meta: {
      title: '用户管理',
      affix: true,
      icon:'UserFilled',
    },
    children: [
      {
        path: 'manger',
        name: 'UserManger',
        component:() => import('@/views/user/User.vue'),
        meta: {
          title: '用户管理',
          icon:'UserFilled',
          
        },
      },
    ],
  },{
    path: '/model',
    redirect: '/model/model',
    name: '模型',
    component:Layout,
    meta: {
        title: '模型',
        icon:'LocationInformation',
    },
    children: [
      {
        path: 'model',
        name: 'model',
        component:() => import('@/views/model/model.vue'),
        meta: {
            title: '模型',
            icon:'LocationInformation',
          
        },
      },
    ],
  },
  {
    path: '/test',
    redirect: '/test/test',
    name: 'test',
    //component:Layout,
    meta: {
        title: 'test',
        icon:'LocationInformation',
    },
    children: [
      {
        path: 'test',
        name: 'test',
        component:() => import('@/views/test/test.vue'),
        meta: {
            title: 'test',
            icon:'LocationInformation',
          
        },
      },
    ],
  },
  {
    path: '/environmental',
    redirect: '/environmental/environmental',
    name: 'environmental',
    component:Layout,
    meta: {
        title: '环境温湿度',
        icon:'LocationInformation',
    },
    children: [
      {
        path: 'environmental',
        name: 'environmental',
        component:() => import('@/views/environmental/environmental.vue'),
        meta: {
            title: '环境温湿度',
            icon:'LocationInformation',
          
        },
      },
    ],
  },
  {
    path:'/system',
    name:'system',
    component:Layout,
    meta:{
      title:'system',
      icon:'Wallet',
      roles: ['admin','editor']
    },
    children:[
      {
        path:'account',
        name:'account',
        component:() => import('@/views/system/Account.vue'),
        meta:{
          title:'account',
          icon:'User',
          roles: ['editor']
        }

      },
      {
        path:'group',
        name:'group',
        component:() => import('@/views/system/Group.vue'),
        meta:{
          title:'group',
          icon:'Refrigerator',
          roles: ['admin']
        }
      }, {
        path:'task',
        name:'task',
        component:() => import('@/views/system/Task.vue'),
        meta:{
          title:'account',
          icon:'Clock',
          roles: ['editor']
        }

      },
      {
        path:'Setting',
        name:'Setting',
        component:() => import('@/views/system/Setting.vue'),
        meta:{
          title:'系统设置',
          icon:'Setting',
          roles: ['admin']
        }
      }
    ]
  }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

//to 进入   from  来自哪里    next  到哪里去
router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  
  if (to.path === '/register') {
    // 如果要访问的页面是注册页面，则允许访问
    next()
  }//store状态中没有token，本地储存也没有token
  else if(!store.state.authStore.token && !token) {
    //startsWith()是JavaScript中的一个字符串方法，用于判断一个字符串是否以某个子串开头。
    //如果目标路径以/login开头，则返回真（true），否则返回假（false）。
    //我们可以判断当前路由是否为登录页面，如果是，则不进行跳转；如果不是，则跳转到登录页面。这样可以避免重复跳转和死循环
      if(to.path.startsWith('/login'))
      next()
      else {
        next('/login') //如果不是登录页面跳转/login
      }
      //页面刷新的情况，store状态中没有token，本地有token
  } else if(!store.state.authStore.token && token) {
    loginByToken(token).then(res=>{
      if(res.status==200) {

        store.commit('authStore/addUserInfo',res.data.name)
       if(to.matched.length == 0) {
          router.push(to.path)
       }
        next()
      } else{
        next('/login')
      }
    })
  } else {
    next()
  }
})


export default router