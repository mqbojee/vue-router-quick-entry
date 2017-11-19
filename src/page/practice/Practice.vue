<template>
  <div class="practice">
    <ol class="practice-ol">
      <li class="practice-li">
        <router-link :to="{path: '/practice/basic'}">vue-router常用配置</router-link>
      </li>
      <li class="practice-li">
        <router-link :to="{path: '/practice/global'}">Vue-router全局属性</router-link>
      </li>
    </ol>
    <div class="practice-content">
      <div class="practice-content-container">
        <router-view class="practice-body"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'practice'
  }
</script>

<style lang="scss" scoped>
  .practice{
    width: 100%;
    float: left;
    .practice-ol{
      width: 35%;
      float: left;
      .practice-li{
        width: 100%;
        height: 50px;
        font-size: 20px;
      }
    }
    .practice-content{
      width: 65%;
      float: left;
      padding: 20px;
      .practice-content-container{
        width: 100%;
        float: left;
        min-height: 400px;
        border: 1px solid #ff4081;
        border-radius: 8px;
        box-sizing: border-box;
        .practice-body{
          padding: 0 16px 16px;
        }
      }
    }
  }

</style>
