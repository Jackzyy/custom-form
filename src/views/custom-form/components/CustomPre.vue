<template>
  <div class="custom-pre" shadow="never">
    <el-button type="text" icon="el-icon-edit" @click="handlePreview">
      预览
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handlePreview() {
      console.log(this.$store.state.formOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-pre {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
}
</style>
