import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'//内容路由

Vue.use(Router)

export default new Router({
  routes: [
    /*{ path: '*', component: NotFoundComponent },//404页面*/
    {//菜单内容页面
        path: '/',
        name: 'index',
        component: index,
        children: []
    }
  ]
})
