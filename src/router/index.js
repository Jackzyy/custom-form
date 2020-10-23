import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CustomForm',
    component: () => import('@/views/custom-form')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test')
  }
]

const router = new VueRouter({
  routes
})

export default router
