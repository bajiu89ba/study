import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      redirect: '/mychance',
      children: [
        {
          path: '/dept',
          name: 'dept',
          component: () => import('../views/DeptView.vue')
        },
        {
          path: '/dict',
          name: 'dict',
          component: () => import('../views/DictView.vue')
        },
        {
          path: '/role',
          name: 'role',
          component: () => import('../views/RoleView.vue')
        },
        {
          path: '/emp',
          name: 'emp',
          component: () => import('../views/EmpView.vue')
        },
        {
          path: '/prod',
          name: 'prod',
          component: () => import('../views/ProdView.vue')
        },
        {
          path: '/cust',
          name: 'cust',
          component: () => import('../views/CustomerView.vue')
        },
        {
          path: '/assign',
          name: 'assign',
          component: () => import('../views/CustomerAssignView.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/CustomerContactView.vue')
        },
        {
          path: '/newchance',
          name: 'newchance',
          component: () => import('../views/NewChanceView.vue')
        },
        {
          path: '/approve',
          name: 'approve',
          component: () => import('../views/ApproveChanceView.vue')
        },
        {
          path: '/mychance',
          name: 'mychance',
          component: () => import('../views/MyChanceView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

// 全局守卫：登录拦截 本地没有存token,请重新登录
router.beforeEach((to, from, next) => {
  // 判断有没有登录
  if (!sessionStorage.getItem('Token')) {
    if (to.name == 'login') {
      next()
    } else {
      router.push('login')
    }
  } else {
    next()
  }
})

export default router
