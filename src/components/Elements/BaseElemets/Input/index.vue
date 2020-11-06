<template>
  <div class="input">
    <el-input
      v-model="areaAttributes.defaultValue"
      :disabled="areaAttributes.disabled"
      :placeholder="areaAttributes.placeholder"
      :style="areaAttributes.styles"
    />
  </div>
</template>

<script>
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions]
}
</script>

<style lang="scss" scoped></style>
