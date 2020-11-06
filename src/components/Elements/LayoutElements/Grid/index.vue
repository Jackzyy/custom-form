<template>
  <el-row class="grid">
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
.grid {
  border: 1px solid #000;
  height: 500px;
}
</style>
