<template>
  <el-row class="draggable">
    <!-- 组件集区域 -->
    <el-col :span="4" class="draggable-elements">
      <CustomLib />
    </el-col>

    <!-- 组件拖拽回显区域 -->
    <el-col :span="16" class="draggable-echo">
      <CustomHead />
      <CustomArea />
    </el-col>

    <!-- 组件属性设置区域 -->
    <el-col :span="4" class="draggable-attr">
      <CustomSet />
    </el-col>
  </el-row>
</template>

<script>
import CustomHead from './components/CustomHead'
import CustomLib from './components/CustomLib'
import CustomArea from './components/CustomArea'
import CustomSet from './components/CustomSet'
export default {
  components: {
    CustomHead,
    CustomArea,
    CustomLib,
    CustomSet
  }
}
</script>

<style lang="scss" scoped></style>
