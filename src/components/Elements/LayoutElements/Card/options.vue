<template>
  <el-form class="input-formOptions" size="small" label-position="top">
    <el-form-item label="阴影显示">
      <el-radio-group v-model="setAttributes.shadow">
        <el-radio-button label="always">总是</el-radio-button>
        <el-radio-button label="hover">鼠标悬浮</el-radio-button>
        <el-radio-button label="never">从不</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="自定义组件样式">
      <el-input v-model="setAttributes.styles" type="textarea" :rows="4" />
    </el-form-item>
  </el-form>
</template>

<script>
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions]
}
</script>

<style lang="scss" scoped></style>
