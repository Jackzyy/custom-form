<template>
  <el-row class="grid-row">
    <slot />
  </el-row>
</template>

<script>
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions]
}
</script>

<style lang="scss" scoped>
.grid-row {
  height: 150px;
  background-color: #ccc;
}
</style>
