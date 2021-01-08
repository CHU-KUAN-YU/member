import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



router.beforeEach((to, from, next) => { 
  //獲取使用者登入成功後儲存的登入標誌
  let getFlag = localStorage.getItem("flag");
  
  //如果登入標誌存在且為isLogin，即使用者已登入
  if(getFlag === "isLogin"){
  
    //設定vuex登入狀態為已登入
    store.state.isLogin = true
    next()
    
    //如果已登入，還想想進入登入註冊介面，則定向回首頁
    if (!to.meta.isLogin) {
      //iViewUi友好提示
      alert('請先退出登入')
      next({
          path: '/home'
      })
    }   
    //如果登入標誌不存在，即未登入
  }else{  
    // store.state.isLogin = false
    
    //使用者想進入需要登入的頁面，則定向回登入介面
    if(to.meta.isLogin){      
      //iViewUi友好提示
      alert('請先登入')
      //使用者進入無需登入的介面，則跳轉繼續
      next({
        path: '/',
      })
    }else{
      next()
    }
    
  
  }
  
 });
  
 router.afterEach(route => {
  window.scroll(0, 0);
 });