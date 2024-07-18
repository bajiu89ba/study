<template>
  <el-autocomplete
    v-model="productname"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入产品名称"
    @select="handleSelect"
    value-key="pname"
  >
    <template #prepend>产品:</template>
    <template #default="{ item }">
      <div class="value">{{ item.pname }}</div>
      <span class="link">
        <el-link type="primary" :href="item.url">{{ item.url }}</el-link></span
      >
    </template>
  </el-autocomplete>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useChanceStore } from '../../stores/chance'

import $axios from '../../utils/axios'

const chanceStore = useChanceStore()

const { currentProduct, productname } = storeToRefs(chanceStore)

const querySearchAsync = (queryString, cb) => {
  const path = '/product/qry/byname?name=' + queryString
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
  currentProduct.value = JSON.parse(JSON.stringify(item))
}
</script>
