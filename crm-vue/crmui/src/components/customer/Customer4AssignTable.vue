<template>
  <el-table :data="currentList" border style="width: 100%">
    <el-table-column prop="cid" label="客户编号" />
    <el-table-column prop="cname" label="名称" />
    <el-table-column prop="cgrade" label="客户级别" />
    <el-table-column prop="satisfaction" label="满意度" />
    <el-table-column prop="service.ename" label="客户经理">
      <template #default="scope">
        {{
          !scope.row.service || !scope.row.service.ename
            ? ''
            : scope.row.service.ename
        }}
      </template>
    </el-table-column>

    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="customerStore.preData4Assign(scope.row)"
          >指派客户经理</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '../../stores/customer'
const customerStore = useCustomerStore()
const { currentList } = storeToRefs(customerStore)
</script>
