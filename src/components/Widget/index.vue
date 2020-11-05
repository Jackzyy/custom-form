<template>
  <div :class="widgetSelect ? 'widget-focus' : 'widget'">
    <i class="iconfont icon-tuodong widget-move" v-show="widgetSelect"></i>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    widgetSelect: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.widget {
  padding: 10px 20px;
  border: 1px dashed rgba(0, 0, 0, 0);
}
.widget-focus {
  position: relative;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px dashed #409eff;
}
.widget-move {
  font-size: 22px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}
</style>
