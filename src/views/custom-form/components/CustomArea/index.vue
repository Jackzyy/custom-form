<template>
  <el-form class="custom-area">
    <span class="custom-area-tips" v-if="!formOptions.length">
      从左侧拖拽添加表单组件
    </span>
    <AreaNested :formOptions="formOptions" @hanleSelect="hanleSelect" />
  </el-form>
</template>

<script>
import AreaNested from './area-nested'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    AreaNested
  },

  computed: {
    ...mapFields(['formOptions', 'currentSelectId'])
  },

  methods: {
    // 选中组件，应避免使用循环
    hanleSelect(selectVal) {
      this.currentSelectId = selectVal.id
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-area {
  height: calc(100vh - 60px);
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
