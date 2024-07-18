import { defineStore } from 'pinia'
import $axios from '../utils/axios'

import { okmsg, errormsg } from '../utils/message'

export const useAddiStore = defineStore('addi', {
  state: () => ({
    modulepath: '/addi',
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    cachingmap: {},
    cachingList: {},
    /**
     * 缓存所有的省市，区县
     */
    tree: {}
  }),
  getters: {
    getTree: (state) => state.tree,

    // doubleCount: (state) => state.counter * 2,
    getAddiByno: (state) => {
      return (addrno) => {
        let temp = state.cachingmap[addrno]
        if (!temp || temp == null || temp == undefined) {
          return {
            addrno: '00',
            anmae: '全国',
            preaddrno: '-1'
          }
        } else {
          return temp
        }
      }
    }
  },
  actions: {
    async qryList() {
      const path = this.modulepath + '/list'
      const { data: res } = await $axios.get(path)
      if (res.statusCode == 200) {
        this.cachingList = res.result
      }
    },

    async qryTree() {
      const path = this.modulepath + '/tree'
      const { data: res } = await $axios.get(path)
      if (res.statusCode == 200) {
        this.tree = res.result
      }
    },

    async qryAddiByno(addrno) {
      if (!this.cachingmap[addrno]) {
        const path = this.modulepath + '/qryAddiByno/' + addrno
        const { data: res } = await $axios.get(path)
        if (res.statusCode === 200) {
          this.cachingmap[addrno] = res.result
        } else {
          errormsg()
        }
      }
    }
  }
})
