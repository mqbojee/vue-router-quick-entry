import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import App from './App'
import router from './router'
import pageName from './config/pageName.json'

Vue.use(MuseUI)

Vue.config.productionTip = false

// vue-router全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫正在检查...')
  // 通过路由全局属性记录是哪个路径
  router.paths = []
  let path = ''
  let paths = to.path.split('/')
  for (let i = 0, l = paths.length; i < l; i++) {
    path = path + paths[i] + '/'
    if (paths[i] !== '') router.paths.push({path: path, name: pageName.hasOwnProperty(paths[i]) ? pageName[paths[i]] : paths[i]})
  }
  next()
})

// vue-router全局后置守卫
router.afterEach((to, from) => {
  console.log('全局后置守卫正在检查...')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
