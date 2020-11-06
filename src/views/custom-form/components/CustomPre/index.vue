<template>
  <el-form
    class="custom-pre"
    :label-width="formConfig.lableWidth + 'px'"
    :label-position="formConfig.labelPosition"
    :size="formConfig.size"
    :style="formConfig.styles"
  >
    <PreNested
      v-for="options in preFormOptions"
      :key="options.id"
      :options="options"
    />
  </el-form>
</template>

<script>
import PreNested from './pre-nested'
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions],
  components: {
    PreNested
  }
}
</script>

<style lang="scss" scoped></style>
