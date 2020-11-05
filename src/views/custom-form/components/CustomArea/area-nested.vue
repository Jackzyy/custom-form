<template>
  <Draggable
    class="area-nested"
    :list="_formOptions"
    v-bind="dragOptions"
    group="draggable"
    handle=".widget-move"
    @sort="onSort"
  >
    <Widget
      v-for="item in _formOptions"
      :key="item.id"
      :widgetSelect="item.widgetSelect"
      @click.native.stop="hanleSelect(item.id)"
    >
      <!-- 布局组件 -->
      <DynamicLink
        v-if="item.children"
        :data="item"
        :type="item.type"
        :key="item.id"
      >
        <AreaNested :_formOptions="item.children" :list="item.children" />
      </DynamicLink>
      <!-- 业务组件 -->
      <el-form-item v-else :key="item.id" :label="item.name">
        <DynamicLink :data="item" :type="item.type" :key="item.id" />
      </el-form-item>
    </Widget>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import DynamicLink from '@/components/DynamicLink'
import Widget from '@/components/Widget'
import { mapFields } from 'vuex-map-fields'
import formOptions from '@/mixins/formOptions'
export default {
  name: 'AreaNested',
  mixins: [formOptions],
  components: {
    Draggable,
    DynamicLink,
    Widget
  },

  props: {
    _formOptions: {
      type: Array,
      default: () => []
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
    ...mapFields(['currentSelectId'])
  },

  methods: {
    onSort(evt) {
      console.log(evt)
    },
    hanleSelect(id) {
      this.options.widgetSelect = false
      this.currentSelectId = id
      this.options.widgetSelect = true
    }
  }
}
</script>

<style lang="scss" scoped>
.area-nested {
  height: 100%;
}
</style>
