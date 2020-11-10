<template>
  <el-col class="grid-col" :span="8">
    <slot />
  </el-col>
</template>

<script>
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions]
}
</script>

<style lang="scss" scoped>
.grid-col {
  height: 50px;
  border: 1px solid #000;
}
</style>
