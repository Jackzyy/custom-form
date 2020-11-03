<template>
  <el-row class="draggable">
    <!-- 组件集区域 -->
    <el-col :span="4" class="draggable-elements">
      <CustomLib />
    </el-col>
    <!-- 组件拖拽回显区域 -->
    <el-col :span="16" class="draggable-echo">
      <div class="draggable-echo-head" shadow="never">
        <el-button type="text" icon="el-icon-edit" @click="handlePreview">
          预览
        </el-button>
      </div>
      <span
        class="draggable-echo-tips"
        v-if="!this.$store.state.formOptions.length"
      >
        从左侧拖拽添加表单组件
      </span>
      <!-- 自定义表单 -->
      <el-form>
        <el-scrollbar>
          <CustomArea />
        </el-scrollbar>
      </el-form>
    </el-col>
    <!-- 组件属性设置区域 -->
    <el-col :span="4" class="draggable-attr">
      <CustomSet />
    </el-col>
  </el-row>
</template>

<script>
import CustomLib from './components/CustomLib'
import CustomArea from './components/CustomArea'
import CustomSet from './components/CustomSet'
export default {
  components: {
    CustomArea,
    CustomLib,
    CustomSet
  },

  methods: {
    handlePreview() {
      console.log(this.$store.state.formOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
.draggable {
  &-echo {
    height: 100vh;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    position: relative;
    &-head {
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      border-bottom: 1px solid #eeeeee;
    }
    &-tips {
      font-size: 22px;
      color: #ccc;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-area {
      box-sizing: border-box;
      height: calc(100vh - 62px);
      padding: 20px;
    }
  }
}
</style>
