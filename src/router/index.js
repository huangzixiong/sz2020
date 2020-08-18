//主路由配置

import Vue from "vue";
import VueRouter from "vue-router"
Vue.use(VueRouter);

//引入分模块路由
import movie from "./movie";
import cinema from "./cinema";
import mine from "./mine"




export default new VueRouter({
  routes: [
    movie,
    cinema,
    mine
  ]
})