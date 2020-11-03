<template>
  <div class="input">
    <el-input
      v-model="attributes.defaultValue"
      :disabled="attributes.disabled"
      :placeholder="attributes.placeholder"
      :style="attributes.styles"
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
