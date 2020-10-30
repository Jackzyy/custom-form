<template>
  <div>
    <el-input v-model="options.name"></el-input>
    <div>{{ options }}</div>
  </div>
</template>

<script>
import options from '@/mixins/options'
export default {
  mixins: [options]
}
</script>

<style lang="scss" scoped></style>
