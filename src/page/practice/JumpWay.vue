<template>
  <div class="jump-way">
    <ul class="jump-way-ul">
      <li>
        <router-link to="/practice/jump/a">router-link跳转写法1</router-link>
      </li>
      <li>
        <router-link :to="{path: '/practice/jump/b'}">router-link跳转写法2</router-link>
      </li>
      <li>
        <router-link :to="{path: '/practice/jump/a'}" replace>router-link replace跳转</router-link>
      </li>
      <li>
        <router-link :to="{path: '/practice/jump/b'}" tag="button">router-link tag转换</router-link>
      </li>
      <li @click="toAPage" class="jump-way-li">
        push方法跳转
      </li>
      <li @click="toBPage" class="jump-way-li">
        replace方法跳转
      </li>
      <li @click="goToPage" class="jump-way-li">
        go方法跳转
      </li>
      <li @click="goBack" class="jump-way-li">
        back方法跳转
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'jumpWay',
    methods: {
      toAPage: function () {
        this.$router.replace({path: '/practice/jump/a'})
      },
      toBPage: function () {
        this.$router.replace({path: '/practice/jump/b'})
      },
      goToPage: function () {
        this.$router.go(1)
      },
      goBack: function () {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jump-way{
    width: 100%;
    float: left;
    .jump-way-ul{
      width: 100%;
      float: left;
      .jump-way-li{
        width: 100%;
        float: left;
        cursor: pointer;
        margin-top: 5px;
      }
      .jump-way-li:hover{
        color: #ff4081;
      }
    }
  }
</style>
