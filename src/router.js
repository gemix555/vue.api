import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile.vue'
import NotFound from '@/views/NotFound.vue'
import Characters from '@/views/Characters.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/',
      name: 'characters',
      component: Characters           
    },
    {
      path: '/:id',
      name: 'profile',
      component: Profile
        
    }
  ]
})
