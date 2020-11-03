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
import options from '@/mixins/options'
export default {
  mixins: [options]
}
</script>

<style lang="scss" scoped></style>
