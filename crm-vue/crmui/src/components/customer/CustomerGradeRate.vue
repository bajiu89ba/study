<template>
  <el-rate
    v-model="form.cgrade"
    :texts="['潜在客户', '目标客户', '客户', '优质客户', '忠实客户']"
    show-text
  />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '../../stores/customer'
const customerStore = useCustomerStore()
const { form } = storeToRefs(customerStore)
</script>
