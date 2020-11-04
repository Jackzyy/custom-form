<template>
  <el-tabs class="custom-set" v-model="activeName" stretch>
    <el-tab-pane label="字段属性" name="first">
      <DynamicLink
        class="custom-set-attr"
        v-if="selectComponentVal.type"
        option
        :data="selectComponentVal"
        :type="selectComponentVal.type"
        :key="selectComponentVal.id"
      />
    </el-tab-pane>
    <el-tab-pane label="表单属性" name="second">
      <span>表单属性</span>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import DynamicLink from '@/components/DynamicLink'
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions],
  components: {
    DynamicLink
  },

  data() {
    return {
      activeName: 'first'
    }
  },

  computed: {
    selectComponentVal() {
      return this.options
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-set {
  height: 100vh;
  border-left: 1px solid #eeeeee;
  &-attr {
    padding: 0 10px;
  }
}
</style>
