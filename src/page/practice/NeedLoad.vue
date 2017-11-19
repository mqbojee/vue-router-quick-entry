<template>
  <div class="need-load">
    <p>当项目单页面较多时，如果按照平常的方式将组件import到src/router/index.js中，webpack打包时生成的js文件就会变得很大，使得性能和体验不是特别好，这个时候我们就需要按需加载，将每个单页面分开打包，以减少打包生成的js文件的体积。
    实现按需加载组件导入方式如下：</p>
    <p>const Home = r => require.ensure([], () => r(require('../page/Home')), 'Home')</p>
    <p>除此之外，目前还有其他按需加载方式，但是笔者掌握不到位，在此就不提及。</p>
    <p>资料参考：</p>
    <p>Vue-router按需加载：<a href="https://www.cnblogs.com/xiaochongchong/p/7772773.html" target="_blank" a>https://www.cnblogs.com/xiaochongchong/p/7772773.html</a></p>


  </div>
</template>

<script>
  export default {
    name: 'needLoad'
  }
</script>

<style lang="scss" scoped>
  .need-load{
    width: 100%;
    float: left;
    padding: 20px 0;
  }

</style>
