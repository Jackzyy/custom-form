<template>
  <el-form class="form-config" size="small" label-position="top">
    <el-form-item label="表单标签宽度">
      <el-input-number
        v-model="formConfig.lableWidth"
        :step="50"
        :min="100"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="表单对齐方式">
      <el-radio-group v-model="formConfig.labelPosition">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="表单组件尺寸">
      <el-radio-group v-model="formConfig.size">
        <el-radio-button label="">默认</el-radio-button>
        <el-radio-button label="medium">中等</el-radio-button>
        <el-radio-button label="small">小号</el-radio-button>
        <el-radio-button label="mini">迷你</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="自定义样式">
      <el-input v-model="formConfig.styles" type="textarea" :rows="4" />
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
