// layouts
import DefaultLayout from '../layout/default.vue'
import AuthLayout from '../layout/auth.vue'

// libs
import { createRouter, createWebHistory } from 'vue-router'

// pages
import { AnalyticsPage } from 'pages/analytics/analytics'
import { EmailPage } from 'pages/email'
import { ChatPage } from 'pages/chat'
import { TodoPage } from 'pages/todo'
import { CalendarPage } from 'pages/calendar'
import { UsersPage } from 'pages/users'
import { ManagmentPage } from 'pages/managment'
import { ProductPage, ProductsPage } from 'pages/products/products'
import { LearnPage } from 'pages/learn'
import { AuthPage } from 'pages/auth'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      beforeEnter: (to, from) => {
        const isAuth = localStorage.getItem('neirodialog-admin-token')

        if (!isAuth) {
          return '/auth'
        }
      },
      children: [
        { path: '/', component: AnalyticsPage, },
        { path: '/email', component: EmailPage, },
        { path: '/chat', component: ChatPage, },
        { path: '/todo', component: TodoPage, },
        { path: '/calendar', component: CalendarPage, },
        { path: '/users', component: UsersPage, },
        { path: '/managment', component: ManagmentPage, },
        { path: '/product', component: ProductsPage, },
        { path: '/product/:href', component: ProductPage, },
        { path: '/learn', component: LearnPage, },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      beforeEnter: (to, from) => {
        const isAuth = localStorage.getItem('neirodialog-admin-token')

        if (isAuth) {
          return '/'
        }
      },
      children: [
        { path: '/', component: { AuthPage, }, },
      ],
    },
  ],
})
