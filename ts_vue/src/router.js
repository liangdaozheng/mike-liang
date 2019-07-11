import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import List from './views/List.vue'
import Rong from './views/Rong.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
// import Banner from './components/banner.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {path:'/banner',component:Banner},
    {path:'/reg',component:Reg},
    {path:'/login',component:Login},
    {path:'/index',component:Index},
    {path:'/list',component:List},
    {path:'/details/:tid',component:Details,props:true},
    {path:'/',redirect:"/index"},
    {path:'*',component:Rong}
  ]
})
