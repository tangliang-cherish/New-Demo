import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import brand from '@/components/brand'
import product from '@/components/product'
import company from '@/components/company'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
  ]
})
