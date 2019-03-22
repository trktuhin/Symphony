import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)
Vue.use(Vuetify,{
  theme:{
    primary:'#16f7e8',
    secondary:'#546E7A'
  }
})
const router=new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
