// ---------------------存放公共方法--------------------
import {
  mapGetters,
  mapActions
} from 'vuex'
import {
  wxCreateSelectorQuery
} from '@/wx/index'
export default {
  install: function (Vue, params) {
    params = params || {}
    Vue.mixin({
      computed: {
        // 全局调用vuex公共变量
        ...mapGetters({
          userInfoGetter: 'userInfo'
        })
      },
      // 命名使用大驼峰法
      methods: {
        // 全局调用vuex公共方法
        ...mapActions({
          getUserInfoAction: 'getUserInfo'
        }),

        // 获取元素宽高位置等信息 id如 '#myId'
        GetElement(id) {
          return wxCreateSelectorQuery(id)
        }
      },
    })
  }
}
