<template>
  <draggable class="dragArea" tag="ul" :list="children" :group="{ name: 'g1' }">
    <li v-for="el in children" :key="el.name">
      <p>{{ el.name }}</p>
      <nested-draggable :children="el.children" />
    </li>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  props: {
    children: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  name: 'nested-draggable'
}
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
