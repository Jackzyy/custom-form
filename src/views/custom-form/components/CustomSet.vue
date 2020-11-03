<template>
  <el-tabs class="custom-set" v-model="activeName" stretch>
    <el-tab-pane label="字段属性" name="first">
      <DynamicLink
        class="custom-set-attr"
        v-if="selectComponentVal.type"
        option
        :data="{ selectComponentVal, selectIndex }"
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
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    DynamicLink
  },

  data() {
    return {
      activeName: 'first'
    }
  },

  computed: {
    ...mapFields(['formOptions', 'selectIndex']),
    selectComponentVal() {
      return this.formOptions[this.selectIndex]
        ? this.formOptions[this.selectIndex]
        : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-set {
  &-attr {
    padding: 0 10px;
  }
}
</style>
