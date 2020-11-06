<template>
  <component
    class="dynamic-link"
    :is="component"
    v-bind="linkProps()"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'dynamic-link',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    },
    type: {
      type: String,
      required: true,
      default: 'Error'
    },
    option: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      component: null
    }
  },

  computed: {
    loader() {
      let elementPosition = this.data.children
        ? 'LayoutElements'
        : 'BaseElemets'
      let elementOption = this.option ? 'options' : ''
      if (this.type)
        return () =>
          import(
            `@/components/Elements/${elementPosition}/${this.titleCase(
              this.type
            )}/${elementOption}`
          )
      return () => Promise.reject()
    }
  },

  watch: {
    type() {
      this.mountComponent()
    }
  },

  mounted() {
    this.mountComponent()
  },

  methods: {
    mountComponent() {
      this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
        .catch(err => {
          this.component = () => import('@/components/Error')
          throw err
        })
    },

    linkProps() {
      return {
        data: this.data
      }
    },

    titleCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
