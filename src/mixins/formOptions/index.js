import { mapFields } from 'vuex-map-fields'

export default {
  props: {
    // custom area prop data
    data: {
      type: Object,
      required: false,
      default: () => {}
    }
  },

  computed: {
    ...mapFields([
      'formOptions',
      'formData',
      'currentSelectId',
      'bufferSelectId'
    ]),
    // preview data must deep clone
    preFormOptions() {
      return JSON.parse(JSON.stringify(this.formOptions))
    },
    options() {
      return this.searchOptions(this.formOptions, this.currentSelectId)
    },
    // custom set attributes
    setAttributes() {
      return this.options.attributes
    },
    // custom area attributes
    areaAttributes() {
      return this.data.attributes
    }
  },

  // watch: {
  //   formOptions(newVal) {
  //     this.formData = newVal
  //   }
  // },

  methods: {
    // recursive search currentSelectCom
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
