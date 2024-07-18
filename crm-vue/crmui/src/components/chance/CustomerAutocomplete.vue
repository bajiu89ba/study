<template>
  <el-autocomplete
    v-model="customername"
    :fetch-suggestions="querySearchAsync"
    placeholder="客户名称"
    @select="handleSelect"
    value-key="cname"
  >
    <template #prepend>客户:</template>
    <template #default="{ item }">
      <div class="value">{{ item.cname }}</div>
      <span class="link">
        <el-link type="primary" :href="item.url">{{ item.url }}</el-link></span
      >
    </template>
  </el-autocomplete>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useChanceStore } from '../../stores/chance'
import { useEmpStore } from '../../stores/emp'

import $axios from '../../utils/axios'

const chanceStore = useChanceStore()
const empStore = useEmpStore()

const { currentCustomer, customername } = storeToRefs(chanceStore)

const querySearchAsync = (queryString, cb) => {
  const path =
    '/customer/qry/byname?name=' +
    queryString +
    '&servicer=' +
    empStore.loginfo.empno
  $axios
    .get(path)
    .then((response) => {
      const { data: res } = response
      if (res.statusCode === 200) {
        cb(res.result)
      } else {
        cb([])
      }
    })
    .catch((err) => {
      console.log(err)
      cb([])
    })
}

const handleSelect = (item) => {
  currentCustomer.value = JSON.parse(JSON.stringify(item))
}
</script>
