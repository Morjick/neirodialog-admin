// layouts
import DefaultLayout from '../layout/default.vue'

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
import { ProductsPage } from 'pages/products/products'
import { LearnPage } from 'pages/learn'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '/', component: AnalyticsPage, },
        { path: '/email', component: EmailPage, },
        { path: '/chat', component: ChatPage, },
        { path: '/todo', component: TodoPage, },
        { path: '/calendar', component: CalendarPage, },
        { path: '/users', component: UsersPage, },
        { path: '/managment', component: ManagmentPage, },
        { path: '/product', component: ProductsPage, },
        { path: '/learn', component: LearnPage, },
      ],
    },
  ],
})
