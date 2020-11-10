<template>
  <el-form
    class="custom-area"
    :label-width="formConfig.lableWidth + 'px'"
    :label-position="formConfig.labelPosition"
    :size="formConfig.size"
    :style="formConfig.styles"
  >
    <span class="custom-area-tips" v-if="!formOptions.length">
      从左侧拖拽添加表单组件
    </span>
    <AreaNested :_formOptions="formOptions" />
  </el-form>
</template>

<script>
import AreaNested from './area-nested'
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions],
  components: {
    AreaNested
  }
}
</script>

<style lang="scss" scoped>
.custom-area {
  height: calc(100vh - 80px);
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  &-tips {
    font-size: 22px;
    color: #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
