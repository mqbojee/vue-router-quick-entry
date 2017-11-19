<template>
  <div class="component-guard">
    <p>Vue-router组件守卫，目前有三种，分别是beforeRouteEnter、beforeRouteUpdate和beforeRouteLeave，beforeRouteUpdate是2.2新增的，笔者在此不做介绍。</p>
    <p><strong>beforeRouteEnter——全局前置守卫：</strong></p>
    <p>在渲染组件时，组件对应的路由被confirm前调用，这个时候并不能使用组件的实例’this’，因为组件实例还未创建。</p>
    <p><strong>beforeRouteLeave——全局后置守卫：</strong></p>
    <p>在即将离开当前组件对应的路由时调用，此时可以访问实例this。使用场景示例：在表单填写后，未保存或未提交时离开当前组件时，可将方法next传入false阻止其离开，并给予相应的提示。
    笔者对各个钩子进行了打印，其方法执行相应的顺序是：</p>
    <p>beforeEach> beforeRouteEnter>afterEach>beforeCeate>created> beforeRouteLeave> beforeEach > afterEach >beforeDestroy>destroyed</p>

  </div>
</template>

<script>
  export default {
    name: 'componentGuard',
    beforeCreate: function () {
      console.log('我即将创建了！！！')
    },
    created: function () {
      console.log('我创建了！！！')
    },
    beforeDestroy: function () {
      console.log('我即将要销毁了，救，救，救我！！！')
    },
    destroyed: function () {
      console.log('我销毁了！！！')
    },
    beforeRouteEnter: function (to, from, next) {
      console.log('我将要进入了！！！')
      next()
    },
    beforeRouteLeave: function (to, from, next) {
      console.log('我将要离开了！！！')
      next()
    }
  }
</script>

<style lang="scss" scoped>
  .component-guard{
    width: 100%;
    float: left;
  }
</style>
