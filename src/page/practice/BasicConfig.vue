<template>
  <div class="basic-config">
    项目中一般只需一个路由js配置文件，其路径为src/router/index.js。此文件需导入vue和vue-router，除此之外就是要进行路由配置的的组件，然后通过ES6语法export default将该文件模块化，以方便main.js配置文件进行导入。
    <strong>src/router/index.js示例如下：</strong><br/>
    import Vue from 'vue' // 导入vue<br/>
    import Router from 'vue-router' // 导入vue-router<br/>
    import HelloWorld from '@/components/HelloWorld' // 导入HelloWorld组件<br/><br/>

    Vue.use(Router) // vue 使用路由 <br/>
    // 导出路由对象<br/>
    export default new Router({<br/>
    &nbsp;&nbsp;routes: [<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path: '/',<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: 'HelloWorld',<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;component: HelloWorld<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
    &nbsp;&nbsp;]<br/>
    })<br/>
    <strong>main.js示例如下：</strong><br/>
    import Vue from 'vue'<br/>
    import App from './App'<br/>
    import router from './router'<br/><br/>

    Vue.config.productionTip = false<br/><br/>

    new Vue({<br/>
    &nbsp;&nbsp;el: '#app',<br/>
    &nbsp;&nbsp;router,<br/>
    &nbsp;&nbsp;template: '< App/>',<br/>
    &nbsp;&nbsp;compontents: { App }<br/>
    })
  </div>
</template>

<script>
  export default {
    name: 'basicConfig'
  }
</script>

<style lang="scss" scoped>
  .basic-config{
    width: 100%;
    float: left;
    padding: 20px 0;
  }

</style>
