import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formOptions: [], // 自定义表单结构
    formData: {}, // 自定义表单数据
    currentSelectId: -1 //  自定义区域选中组件的Id
  },

  getters: {
    getField
  },

  mutations: {
    updateField
  },

  actions: {},

  modules: {}
})
