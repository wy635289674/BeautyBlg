import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import CustomerRouter from "./customer"
import AdminRouter from "./admin"

let router=new Router({
  routes: [
    ...CustomerRouter,
    ...AdminRouter
  ]
})
export default router;