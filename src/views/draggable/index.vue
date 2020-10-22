<template>
  <el-row class="draggable">
    <!-- 组件集合区域 -->
    <el-col :span="12">
      <draggable
        v-model="eleLists"
        v-bind="dragOptions"
        :group="{ name: 'draggable', pull: 'clone', put: false }"
        :clone="cloneEle"
        :sort="false"
        @start="drag = true"
        @end="drag = false"
      >
        <i v-for="ele in eleLists" :key="ele.id" :class="ele.icon"></i>
      </draggable>
    </el-col>
    <!-- 组件拖拽回显区域 -->
    <el-col :span="12" ref="ele">
      <draggable
        v-model="formLists"
        v-bind="dragOptions"
        group="draggable"
        @start="drag = true"
        @end="drag = false"
      >
        <DynamicLink
          v-for="item in formLists"
          :key="item.id"
          :data="item"
          :type="item.type"
        />
      </draggable>
      <!-- 组件属性设置区域 -->
    </el-col>
  </el-row>
</template>

<script>
let idGlobal = 999
import DynamicLink from '@/components/DynamicLink'
export default {
  components: {
    DynamicLink
  },

  data() {
    return {
      drag: false,
      eleLists: [
        {
          id: 1,
          name: '输入框',
          type: 'input',
          icon: 'el-icon-more'
        },
        {
          id: 2,
          name: '按钮',
          type: 'button',
          icon: 'el-icon-info'
        }
      ],
      formLists: [
        {
          id: 1,
          name: '输入框',
          type: 'input',
          icon: 'el-icon-more'
        },
        {
          id: 2,
          name: '按钮',
          type: 'button',
          icon: 'el-icon-info'
        },
        {
          id: 3,
          name: '按钮',
          type: 'button',
          icon: 'el-icon-info'
        },
        {
          id: 4,
          name: '按钮',
          type: 'button',
          icon: 'el-icon-info'
        }
      ]
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
      return {
        ...val,
        id: idGlobal++
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
