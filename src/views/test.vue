<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable :children="list" />
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />

    <draggable v-model="list" tag="ul" :group="{ name: 'g1' }">
      <li v-for="el in list" :key="el.name">
        <p>{{ el.name }}</p>
        <nested-draggable :children="el.children" />
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import nestedDraggable from './infra/nested'
import rawDisplayer from './infra/raw-displayer'
export default {
  name: 'nested-example',
  display: 'Nested',
  order: 15,
  components: {
    nestedDraggable,
    rawDisplayer,
    draggable
  },
  data() {
    return {
      list: [
        {
          name: 'task 1',
          children: [
            {
              name: 'task 2',
              children: []
            }
          ]
        },
        {
          name: 'task 3',
          children: [
            {
              name: 'task 4',
              children: []
            }
          ]
        },
        {
          name: 'task 5',
          children: []
        }
      ]
    }
  }
}
</script>
<style scoped></style>
