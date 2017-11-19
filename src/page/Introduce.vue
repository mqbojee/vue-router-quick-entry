<template>
  <div class="introduce">
    <p>在vue项目中，vue-router起到的作用就是点击某个链接或按钮时，页面会指向相应的内容并显示该内容，如：点击home按钮时，页面中会显示home.vue中的内容。vue-router的js配置文件使得其做出正确的反应，DEMO中的配置在src/router/index.js中。关于vue-router详细介绍本文不作阐述，具体可参考以下资料：</p>
    <p>[1]	vue-router官方文档：https://router.vuejs.org/zh-cn/installation.html；</p>
    <p>[2]	vue-router基本使用：https://www.cnblogs.com/SamWeb/p/6610733.html。</p>
  </div>
</template>

<script>
  export default {
    name: 'introduce'
  }
</script>

<style lang="scss" scoped>
  .introduce{
    width: 100%;
    float: left;
    padding: 0 20px;
  }

</style>
