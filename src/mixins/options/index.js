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
    options() {
      return this.formOptions[this.data.selectIndex]
    }
  }
}
