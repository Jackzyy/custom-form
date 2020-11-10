<template>
  <el-row class="grid">
    <el-col v-for="col in options.children" :key="col.id" :span="col.span">
      <slot />
    </el-col>
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
  .el-col {
    border: 1px solid #000;
  }
}
</style>
