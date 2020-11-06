<template>
  <Draggable
    class="area-nested"
    :list="_formOptions"
    v-bind="dragOptions"
    group="draggable"
    handle=".widget-move"
    @add="onAdd"
  >
    <Widget
      v-for="item in _formOptions"
      :key="item.id"
      :widgetSelect="item.widgetSelect"
      @click.native.stop="hanleSelect(item.id)"
    >
      <!--card layout components -->
      <DynamicLink
        v-if="item.type === 'card'"
        :data="item"
        :type="item.type"
        :key="item.id"
      >
        <AreaNested :_formOptions="item.children" />
      </DynamicLink>
      <!--grid layout components -->
      <DynamicLink
        v-else-if="item.type === 'grid'"
        :data="item"
        :type="item.type"
        :key="item.id"
      >
        <el-col
          v-for="(col, index) in item.children"
          :key="index"
          :span="col.span"
        >
          <AreaNested :_formOptions="col.children" />
        </el-col>
      </DynamicLink>
      <!-- base components -->
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
    }
  },

  methods: {
    onAdd() {
      if (
        this.currentSelectId > 0 &&
        this.currentSelectId !== this.bufferSelectId
      )
        this.options.widgetSelect = false
      this.currentSelectId = this.bufferSelectId
    },
    hanleSelect(id) {
      this.options.widgetSelect = false
      this.currentSelectId = id
      this.bufferSelectId = id
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
