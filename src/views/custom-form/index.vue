<template>
  <el-row class="draggable">
    <!-- 组件集区域 -->
    <el-col :span="4" class="draggable-elements">
      <span class="draggable-elements-title">基础组件</span>
      <Draggable
        v-model="basicProp"
        v-bind="dragOptions"
        key="elements"
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
    </el-col>
    <!-- 组件拖拽回显区域 -->
    <el-col :span="16" class="draggable-echo">
      <div class="draggable-echo-head" shadow="never">
        <el-button type="text" icon="el-icon-edit">预览</el-button>
      </div>
      <span class="draggable-echo-tips" v-if="!formOptions.length">
        从左侧拖拽添加表单组件
      </span>
      <!-- 自定义表单 -->
      <el-form>
        <el-scrollbar>
          <Draggable
            class="draggable-echo-area"
            v-model="formOptions"
            v-bind="dragOptions"
            key="area"
            group="draggable"
            handle=".widget-move"
            @sort="onSort"
          >
            <Widget
              class="draggable-echo-area__item"
              v-for="(item, index) in formOptions"
              :key="item.id"
              :widgetSelect="item.widgetSelect"
              @click.native="hanleSelect(index)"
            >
              <el-form-item :key="item.id" :label="item.name">
                <DynamicLink :data="item" :type="item.type" />
              </el-form-item>
            </Widget>
          </Draggable>
        </el-scrollbar>
      </el-form>
    </el-col>
    <!-- 组件属性设置区域 -->
    <el-col :span="4" class="draggable-attr">
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="字段属性" name="first">
          <span>字段属性</span>
        </el-tab-pane>
        <el-tab-pane label="表单属性" name="second">
          <span>表单属性</span>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
let idGlobal = 999
import Draggable from 'vuedraggable'
import DynamicLink from '@/components/DynamicLink'
import Cell from '@/components/Cell'
import basicProp from '@/components/Elements'
import Widget from '@/components/Widget'
export default {
  components: {
    Draggable,
    DynamicLink,
    Cell,
    Widget
  },

  data() {
    return {
      basicProp,
      activeName: 'first',
      lastSelectIndex: -1,
      selectComponentVal: {}
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
    formOptions: {
      get() {
        return this.$store.state.formOptions
      },
      set(val) {
        this.$store.commit('SET_FORMOPTIONS', val)
      }
    }
  },

  methods: {
    cloneEle(val) {
      return {
        ...val,
        id: idGlobal++
      }
    },
    // 排序后重新赋lastSelectIndex值
    onSort(evt) {
      if (!evt.pullMode) this.lastSelectIndex = evt.newIndex
    },
    // 选中组件，避免使用循环
    hanleSelect(index) {
      if (this.lastSelectIndex !== -1)
        this.formOptions[this.lastSelectIndex].widgetSelect = false
      this.selectComponentVal = this.formOptions[index]
      this.formOptions[index].widgetSelect = true
      this.lastSelectIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.draggable {
  &-elements {
    height: 100vh;
    &-title {
      display: inline-block;
      font-size: 14px;
      padding: 10px;
    }
  }
  &-echo {
    height: 100vh;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    position: relative;
    &-head {
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      border-bottom: 1px solid #eeeeee;
    }
    &-tips {
      font-size: 22px;
      color: #ccc;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-area {
      box-sizing: border-box;
      height: calc(100vh - 62px);
      padding: 20px;
    }
  }
}
</style>
