<template>
  <div class="widget-border">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.widget-border {
  padding: 0 20px;
  border: 2px solid #000;
}
</style>
