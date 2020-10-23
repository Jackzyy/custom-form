<template>
  <div class="input">
    <el-input v-model="inputVal"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: -1
    },
    type: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    inputVal: {
      get() {
        return this.$store.state.formData[`${this.type}_${this.id}`]
      },
      set(val) {
        this.$store.commit('SET_FORMDATA', {
          key: `${this.type}_${this.id}`,
          val
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
