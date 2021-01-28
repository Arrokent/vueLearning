import Vue from 'vue'
import Router from 'vue-router'

// 直接引入加载
// import Home from '../components/Home.vue'
// import Mine from '../components/Mine.vue'
// import User from '../components/User.vue'

// 懒加载，不会第一时间下载各个components
const Home = () => import('../components/Home.vue')
const HomeMessages = () => import('../components/HomeMessage.vue')
const HomeNews = () => import('../components/HomeNews.vue')

const Mine = () => import('../components/Mine.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile')


// Vue.use使用插件
Vue.use(Router)

// 配置路由信息
const routes = [
  // 默认路径
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'home'
    },
    // 路由嵌套
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: 'homeNews'
        },
      },
      {
        path: 'messages',
        component: HomeMessages,
        meta: {
          title: 'homeMessages'
        },
      }
    ]
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      title: 'Mine'
    },
  }
  ,
  // 动态路由
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: 'User'
    },
  },
  // 传递参数
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    },
  }
]

const router =  new Router({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

router.afterEach((to, from) => {
  // console.log("afterEach");
})

export default router
