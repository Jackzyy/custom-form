<template>
  <div class="cell">
    <i :class="icon"></i>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    icon: {
      type: String,
      required: true,
      default: 'Null'
    },
    name: {
      type: String,
      required: true,
      default: 'Null'
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  font-size: 14px;
  width: 41%;
  text-align: center;
  margin: 4.5%;
  padding: 10px 0;
  display: inline-block;
  box-sizing: border-box;
  border: 1px dashed #f4f6fc;
  background: #f4f6fc;
  cursor: move;
  &:hover {
    color: #1278f6;
    margin: 4.5%;
    border: 1px dashed #1278f6;
  }
  i {
    margin-right: 10px;
  }
}
</style>
