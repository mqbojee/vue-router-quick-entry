<template>
  <div class="prepare">
    <p>	安装Git环境；</p>
    <p>	安装Node.js；</p>
    <p>	安装vue-cli；</p>
    <p>	创建DEMO项目：</p>
    <p>1)	vue init webpack vue-router-quick-entry</p>
    <p>2)	初始化项目时，需选择使用vue-router</p>
    <p>3)	cd vue-router-quick-entry</p>
    <p>4)	npm install</p>
    <p>5)	npm run dev</p>
    <p>	项目使用muse-ui，UI全部加载。具体请参考官方文档。</p>
    <p>文档DEMO源码GitHub地址：https://github.com/xiaoxinfly/vue-router-quick-entry.git</p>
    <p>环境搭建资料参考：https://github.com/xiaoxinfly/vue-study/tree/develop</p>
    <p>muse-ui文档地址：http://www.muse-ui.org/#/install</p>
    <p>muse-ui图标下载：https://github.com/google/material-design-icons/releases</p>
  </div>
</template>

<script>
  export default {
    name: 'prepare'
  }
</script>

<style lang="scss" scoped>
  .prepare{
    width: 100%;
    float: left;
    padding: 0 20px;
  }

</style>
