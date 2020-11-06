<template>
  <div class="custom-head" shadow="never">
    <header>
      <el-button type="text" icon="el-icon-edit" @click="dialogVisible = true">
        预览
      </el-button>
    </header>

    <el-dialog
      title="预览"
      :visible.sync="dialogVisible"
      width="60%"
      top="10vh"
    >
      <CustomPre />
      <span slot="footer">
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CustomPre from './CustomPre'
export default {
  components: {
    CustomPre
  },

  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-head {
  header {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  /deep/.el-dialog__body {
    height: 62vh;
    overflow-y: scroll;
  }
}
</style>
