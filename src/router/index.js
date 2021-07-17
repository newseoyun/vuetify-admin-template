import Vue from 'vue'
import VueRouter from 'vue-router'

import DefaultLayout from '@/layouts/default/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'
import PageLayout from '@/layouts/page/Index'


/*
// lazy loading

import Test from '@/views/Test'

const Test = function(resolve, reject) {
  return import('@/views/Test') // 다이나믹 임포트

  // resolve({ // promise 객체를 이용한 lazy loading
  //   'template': '<div>HELLO TEST</div>'
  // })
}

빌드 시 해당 컴포넌트 부분은 청크 파일로 따로 생성된다.
각각 다 따로 생성되면 비효율적이니까 특수 주석으로 청크파일을 grouping 할 수 있음.

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
        component: () => import(
          /* webpackChunkName: "views-default" */
          '@/views/Dashboard'
        )
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: () => import(
          /* webpackChunkName: "views-default-grid" */
          '@/views/GridSystem'
        )
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: () => import(
          /* webpackChunkName: "views-default-grid" */
          '@/views/GridListPage'
        )
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: () => import(
          /* webpackChunkName: "views-default-grid" */
          '@/views/Breakpoints'
        )
      },
      {
        path: '/typography',
        name: 'Typography',
        component: () => import(
          /* webpackChunkName: "views-typography" */
          '@/views/Typography'
        )
      },
      {
        path: '/table/basic-table',
        name: 'BasicTable',
        component: () => import(
          /* webpackChunkName: "views-tables" */
          '@/views/table/BasicTable'
        )
      },
      {
        path: '/table/app-table',
        name: 'AppTable',
        component: () => import(
          /* webpackChunkName: "views-tables" */
          '@/views/table/AppTable'
        )
      },
      {
        path: '/form/validation-form',
        name: 'ValidationForm',
        component: () => import(
          /* webpackChunkName: "views-validation-form" */
          '@/views/form/ValidationForm'
        )
      },
      {
        path: '/form/app-form',
        name: 'AppForm',
        component: () => import(
          /* webpackChunkName: "views-app-form" */
          '@/views/form/AppForm'
        )
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: () => import(
          /* webpackChunkName: "views-buttons" */
          '@/views/Buttons'
        )
      },
      {
        path: '/icons',
        name: 'Icons',
        component: () => import(
          /* webpackChunkName: "views-icons" */
          '@/views/Icons'
        )
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
        component: () => import(
          /* webpackChunkName: "views-authentication" */
          '@/views/authentication/SignIn'
        )
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(
          /* webpackChunkName: "views-authentication" */
          '@/views/authentication/SignUp'
        )
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
        component: () => import(
          /* webpackChunkName: "views-page" */
          '@/views/page/ProductList'
        )
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
