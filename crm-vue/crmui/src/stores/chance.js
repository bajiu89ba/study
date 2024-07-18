import { defineStore } from 'pinia'
import $axios from '../utils/axios'

import { errormsg, errorYourMsg, okmsg } from '../utils/message'
import { useEmpStore } from './emp'

import { usePlanStore } from '@/stores/plan'

const planStore = usePlanStore()

const empStore = useEmpStore()

export const useChanceStore = defineStore('chance', {
  state: () => ({
    modulepath: '/chance',
    productname: '',
    customername: '',
    currentProduct: {},
    currentCustomer: {},
    /**
     * 正在被操作的表单数据
     */
    form: {
      customer: {
        cname: ''
      },
      product: {
        pname: ''
      }
    },
    currentList: [],

    drawerFormVisible: false,
    drawerFormTitle: '申报新机会',
    /**
     * 展开行数组
     */
    expandedRowKeys: [],
    daterange: {}
  }),
  getters: {},
  actions: {
    async modChance(chance) {
      chance = JSON.parse(JSON.stringify(chance))
      const path = this.modulepath + '/mod/approve'

      const { data: res } = await $axios.post(path, chance)
      if (res.statusCode === 200) {
        okmsg()
      } else {
        errormsg()
      }
    },
    finish(chance) {
      chance.state = '已经结束'
      this.modChance(chance)
    },
    async qryList4FeedBack() {
      const path = this.modulepath + '/qry/list4feedback'
      const data = {
        begin: this.daterange[0],
        end: this.daterange[1],
        customerno: this.currentCustomer.customerno,
        productno: this.currentProduct.productno,
        service: empStore.loginfo.empno
      }
      const { data: res } = await $axios.get(path, { params: data })
      if (res.statusCode === 200) {
        this.currentList = res.result
      } else {
        this.currentList.length = 0
        errormsg()
      }
    },
    async approveChance(chance) {
      this.form = JSON.parse(JSON.stringify(chance))
      this.form.state = '通过审批'
      const path = this.modulepath + '/mod/approve'
      const { data: res } = await $axios.post(path, this.form)
      if (res.statusCode === 200) {
        chance.state = '通过审批'
      } else {
        errormsg()
      }
    },

    async prePlans4Show(chance) {
      this.expandedRowKeys.length = 0
      this.expandedRowKeys.push(chance.chanceno)
      planStore.currentChance = chance
      planStore.qryByChanceno()
    },

    async preData4Mod(chance) {
      this.form = JSON.parse(JSON.stringify(chance))
      const path =
        this.modulepath + '/qry/fullbyno?chanceno=' + this.form.chanceno
      const { data: res } = await $axios.get(path)
      if (res.statusCode === 200) {
        this.form = res.result
        this.customername = this.form.customer.cname
        this.productname = this.form.product.pname
      }
      this.drawerFormTitle = '编辑机会信息'
      this.drawerFormVisible = true
    },

    async addChance() {
      this.form.provider = empStore.loginfo.empno
      this.form.service = this.currentCustomer.servicer
      this.form.controller = this.currentCustomer.controller
      this.form.customerno = this.currentCustomer.customerno
      this.form.productno = this.currentProduct.productno
      const path = this.modulepath + '/add'
      const { data: res } = await $axios.put(path, this.form)
      if (res.statusCode === 200) {
        // this.form.chanceno = res.result
        // this.form.provideremp = empStore.loginfo
        // this.form.customer = this.currentCustomer
        // this.form.product = this.currentProduct
        // this.currentList.push(this.form)
        this.drawerFormVisible = false
        this.qryList()
      } else {
        errormsg()
      }
    },

    save() {
      if (this.form.chanceno == -1) {
        this.addChance()
      } else {
        this.modChance()
      }
    },

    preData4Add() {
      this.form = {}
      this.form.chanceno = -1
      this.form.customerno = this.currentCustomer.customerno
      this.form.productno = this.currentProduct.productno
      this.form.title = ''
      // this.currentCustomer.cname + '-' + this.currentProduct.pname
      this.form.type = ''
      this.form.background = ''
      this.form.purpose = ''
      this.form.probability = 50
      this.form.state = '未审批'
      this.form.info = ''
      this.form.ft = new Date()
      this.form.provider = empStore.loginfo.empno
      this.form.service = this.currentCustomer.servicer
      this.drawerFormVisible = true
      this.drawerFormTitle = '申报新机会'
    },

    async qryList4Approve() {
      const path = this.modulepath + '/qry/list4approve'
      const data = {
        begin: this.daterange[0],
        end: this.daterange[1],
        customerno: this.currentCustomer.customerno,
        productno: this.currentProduct.productno,
        controllerno: empStore.loginfo.empno //
      }
      console.log(data)
      const { data: res } = await $axios.get(path, { params: data })
      if (res.statusCode === 200) {
        this.currentList = res.result
      } else {
        this.currentList.length = 0
        errormsg()
      }
    },
    async qryList() {
      const path = this.modulepath + '/qry/list'
      const data = {
        customerno: this.currentCustomer.customerno,
        productno: this.currentProduct.productno,
        service: empStore.loginfo.empno // 我的机会
      }
      console.log(data)
      const { data: res } = await $axios.get(path, { params: data })
      if (res.statusCode === 200) {
        this.currentList = res.result
      } else {
        this.currentList.length = 0
        errormsg()
      }
    }
  }
})
