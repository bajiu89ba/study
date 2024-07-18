<template>
  <el-rate
    v-model="form.satisfaction"
    :texts="['投诉', '不满意', '一般', '比较满意', '非常满意']"
    show-text
  />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '../../stores/customer'
const customerStore = useCustomerStore()
const { form } = storeToRefs(customerStore)
</script>
