import { defineStore } from 'pinia'

import $axios from '../utils/axios'

/**
 * 缓存所有的角色信息
 */
import { useRoleStore } from './role'

import { useDictStore } from './dict'

import { useDeptStore } from './dept'

import { useAddiStore } from './addi'

/**
 * 导入系统定义的路由组件
 */
import router from '../router'

import { errorYourMsg, errormsg } from '../utils/message'

export const useEmpStore = defineStore('emp', {
  state: () => ({
    modulepath: '/emp',
    // 缓存当前用户的信息
    loginfo: {},
    select: 'ename',
    inputvalue: '管',
    currentemps: [],
    /**
     * 用于保存正在被编辑的emp数据
     */
    form: {},
    logform: {
      logid: 'xszg',
      logpwd: '123456'
    },
    /**
     * 控制编辑窗口的显示与隐藏
     */
    formDrawerVisible: false,
    areaResponsible: [],
    empInfo: {}
  }),
  getters: {
    empLoginfo: (state) => JSON.parse(sessionStorage.getItem('empInfo'))
  },
  actions: {
    async login() {
      const path = this.modulepath + '/login'
      const { data: res } = await $axios.post(path, this.logform)
      if (res.statusCode === 200) {
        this.empInfo = res.result
        this.loginfo = res.result
        sessionStorage.setItem('empInfo', JSON.stringify(res.result))
        sessionStorage.setItem('Token', '11111')
        const deptStore = useDeptStore()
        const dictStore = useDictStore()
        const roleStore = useRoleStore()
        const addiStore = useAddiStore()
        await dictStore.loadall()
        await deptStore.loadall()
        await roleStore.loadall()
        setTimeout(() => {
          addiStore.qryTree()
        }, 2000)

        await router.push('/')
      } else {
        errorYourMsg('登录名或者密码错误，请重试！')
      }
    },
    async qryResponsible(areano) {
      const path = this.modulepath + '/qry/responsible?areano=' + areano
      const { data: res } = await $axios.get(path)
      if (res.statusCode === 200) {
        this.areaResponsible = res.result
      }
    },

    preData4Mod(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.formDrawerVisible = true
    },

    async qryemps() {
      const path = this.modulepath + '/qryemps'
      const { data: res } = await $axios.get(path, {
        params: {
          select: this.select,
          inputvalue: this.inputvalue
        }
      })
      if (res.statusCode === 200) {
        this.currentemps = res.result
      } else {
        errormsg()
      }
    }
  }
})
