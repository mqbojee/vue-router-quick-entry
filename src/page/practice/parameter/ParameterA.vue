<template>
  <div class="parameter-a">
    <mu-sub-header>{{ title }}</mu-sub-header>
    <mu-content-block>
      {{ content }}
    </mu-content-block>
  </div>
</template>

<script>
  export default {
    name: 'parameterA',
    data () {
      return {
        title: '阳光',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，' +
        '它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，' +
        '温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，' +
        '找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。' +
        '我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！'
      }
    },
    beforeRouteUpdate: function (to, from, next) {
      if (this.$route.params.title) {
        this.title = this.$route.params.title
        this.content = this.$route.params.content
      }
      next()
    },
    created: function () {
      if (this.$route.params.title) {
        this.title = this.$route.params.title
        this.content = this.$route.params.content
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parameter-a{
    width: 100%;
    min-height: 200px;
    float: left;
  }
</style>
