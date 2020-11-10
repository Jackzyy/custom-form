<template>
  <el-card :shadow="areaAttributes.shadow" :style="areaAttributes.styles">
    <slot />
  </el-card>
</template>

<script>
import formOptions from '@/mixins/formOptions'
export default {
  mixins: [formOptions],

  methods: {
    parseJson(val) {
      return val === '' ? {} : JSON.parse({ val })
    }
  }
}
</script>

<style lang="scss" scoped></style>
