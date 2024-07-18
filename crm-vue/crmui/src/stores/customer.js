import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import $axios from '../utils/axios'

import { errormsg, infomsg } from '../utils/message'

import { useEmpStore } from './emp'

const empStore = useEmpStore()
const { loginfo } = storeToRefs(empStore)

export const useCustomerStore = defineStore('customer', () => {
  const select = ref('cname')
  const qryvalue = ref('')
  const currentList = ref([])
  const form = ref({})
  const formDrawerVisible = ref(true)
  const formDrawerTitle = ref('新建客户')
  const modulepath = '/customer'

  const dialogFormVisible = ref(false)

  function qryCustomer4Contact(){
    const data = {
      select: select.value,
      qryvalue: qryvalue.value,
      empno: loginfo.value.empno
    }
    const path = modulepath + '/qry/c4contact'
    // /qry/c4assign
    $axios
      .get(path, { params: data })
      .then((response) => {
        const { data: res } = response
        if (res.statusCode === 200) {
          currentList.value = res.result
          console.log(currentList.value)
        } else {
          errormsg()
        }
      })
      .catch((err) => {
        errormsg()
        console.log(err)
      })
  }

  async function assignResponsible() {
    // 定义 销售主管
    form.value.controller = loginfo.value.empno
    const path = modulepath + '/mod/assignResponsible'
    const { data: res } = await $axios.put(path, form.value)
    if (res.statusCode === 200) {
      dialogFormVisible.value = false
      qryCustomer4Assign()
    } else {
      errormsg()
    }
  }

  function preData4Assign(customer) {
    form.value = JSON.parse(JSON.stringify(customer))
    dialogFormVisible.value = true
    empStore.qryResponsible(customer.areano)
  }

  function qryCustomer4Assign() {
    const data = {
      select: select.value,
      qryvalue: qryvalue.value,
      roleno: loginfo.value.roleno,
      area: loginfo.value.area
    }
    const path = modulepath + '/qry/c4assign'
    // /qry/c4assign
    $axios
      .get(path, { params: data })
      .then((response) => {
        const { data: res } = response
        if (res.statusCode === 200) {
          currentList.value = res.result
          // console.log(currentList.value)
        } else {
          errormsg()
        }
      })
      .catch((err) => {
        errormsg()
        console.log(err)
      })
  }

  function perData4Mod(row) {
    formDrawerVisible.value = true
    formDrawerTitle.value = '编辑客户'
    form.value = JSON.parse(JSON.stringify(row))
  }

  function perData4Add() {
    formDrawerVisible.value = true
    formDrawerTitle.value = '新建客户'
    form.value = new Object()
    form.value.customerno = -1
    form.value.cid = ''
    form.value.cname = ''
    form.value.mincode = ''
    form.value.areano = ''
    form.value.cgrade = 3
    form.value.satisfaction = 3
    form.value.dt = new Date()
    form.value.deposit = ''
    form.value.account = ''
    form.value.zipcode = ''
    form.value.url = ''
    form.value.provider = loginfo.value.empno
    form.value.servicer = ''
    form.value.controller = ''
    form.value.status = '目标客户'
  }

  function qryCustomer() {
    const path = modulepath + '/qyr/customer'
    const data = {
      select: select.value,
      qryvalue: qryvalue.value
    }
    $axios
      .get(path, { params: data })
      .then((response) => {
        const { data: res } = response
        if (res.statusCode === 200) {
          currentList.value = res.result
        }
        else if(res.statusCode === 204){
          infomsg('未查询到数据')
        }
        else {
          errormsg()
        }
      })
      .catch((err) => {
        errormsg()
        console.log(err)
      })
  }

  return {
    formDrawerVisible,
    formDrawerTitle,
    select,
    qryvalue,
    qryCustomer,
    currentList,
    form,
    perData4Add,
    perData4Mod,
    qryCustomer4Assign,
    preData4Assign,
    dialogFormVisible,
    assignResponsible,
    qryCustomer4Contact
  }
})
