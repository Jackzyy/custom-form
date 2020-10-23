import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formOptions: [], // 自定义表单结构
    formData: {} // 自定义表单数据
  },

  mutations: {
    SET_FORMOPTIONS(state, payload) {
      state.formOptions = payload
    },
    SET_FORMDATA(state, { key, val }) {
      state.formData[key] = val
    }
  },

  actions: {},

  modules: {}
})
