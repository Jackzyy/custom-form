<template>
  <Draggable
    class="area-nested"
    :list="formOptions"
    v-bind="dragOptions"
    group="draggable"
    handle=".widget-move"
    @sort="onSort"
  >
    <Widget
      v-for="(item, index) in formOptions"
      :key="item.id"
      :widgetSelect="item.widgetSelect"
      @click.native="hanleSelect(index, item)"
    >
      <!-- 布局组件 -->
      <DynamicLink
        v-if="item.children"
        :data="{ item, selectIndex: index }"
        :type="item.type"
        :key="item.id"
      >
        <AreaNested :formOptions="item.children" :list="item.children" />
      </DynamicLink>
      <!-- 业务组件 -->
      <el-form-item v-else :key="item.id" :label="item.name">
        <DynamicLink
          :data="{ item, selectIndex: index }"
          :type="item.type"
          :key="item.id"
        />
      </el-form-item>
    </Widget>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import DynamicLink from '@/components/DynamicLink'
import Widget from '@/components/Widget'
export default {
  name: 'AreaNested',
  components: {
    Draggable,
    DynamicLink,
    Widget
  },

  props: {
    formOptions: {
      type: Array,
      default: () => []
    },
    selectIndex: {
      type: Number,
      default: -1
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
    }
  },

  methods: {
    // 排序后重新赋lastSelectIndex值
    onSort(evt) {
      // 防止数组越界
      if (evt.pullMode && evt.newIndex < this.selectIndex + 1) {
        this.hanleSelect(this.selectIndex + 1)
      }
      this.hanleSelect(evt.newIndex)
    },
    // 选中组件，应避免使用循环
    hanleSelect(index, item) {
      this.$emit('hanleSelect', index, item)
    }
  }
}
</script>

<style lang="scss" scoped>
.area-nested {
  height: 100%;
}
</style>
