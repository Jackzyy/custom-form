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
      if (this.type && this.option)
        return () =>
          import(`@/components/Elements/${this.titleCase(this.type)}/options`)
      if (this.type)
        return () =>
          import(`@/components/Elements/${this.titleCase(this.type)}`)
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
      return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())
    }
  }
}
</script>

<style lang="scss" scoped></style>
