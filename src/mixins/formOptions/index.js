import { mapFields } from 'vuex-map-fields'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapFields(['formOptions', 'currentSelectId']),
    options() {
      return this.searchOptions(this.formOptions, this.currentSelectId)
    },
    setAttributes() {
      return this.options.attributes
    },
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
          if (
            JSON.stringify(currentSelectCom) === '{}' &&
            item.children &&
            item.children.length > 0
          ) {
            currentSelectCom = this.searchOptions(
              item.children,
              currentSelectId
            )
          }
        }
      })
      return currentSelectCom
    }
  }
}
