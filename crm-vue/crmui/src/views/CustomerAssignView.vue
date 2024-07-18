<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>客户指派</span>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <el-input
              v-model="qryvalue"
              placeholder="Please input"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="Select"
                  style="width: 115px"
                >
                  <el-option label="按名称" value="cname" />
                  <el-option label="按编号" value="cid" />
                </el-select>
              </template>
              <template #append>
                <el-button
                  :icon="Search"
                  @click="customerStore.qryCustomer4Assign"
                />
              </template>
            </el-input>
          </div>
        </div>
      </template>

      <Customer4AssignTable></Customer4AssignTable>
      <CustomerFromDialog></CustomerFromDialog>
    </el-card>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'

import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'

import CustomerFromDialog from '../components/customer/CustomerFromDialog.vue'

import { useCustomerStore } from '../stores/customer'
import { storeToRefs } from 'pinia'

import Customer4AssignTable from '../components/customer/Customer4AssignTable.vue'

const customerStore = useCustomerStore()

const { select, qryvalue } = storeToRefs(customerStore)
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
