import { defineStore } from 'pinia'

import $axios from '../utils/axios'

import { okmsg, errormsg } from '../utils/message'

export const useDeptStore = defineStore('dept', {
  state: () => ({
    modulepath: '/dept',

    dialogFormTitle: '',
    /**
     * 控制dialogForm的显示与隐藏
     */
    dialogFormVisible: false,

    /** @type {{deptno:number, dname: string, loc: string , nbl: number }[]} */
    cachinglist: [],
    form: { deptno: -1, dname: 'ACCOUNTING', loc: 'NEW YORK', nbl: 1 },
    /**
     * 缓存当被编辑行的索引
     */
    index: -1
  }),
  getters: {
    depts: (state) => state.cachinglist,
    getDeptByno: (state) => {
      return (deptno) => {
        let temp = state.cachinglist.filter((dept) => dept.deptno === deptno)[0]
        return temp
      }
    }
  },
  actions: {
    /**
     * 删除部门
     *
     */
    async deleteRow(index, row) {
      const path = this.modulepath + '/del/' + row.deptno
      const { data: res } = await $axios.delete(path)
      
      if (res.statusCode == 200) {
        okmsg()
        this.cachinglist.splice(index, 1)
      } else {
        errormsg()
      }
    },
    /**
     * 实现修改逻辑
     */
    async modDept() {
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.put(path, this.form)
      if (res.statusCode === 200) {
        okmsg()
        this.dialogFormVisible = false
        this.cachinglist.splice(this.index, 1, this.form)
      } else {
        errormsg()
      }
    },

    /**
     * 为修改准备数据
     * @param {} index
     * @param {*} row
     */
    preData4mod(index, row) {
      this.index = index
      // 实现对象数据的克隆
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogFormTitle = '修改部门'
      this.dialogFormVisible = true
    },

    /**
     * 执行新增部门业务
     */
    async addDept() {
      const path = '/dept/add'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        this.dialogFormVisible = false
        this.form.deptno = res.result
        this.cachinglist.push(this.form)
        okmsg()
      } else {
        errormsg()
      }
    },
    /**
     * 保存用户提交的数据
     */
    save() {
      if (this.form.deptno === -1) {
        this.addDept()
      } else {
        this.modDept()
      }
    },

    preData4Add() {
      this.dialogFormTitle = '新建部门'
      // 新增数据标识
      this.form = new Object()
      this.form.deptno = -1
      this.dialogFormVisible = true
      console.log('preData4Add')
    },
    /**
     * 一次性加载所有的部门信息
     */
    async loadall() {
      if (this.cachinglist == null || this.cachinglist.length == 0) {
        const path = '/dept/all'
        const { data: res } = await $axios.get(path)
        if (res.statusCode == 200) {
          this.cachinglist = res.result
        }
      }
    }
  }
})
