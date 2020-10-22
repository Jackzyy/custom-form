<template>
  <div class="input">
    <el-input></el-input>
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
  }
}
</script>

<style lang="scss" scoped></style>
