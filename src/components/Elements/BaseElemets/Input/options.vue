<template>
  <el-form class="input-formOptions" size="small" label-position="top">
    <el-form-item label="字段标识">
      <el-input v-model="options.keyModel" />
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="options.name" />
    </el-form-item>
    <el-form-item label="占位内容">
      <el-input v-model="setAttributes.placeholder" />
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="setAttributes.defaultValue" />
    </el-form-item>
    <el-form-item label="操作属性">
      <el-checkbox v-model="setAttributes.disabled">禁用</el-checkbox>
    </el-form-item>
    <el-form-item label="自定义样式">
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
