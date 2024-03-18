import Vue from 'vue'
import VueRouter from 'vue-router'
import projectIndexView from '../pages/admin/project/indexView.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home/project/index'
},
{
  path: '/home/project/index',
  component: () => import('../pages/home/project/indexView.vue')
},
{
  path: '/home',
  name: 'home',
  redirect: '/home/project/index',
  component: () => import('../pages/home/boxView.vue'),
  children: [
    {
      path: 'project',
      redirect: '/home/project/index'
    },
    {
      path: 'project/index',
      component: () => import('../pages/home/project/indexView.vue')
    },
    {
      path: 'project/detail',
      component: () => import('../pages/home/project/detailView.vue')
    }
  ]
},
{
  path: '/test',
  component: () => import('../pages/admin/project/indexView.vue') // create,还是执行了两次
},
{
  path: '/admin',
  redirect: '/admin/project/index',
  component: () => import('../pages/admin/boxView.vue'), // <router-view></router-view>
  children: [
    {
      path: 'category',
      redirect: 'category/index',
      component: () => import('../pages/emptyBoxView.vue'), // <router-view></router-view>
      children: [
        {
          path: 'add',
          component: () => import('../pages/admin/category/editView.vue')
        },
        {
          path: 'edit',
          component: () => import('../pages/admin/category/editView.vue')
        },
        {
          path: 'index',
          component: () => import('../pages/admin/category/indexView.vue') // <router-view></router-view>
        }
      ]
    },
    {
      path: 'project',
      redirect: 'project/index',
      component: () => import('../pages/emptyBoxView.vue'),
      children: [
        {
          path: 'add',
          component: () => import('../pages/admin/project/editView.vue')
        },
        {
          path: 'edit',
          component: () => import('../pages/admin/project/editView.vue')
        },
        {
          path: 'index',
          component: projectIndexView
        }
      ]
    },
    {
      path: 'item',
      redirect: 'item/index',
      component: () => import('../pages/emptyBoxView.vue'),
      children: [
        {
          path: 'add',
          component: () => import('../pages/admin/project/item/editView.vue')
        },
        {
          path: 'edit',
          component: () => import('../pages/admin/project/item/editView.vue')
        },
        {
          path: 'index',
          component: () => import('../pages/admin/project/item/indexView.vue')
        }
      ]
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
