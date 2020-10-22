<template>
  <div class="input">
    <el-input></el-input>
    <el-button @click="click">AAA</el-button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    },
    name: {
      type: String
    }
  },

  methods: {
    click() {
      this.$emit('btnClick', '111111')
    }
  }
}
</script>

<style lang="scss" scoped></style>
