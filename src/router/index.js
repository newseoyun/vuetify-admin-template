import Vue from 'vue'
import VueRouter from 'vue-router'

import DefaultLayout from '@/layouts/default/Index'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'
import Typography from '@/views/Typography'
import Tables from '@/views/Tables'
import Form from '@/views/Form'
import Buttons from '@/views/Buttons'
import Icons from '@/views/Icons'

import AuthenticationLayout from '@/layouts/authentication/Index'
import SignIn from '@/views/authentication/SignIn'
import SignUp from '@/views/authentication/SignUp'

import PageLayout from '@/layouts/page/Index'
import ProductList from '@/views/page/ProductList'


/*
// lazy loading

import Test from '@/views/Test'

const Test = function(resolve, reject) {
  return import('@/views/Test') // 다이나믹 임포트

  // resolve({ // promise 객체를 이용한 lazy loading
  //   'template': '<div>HELLO TEST</div>'
  // })
}

*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/Test') // lazy loading
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: Breakpoints
      },
      {
        path: '/typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: '/tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: '/form',
        name: 'Form',
        component: Form
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons
      },
      {
        path: '/icons',
        name: 'Icons',
        component: Icons
      },
    ]
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp
      },
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
