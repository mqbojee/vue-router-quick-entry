<template>
  <div class="global-guard">
    <p>Vue-router全局守卫分为两种，一种是beforeEach，即全局前置守卫，在路由跳转前触发；一种是afterEach，即全局前置守卫，在路由跳转结束后触发。
    每个守卫都有三个参数：</p>
    <p><strong>to：</strong>Route。即将要进入的目标路由对象；</p>
    <p><strong>from：</strong>Route。当前要离开的路由对象；</p>
    <p><strong>next：</strong>Function。可传入不同的参数，实现不同的效果。
    	不传参时，即next()，进入to的路由对象；
    	传入false时，即next(false)，会停留在from的路由对象；
    	传入其他路由时，如：next(‘/’)，改变即将进入的目标路由对象为传入的值，即进入路径为“/“的路由对象。</p>
    <p>在本文档DEMO中，全局守卫与全局属性结合使用，以达到解析路由地址，并展示在App.vue中。具体配置在main.js中：</p>
    …<br/>
    import pageName from './config/pageName.json'<br/>
    …<br/>
    // vue-router全局前置守卫<br/>
    router.beforeEach((to, from, next) => {<br/>
    // 通过路由全局属性记录是哪个路径<br/>
    router.paths = []<br/>
    let path = ''<br/>
    let paths = to.path.split('/')<br/>
    for (let i = 0, l = paths.length; i < l; i++) {<br/>
    path = path + paths[i] + '/'<br/>
    if (paths[i] !== '') router.paths.push({path: path, name: pageName.hasOwnProperty(paths[i]) ? pageName[paths[i]] : paths[i]})
    }<br/>
    next()<br/>
    })<br/>
    // vue-router全局后置钩子<br/>
    router.afterEach((to, from) => {<br/>
    console.log('已经跳转结束')<br/>
    })

  </div>
</template>

<script>
  export default {
    name: 'globalGuard'
  }
</script>

<style lang="scss" scoped>
  .global-guard{
    width: 100%;
    float: left;
  }
</style>
