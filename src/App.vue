<template>
  <div class="layout">
    <div class="header">
      <div class="logo">
        Vue-Router-Quick-Entry
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="tab1" title="首页" href="#/home"/>
          <mu-tab value="tab2" title="移动示例" href="#/mobile"/>
        </mu-tabs>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <mu-list @change="handleListChange" :value="activeList">
          <mu-list-item title="DEMO项目准备" value="list1" to="/prepare">
            <mu-icon slot="left" value="inbox" />
          </mu-list-item>
          <mu-list-item title="Vue-router简单介绍" value="list2" to="/introduce">
            <mu-icon slot="left" value="inbox"/>
          </mu-list-item>
          <mu-list-item title="Vue-router开发实践" toggleNested value="practice" to="/practice">
            <mu-icon slot="left" value="inbox"/>
            <mu-list-item slot="nested" title="Vue-router常用配置" value="list5" to="/practice/basic">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="模块加载按需加载" value="list6" to="/practice/need">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="Vue-router全局属性" to="/practice/attribute" value="attribute">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="Vue-router全局守卫" to="/practice/global" value="global">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="Vue-router组件守卫" to="/practice/component" value="component">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="Vue-router跳转方式" to="/practice/jump" value="jump">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="Vue-router参数传递" to="/practice/parameter" value="parameter">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="content-right">
        <div class="breadcrumb">
          <mu-breadcrumb>
            <template v-for="(item, index) in $router.paths">
              <mu-breadcrumb-item v-if="index === ($router.paths.length-1)">{{ item.name }}</mu-breadcrumb-item>
              <mu-breadcrumb-item v-else :href="'#' + item.path">{{ item.name }}</mu-breadcrumb-item>
            </template>
          </mu-breadcrumb>
        </div>
        <div class="body">
          <transition>
            <!-- keep-alive 可以缓存，提高性能，与路由中的设置对应 -->
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
          </transition>
          <transition>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </transition>
        </div>
      </div>
    </div>
    <div class="footer">
      Vue-Router-Quick-Entry ©2017 Created by LiuYuFeng
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeTab: 'tab1',
        activeList: 'list1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      handleListChange (val) {
        this.activeList = val
      }
    }
  }
</script>
<style lang="scss" scoped>
  .layout{
    background-color: rgb(236, 236, 236);
    .header{
      background-color: #7e57c2;
      .logo{
        font-size: 24px;
        color: white;
        display: inline-block;
        padding: 10px 20px;
      }
      .nav{
        display: inline-block;
        width: calc(100% - 800px);
        margin: 0 auto;
        .tab{
          margin: 0 auto;
          width: 400px;
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
    .content{
      overflow: hidden;
      .content-left{
        width: 23%;
        float: left;
        background-color: white;
        margin-bottom: -4000px;
        padding-bottom: 4000px;
      }
      .content-right{
        width: 77%;
        display: inline-block;
        float: right;
        padding: 10px 20px 0 20px;
        background-color: rgba(0, 0, 0, 0);
        .breadcrumb{
          margin: 10px 0;
        }
        .body{
          background-color: white;
          border-radius: 5px;
          min-height: 500px;
          float: left;
          width: 100%;
        }
      }
    }
    .footer{
      padding: 20px 0;
      text-align: center;
    }
  }
</style>
