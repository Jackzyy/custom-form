<template>
  <div class="custom-area">
    <span class="custom-area-title">基础组件</span>
    <Draggable
      v-model="basicProp"
      v-bind="dragOptions"
      :group="{ name: 'draggable', pull: 'clone', put: false }"
      :clone="cloneEle"
      :sort="false"
    >
      <Cell
        v-for="ele in basicProp"
        :key="ele.id"
        :icon="ele.icon"
        :name="ele.name"
      />
    </Draggable>
  </div>
</template>

<script>
let idGlobal = 999
import basicProp from '@/components/Elements'
import Draggable from 'vuedraggable'
import Cell from '@/components/Cell'
export default {
  components: {
    Draggable,
    Cell
  },

  data() {
    return {
      basicProp
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
    cloneEle(val) {
      let afterCloneId = ++idGlobal
      return {
        // 深拷贝
        ...JSON.parse(JSON.stringify(val)),
        id: afterCloneId,
        widgetSelect: false,
        keyModel: `${val.type}_${afterCloneId}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-area {
  height: 100vh;
  border-right: 1px solid #eeeeee;
  &-title {
    display: inline-block;
    font-size: 14px;
    padding: 10px;
  }
}
</style>
