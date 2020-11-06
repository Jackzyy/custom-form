<template>
  <el-card>
    <slot />
  </el-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.el-card {
  /deep/.el-card__body {
    height: 300px !important;
  }
}
</style>
