import { defineStore } from 'pinia'

import $axios from '../utils/axios'

import { okmsg, errormsg } from '../utils/message'

export const useContactStore = defineStore('contact', {
  state: () => ({
    modulepath: '/contact',
    dialogFormTitle: '',
    dialogFormVisible: false,
    form: {},
    index: -1,
    customerContacts: []
  }),
  getters: {},

  actions: {
    async modContact() {
      const path = this.modulepath + '/mod'
      const { data: res } = await $axios.put(path, this.form)
      if (res.statusCode === 200) {
        // this.form.contactno = res.result
        // this.customerContacts.push(this.form)
        let index = 0
        for (; index < this.customerContacts.length; index++) {
          let c = this.customerContacts[index]
          if (c.contactno === this.form.contactno) break
        }
        this.customerContacts.splice(index, 1, this.form)
        this.dialogFormVisible = false
        okmsg()
      } else {
        errormsg()
      }
    },

    async addContact() {
      const path = this.modulepath + '/add'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        this.form.contactno = res.result
        this.customerContacts.push(this.form)
        this.dialogFormVisible = false
      }
    },
    save() {
      if (this.form.contactno == -1) {
        this.addContact()
      } else {
        this.modContact()
      }
    },
    preDate4mod(contact) {
      this.form = JSON.parse(JSON.stringify(contact))
      this.dialogFormTitle = '编辑联系人信息'
      this.dialogFormVisible = true
    },

    preDate4Add(customerno) {
      this.form = new Object()
      this.form.contactno = -1
      this.form.customerno = customerno
      this.form.cname = ''
      this.form.gender = '男'
      this.form.job = ''
      this.form.phone = ''
      this.form.tel = ''
      this.form.info = ''
      this.dialogFormTitle = '新建联系人'
      this.dialogFormVisible = true
    },
    async loadByCutomerNo(cno) {
      const path = this.modulepath + '/qry/Contact4Customer?cno=' + cno
      const { data: res } = await $axios.get(path)
      console.log(res)
      if (res.statusCode === 200) {
        this.customerContacts = res.result
        okmsg()
      } else {
        errormsg()
      }
    }
  }
})
