import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
  },  
  getters:{
    //獲取屬性的狀態
    isLogin: state => state.isLogin,
  },
  mutations: {
    //保持登錄狀態
    userStatus(state, flag){
      state.isLogin = flag
    }
  },
  actions: {
    // 應用mutations
      userLogin({commit},flag){
        commit("userStatus",flag)
      }
  },
  modules: {
  }
})
