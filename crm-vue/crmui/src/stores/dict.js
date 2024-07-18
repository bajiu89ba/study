import { defineStore } from 'pinia'

import $axios from '../utils/axios'

import { okmsg, errormsg } from '../utils/message'

export const useDictStore = defineStore('dict', {
  state: () => ({
    modulepath: '/dict',
    cachinglist: [],
    search: '性别',
    dialogFormTitle: '',
    dialogFormVisible: false,
    form: {}
  }),
  getters: {
    getDictTitleByNo: (state) => {
      return (category) => {
        let temp = state.cachinglist.filter(
          (dict) => dict.category === category
        )
        temp = temp.map((dict) => dict.title)
        return temp
      }
    },

    getDictByNo: (state) => {
      return (dictno) => {
        return state.cachinglist.filter((dict) => dict.dictno === dictno)[0]
      }
    },

    dicts: (state) =>
      state.cachinglist.filter(
        (data) => !state.search || data.category == state.search
      ),
    dictCategories4Select: (state) => {
      return (category) => {
        let temp = state.cachinglist.filter((data) => data.category == category)
        temp.sort((a, b) => a.title.localeCompare(b.title))
        return temp
      }
    },
    dictCategories: (state) => {
      let temp = state.cachinglist.filter((data) => data.category == '类别')
      temp = temp.map((data) => data.title)
      temp = Array.from(new Set(temp))
      temp.sort((a, b) => a.localeCompare(b))
      return temp
    }
  },
  actions: {
    async modDict() {
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.put(path, this.form)
      console.log(res)
      if (res.statusCode === 200) {
        let index = -1
        for (index = 0; index < this.cachinglist.length; index++) {
          const d = this.cachinglist[index]
          if (d.dictno === this.form.dictno) {
            break
          }
        }
        this.cachinglist.splice(index, 1, this.form)

        okmsg()
        this.dialogFormVisible = false
      } else {
        errormsg()
      }
    },
    preData4Mod(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogFormVisible = true
      this.dialogFormTitle = `修改 ${this.form.title} 数据项`
    },

    async addDict() {
      const path = this.modulepath + '/add'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        this.form.dictno = res.result
        this.cachinglist.push(this.form)
        okmsg()
        this.dialogFormVisible = false
      } else {
        errormsg()
      }
    },
    /**
     * 向后台提交用户填写的数据
     */
    save() {
      if (!this.form.dictno || this.form.dictno === -1) {
        this.addDict()
      } else {
        this.modDict()
      }
    },
    preData4Add() {
      this.dialogFormVisible = true
      this.dialogFormTitle = '填加新数据项'
      this.form = new Object()
      this.form.dictno = -1
    },

    async loadall() {
      if (this.cachinglist == null || this.cachinglist.length == 0) {
        const path = this.modulepath + '/all'
        const { data: res } = await $axios.get(path)

        if (res.statusCode === 200) {
          this.cachinglist = res.result
        } else {
          errormsg()
        }
      }
    }
  }
})
