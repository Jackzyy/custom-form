<template>
  <div>
    <testA>
      <div :slot="aaa">
        2222
      </div>
    </testA>
  </div>
</template>

<script>
import testA from './testA'
export default {
  components: {
    testA
  },

  data() {
    return {
      aaa: 'aaa'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  height: 100px;
  border: 1px solid #000;
}
.el-col {
  border: 1px solid rgb(233, 9, 9);
}
.aaa {
  display: flexbox;
  height: 10px;
  background-color: #ccc;
  border: 1px solid rgb(10, 233, 121);
}
</style>
