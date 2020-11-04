import { mapFields } from 'vuex-map-fields'

export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {}
    }
  },

  computed: {
    ...mapFields(['formOptions', 'currentSelectId']),
    // 配置区组件总配置
    options() {
      return this.searchOptions(this.formOptions, this.currentSelectId)
    },
    // 配置区组件属性
    setAttributes() {
      return this.options.attributes
    },
    // 组装区组件属性
    areaAttributes() {
      return this.data.attributes
    }
  },

  methods: {
    searchOptions(formOptions, currentSelectId) {
      let currentSelectCom = {}
      formOptions.forEach(item => {
        if (item.id === currentSelectId) {
          currentSelectCom = item
        } else {
          if (item.children) {
            currentSelectCom = this.searchOptions(item.children)
          }
        }
      })
      return currentSelectCom
    }
  }
}
