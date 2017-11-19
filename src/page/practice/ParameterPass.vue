<template>
  <div class="parameter-pass">
    <ul class="parameter-pass-ul">
      <li>
        <router-link :to="{path: '/practice/parameter/b', query:{id: 1}}">query方式参数传递</router-link>
      </li>
      <li>
        <router-link :to="{path: '/practice/parameter/a', params:{title: info[0].title, content: info[0].content}}">params方式参数传递</router-link>
      </li>
      <li @click="toBPageByQuery" class="parameter-pass-li">
        push方法query方式参数传递
      </li>
      <li @click="toAPageByParams" class="parameter-pass-li">
        push方法params方式参数传递
      </li>
      <li @click="replaceToPageByQuery" class="parameter-pass-li">
        replace方法query方式参数传递
      </li>
      <li @click="replaceAPageByParams" class="parameter-pass-li">
        replace方法params方式参数传递
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'parameterPass',
    data () {
      return {
        info: [
          {
            title: '爱情',
            content: '以为我需要的爱情，只是一个拥抱；' +
            '以为蒙上了眼睛，就可以看不见这个世界；' +
            '以为捂住了耳朵，就可以听不到所有的烦恼；' +
            '以为脚步停了下来，心就可以不再远行。' +
            '最后我才发现，爱一个人是贪心的，我要的不仅仅是一个拥抱，而是一颗爱我的心。'
          },
          {
            title: '心态',
            content: '青春里，总有些事情要努力去做，人活的就是一种心态。' +
            '一个人的行为，决定一个人的心态。' +
            '一个人的言语举止，决定一个人的修养。' +
            '一个人的素质，决定一个人的品味。' +
            '一个人的行动，决定一个人的未来。'
          },
          {
            title: '生活',
            content: '生活从来都是波澜起伏的，有些东西失去了，就不能再回来；' +
            '有些感情错过了，就无法再遇见。每一个对你好的人，他们本可以不这么做，' +
            '因为没这义务；每一个装在心上的人，不是对谁都如此重视，因为谁都有忙碌。'
          }
        ]
      }
    },
    methods: {
      toAPageByParams: function () {
        this.$router.push({path: '/practice/parameter/a', params: {title: this.info[1].title, content: this.info[1].title}})
      },
      toBPageByQuery: function () {
        this.$router.push({path: '/practice/parameter/b', query: {id: 0}})
      },
      replaceToPageByQuery: function () {
        this.$router.replace({path: '/practice/parameter/b', query: {id: 2}})
      },
      replaceAPageByParams: function () {
        this.$router.replace({path: '/practice/parameter/a', params: {title: this.info[2].title, content: this.info[2].title}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parameter-pass{
    width: 100%;
    float: left;
    .parameter-pass-ul{
      width: 100%;
      float: left;
      .parameter-pass-li{
        width: 100%;
        float: left;
        cursor: pointer;
        margin-top: 5px;
      }
      .parameter-pass-li:hover{
        color: #ff4081;
      }
    }
  }

</style>
