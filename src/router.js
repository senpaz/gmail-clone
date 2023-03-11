import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/Login'
import Forget from '@/views/Forget'
import Dashboard from '@/views/Dashboard'
import Mail from '@/views/Mail'
import AppEmailBody from '@/components/AppEmailBody'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'login', component: Login, alias: '/'},
    { path: '/forget', name: 'forget', component: Forget},
    { path: '/dashboard', name: 'dashboard', component: Dashboard},
    { path: '/mail', name: 'mail', component: Mail, children: [
        {path: ':id?', component: AppEmailBody, props: true}
      ]},
  ],
  linkActiveClass:'active',
  // linkExactActiveClass: 'active'
})

