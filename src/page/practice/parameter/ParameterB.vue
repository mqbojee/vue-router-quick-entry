<template>
  <div class="parameter-b">
    <mu-sub-header>{{ title }}</mu-sub-header>
    <mu-content-block>
      {{ content }}
    </mu-content-block>
  </div>
</template>

<script>
  export default {
    name: 'parameterB',
    data () {
      return {
        info: [
          {
            title: '唯美短句——时间',
            content: '时间，让深的东西越来越深，让浅的东西越来越浅。' +
            '看的淡一点，伤的就会少一点，时间过了，爱情淡了，也就散了。' +
            '人生中哪能事事如愿，我们需要的不是表面的应付和虚伪的承诺，关键在于正直善良。' +
            '用平静的心态面对过程，转变别人的认识，最终得到理解和信任。'
          },
          {
            title: '唯美短句——爱情',
            content: '没有结果的感情，总要消逝；无法拥有的人，总会遗忘。' +
            '人生没有永远的痛，没有过不去的坎，没有忘不掉的情殇。' +
            '不要急，不要哭，不要怕，相信时间，相信你自己，相信上天会善待每一段生命。' +
            '你一定要等，总有一天，会有一双手温柔地牵着你，带你走出回忆。'
          },
          {
            title: '人生',
            content: '人生有四苦：一是看不透。看不透人际中的纠结、争斗后的隐伤，' +
            '看不透喧嚣中的平淡、繁华后的宁静。二是舍不得。舍不得曾经的精彩、不逮的岁月，' +
            '舍不得居高时的虚荣、得意处的掌声。三是输不起。输不起一段情感之失，' +
            '一截人生之败。四是放不下。放不下已经走远的人与事，放不下早已尘封的是与非。'
          }
        ],
        title: '',
        content: ''
      }
    },
    beforeRouteUpdate: function (to, from, next) {
      if (this.$route.query.id || this.$route.query.id === 0) {
        let id = Number(this.$route.query.id)
        this.title = this.info[id].title
        this.content = this.info[id].content
      } else {
        this.title = this.info[0].title
        this.content = this.info[0].content
      }
      next()
    },
    created: function () {
      if (this.$route.query.id || this.$route.query.id === 0) {
        let id = Number(this.$route.query.id)
        this.title = this.info[id].title
        this.content = this.info[id].content
      } else {
        this.title = this.info[0].title
        this.content = this.info[0].content
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parameter-b{
    width: 100%;
    min-height: 200px;
    float: left;
  }
</style>
