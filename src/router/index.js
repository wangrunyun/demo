import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    redirect:'/index/home/backstage',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: 'backstage',
          name: 'backstage',
          component: () => import('../views/home/backstage.vue'),
          meta:{title:'后台管理'}
        }, {
          path: 'album',
          name: 'album',
          component: () => import('../views/home/album.vue'),
          meta:{title:'相册管理'}
        }, {
          path: 'commodity',
          name: 'commodity',
          component: () => import('../views/home/commodity.vue'),
          meta:{title:'商品列表'}
        },
      ]
    }, {
      path: 'commodit',
      name: 'commodit',
      component: () => import('../views/commodit/index.vue'),
      children: [{
        path: 'list',
        name: 'list',
        component: () => import('../views/commodit/list.vue'),
      }, {
        path: 'classify',
        name: 'classify',
        component: () => import('../views/commodit/classify.vue'),
      }, {
        path: 'specification',
        name: 'specification',
        component: () => import('../views/commodit/specification.vue'),
      }, {
        path: 'type',
        name: 'type',
        component: () => import('../views/commodit/type.vue'),
      }, {
        path: 'comment',
        name: 'comment',
        component: () => import('../views/commodit/comment.vue'),
      },]
    }, {
      path: 'orderform',
      name: 'orderform',
      component: () => import('../views/orderform/index.vue'),
      children: [{
        path: 'management',
        name: 'management',
        component: () => import('../views/orderform/management.vue'),
      }, {
        path: 'invoice',
        name: 'invoice',
        component: () => import('../views/orderform/invoice.vue'),
      }, {
        path: 'service',
        name: 'service',
        component: () => import('../views/orderform/service.vue'),
      },]
    }, {
      path: 'member',
      name: 'member',
      component: () => import('../views/member/index.vue'),
      children: [{
        path: 'memberlist',
        name: 'memberlist',
        component: () => import('../views/member/memberlist.vue'),
      }, {
        path: 'toger',
        name: 'toger',
        component: () => import('../views/member/toger.vue'),
      },]
    }, {
      path: 'setting',
      name: 'setting',
      component: () => import('../views/setting/index.vue'),
      children: [{
        path: 'basics',
        name: 'basics',
        component: () => import('../views/setting/basics.vue'),
      }, {
        path: 'logistics',
        name: 'logistics',
        component: () => import('../views/setting/logistics.vue'),
      }, {
        path: 'Administrator',
        name: 'Administrator',
        component: () => import('../views/setting/Administrator.vue'),
      }, {
        path: 'transaction',
        name: 'transaction',
        component: () => import('../views/setting/transaction.vue'),
      },]
    }]
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('token')){
    next()
  }else{
    if(to.path=='/login'){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
