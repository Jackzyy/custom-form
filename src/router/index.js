import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Draggable',
    component: () => import('@/views/draggable')
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
