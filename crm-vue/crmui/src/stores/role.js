import { defineStore } from 'pinia'

import $axios from '../utils/axios'

import { okmsg, errormsg } from '../utils/message'

export const useRoleStore = defineStore('role', {
  state: () => ({
    modulepath: '/role',
    cachinglist: [],
    dialogFormTitle: '',
    dialogFormVisible: false,
    form: {},
    index: -1,
    drawerDialogVisible: false,
    drawerDialogTitle: '',
    // 缓存所有的的功能树
    tree: [],
    defaultRoleSys: [],
    cruuentRole: {},
    // 指定角色的系统功能子树
    subtree: []
  }),
  getters: {
    roles: (state) => state.cachinglist,
    sysinfotree: (state) => state.tree,
    role: (state) => state.cruuentRole,
    roleSysInfoTree: (state) =>
      state.subtree.filter((sysinfo) => sysinfo.presysno === 1),

    subRoleSysInfoTree: (state) => {
      return (sysno) =>
        state.subtree.filter((sysinfo) => sysinfo.presysno === sysno)
    },
    /**
     * 根据主键列的值返回对象
     *
     * @param {} state
     * @returns
     */
    getRoleByNo: (state) => {
      return (roleno) => {
        return state.cachinglist.filter((role) => role.roleno === roleno)[0]
      }
    }
  },

  actions: {
    /**
     * 根据角色加载系统功能子树列表
     */
    async loadSysListByRoleno(roleno) {
      const path = this.modulepath + '/rights/' + roleno
      const { data: res } = await $axios.get(path)
      if (res.statusCode === 200) {
        this.subtree = res.result
      } else {
        errormsg()
      }
    },
    async authRole(index, row) {
      this.cruuentRole = row
      this.index = index
      this.drawerDialogVisible = true
      this.drawerDialogTitle = `为  ${row.rname}  角色授权`
      // 执行时机不对
      // const path = this.modulepath + '/sysbyroelno/' + row.roleno
      // const { data: res } = await $axios.get(path)
      // if (res.statusCode === 200) {
      //   this.defaultRoleSys = res.result
      // } else {
      //   errormsg()
      // }
    },
    async commmonModRole() {
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.put(path, this.form)
      if (res.statusCode === 200) {
        this.cachinglist.splice(this.index, 1, this.form)
        this.dialogFormVisible = false
        okmsg()
      }
    },
    editRole(index, role) {
      this.index = index
      this.form = JSON.parse(JSON.stringify(role))
      this.dialogFormVisible = true
      this.dialogFormTitle = '编辑角色'
    },

    /**
     * 新增角色
     */
    async addRole() {
      const path = this.modulepath + '/add'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        this.form.roleno = res.result
        this.cachinglist.push(this.form)
        this.dialogFormVisible = false
        okmsg()
      }
    },

    /**
     * 保存用户的修改数据
     */
    save() {
      if (this.form.roleno === -1) {
        this.addRole()
      } else {
        this.commmonModRole()
      }
    },

    preData4Add() {
      this.dialogFormVisible = true
      this.dialogFormTitle = '添加新角色'
      this.form = new Object()
      this.form.roleno = -1
      this.form.nbl = false
    },

    async modRole(row) {
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.put(path, row)
      if (res.statusCode == 200) {
        okmsg()
      } else {
        errormsg()
      }
    },

    /**
     * 加载缓存数据
     */
    async loadall() {
      // 加载所有的角色信息
      if (this.cachinglist == null || this.cachinglist.length == 0) {
        const path = this.modulepath + '/all'
        const { data: res } = await $axios.get(path)
        console.log(res)
        if (res.statusCode === 200) {
          this.cachinglist = res.result
          okmsg()
        } else {
          errormsg()
        }
      }
     
    }
  }
})
