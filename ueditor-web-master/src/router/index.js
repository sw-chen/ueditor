import Vue from 'vue'
import Router from 'vue-router'
import ueditor from '@/pages/ueditor_demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ueditor',
      name: 'ueditor',
      component: ueditor
    }
  ]
})
