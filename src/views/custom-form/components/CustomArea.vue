<template>
  <Draggable
    class="custom-area"
    v-model="formOptions"
    v-bind="dragOptions"
    key="area"
    group="draggable"
    handle=".widget-move"
    @sort="onSort"
  >
    <Widget
      class="custom-area-item"
      v-for="(item, index) in formOptions"
      :key="item.id"
      :widgetSelect="item.widgetSelect"
      @click.native="hanleSelect(index)"
    >
      <el-form-item :key="item.id" :label="item.name">
        <DynamicLink
          :data="{ item, selectIndex: index }"
          :type="item.type"
          :key="item.id"
        >
        </DynamicLink>
      </el-form-item>
    </Widget>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import DynamicLink from '@/components/DynamicLink'
import Widget from '@/components/Widget'
import { mapFields } from 'vuex-map-fields'
export default {
  components: {
    Draggable,
    DynamicLink,
    Widget
  },

  data() {
    return {
      lastSelectIndex: -1
    }
  },

  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    },
    ...mapFields(['formOptions', 'selectIndex'])
  },

  methods: {
    // 排序后重新赋lastSelectIndex值
    onSort(evt) {
      // 防止数组越界
      if (evt.pullMode && evt.newIndex < this.lastSelectIndex + 1) {
        this.lastSelectIndex++
      }
      this.hanleSelect(evt.newIndex)
    },
    // 选中组件，应避免使用循环
    hanleSelect(index) {
      if (this.lastSelectIndex !== -1)
        this.formOptions[this.lastSelectIndex].widgetSelect = false
      this.selectIndex = index
      this.formOptions[index].widgetSelect = true
      this.lastSelectIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-area {
  box-sizing: border-box;
  height: calc(100vh - 62px);
  padding: 20px;
}
</style>
