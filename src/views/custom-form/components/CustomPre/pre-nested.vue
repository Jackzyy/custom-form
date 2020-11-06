<template>
  <!-- layout components -->
  <DynamicLink
    v-if="options.children"
    :data="options"
    :type="options.type"
    :key="options.id"
  >
    <PreNested
      v-for="item in options.children"
      :key="item.id"
      :options="item"
    />
  </DynamicLink>
  <!-- business components -->
  <el-form-item v-else :key="options.id" :label="options.name">
    <DynamicLink :data="options" :type="options.type" :key="options.id" />
  </el-form-item>
</template>

<script>
import DynamicLink from '@/components/DynamicLink'
export default {
  name: 'PreNested',
  components: {
    DynamicLink
  },

  props: {
    options: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
