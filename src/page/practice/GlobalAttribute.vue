<template>
  <div class="global-attribute">
    来自vue-router全局属性paths，通过getPathJSON方法使数组变成JSON串：<br/>
    {{ pathData }}
  </div>
</template>

<script>
  export default {
    name: 'globalAttribute',
    data () {
      return {
        pathData: ''
      }
    },
    created: function () {
      this.pathData = this.$router.getPathJSON(this.$router.paths)
    }
  }
</script>

<style lang="scss" scoped>
  .global-attribute{
    width: 100%;
    float: left;
    padding: 20px 0;
  }

</style>
