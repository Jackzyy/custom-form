import { mapFields } from 'vuex-map-fields'

export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    ...mapFields(['formOptions']),
    // 组件总配置
    options() {
      return this.formOptions[this.data.selectIndex]
    },
    // 组件属性
    attributes() {
      return this.formOptions[this.data.selectIndex].attributes
    }
  }
}
