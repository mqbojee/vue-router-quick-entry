import Vue from 'vue' // 导入 vue
import Router from 'vue-router' // 导入 vue-router
import HelloWorld from '@/components/HelloWorld' // 导入 HelloWorld 组件

const Home = r => require.ensure([], () => r(require('../page/Home')), 'Home')
const Introduce = r => require.ensure([], () => r(require('../page/Introduce')), 'Introduce')
const Prepare = r => require.ensure([], () => r(require('../page/Prepare')), 'Prepare')

/** 移动端示例 START */
const Mobile = r => require.ensure([], () => r(require('../page/mobile/Mobile')), 'Mobile')
/** 移动端示例 END */

/** vue-router开发实践 */
const Practice = r => require.ensure([], () => r(require('../page/practice/Practice')), 'Practice')
const GlobalAttribute = r => require.ensure([], () => r(require('../page/practice/GlobalAttribute')), 'GlobalAttribute')
const BasicConfig = r => require.ensure([], () => r(require('../page/practice/BasicConfig')), 'BasicConfig')
const ComponentGuard = r => require.ensure([], () => r(require('../page/practice/ComponentGuard')), 'ComponentGuard')
const GlobalGuard = r => require.ensure([], () => r(require('../page/practice/GlobalGuard')), 'GlobalGuard')
const JumpWay = r => require.ensure([], () => r(require('../page/practice/JumpWay')), 'JumpWay')
const JumpA = r => require.ensure([], () => r(require('../page/practice/jump/JumpA')), 'JumpA')
const JumpB = r => require.ensure([], () => r(require('../page/practice/jump/JumpB')), 'JumpB')
const ParameterPass = r => require.ensure([], () => r(require('../page/practice/ParameterPass')), 'ParameterPass')
const ParameterA = r => require.ensure([], () => r(require('../page/practice/parameter/ParameterA')), 'ParameterA')
const ParameterB = r => require.ensure([], () => r(require('../page/practice/parameter/ParameterB')), 'ParameterB')
const NeedLoad = r => require.ensure([], () => r(require('../page/practice/NeedLoad')), 'ParameterB')

// vue-router全局属性定义 用于路径
Router.prototype.paths = []
// vue-router全局方法定义
Router.prototype.getPathJSON = (paths) => {
  return JSON.stringify(paths)
}

Vue.use(Router) // vue 使用路由

// 导出路由对象
export default new Router({
  // mode: 'history', // 使用H5的History模式，去掉#号
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/prepare',
      name: 'Prepare',
      component: Prepare
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice,
      children: [
        {
          path: 'attribute',
          name: 'GlobalAttribute',
          component: GlobalAttribute
        },
        {
          path: 'basic',
          name: 'BasicConfig',
          component: BasicConfig
        },
        {
          path: 'component',
          name: 'ComponentGuard',
          component: ComponentGuard
        },
        {
          path: 'global',
          name: 'GlobalGuard',
          component: GlobalGuard
        },
        {
          path: 'need',
          name: 'NeedLoad',
          component: NeedLoad
        },
        {
          path: 'jump',
          name: 'JumpWay',
          component: JumpWay,
          children: [
            {
              path: 'a',
              name: 'JumpA',
              component: JumpA
            },
            {
              path: 'b',
              name: 'JumpB',
              component: JumpB
            }
          ]
        },
        {
          path: 'parameter',
          name: 'ParameterPass',
          component: ParameterPass,
          children: [
            {
              path: 'a',
              name: 'ParameterA',
              component: ParameterA
            },
            {
              path: 'b',
              name: 'ParameterB',
              component: ParameterB
            }
          ]
        }
      ]
    }
  ]
})
