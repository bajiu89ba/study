<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>员工管理</span>
          <div class="card-header-right">
            <el-input
              v-model="inputvalue"
              placeholder="输入部分信息，系统进行模糊查询"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="Select"
                  style="width: 115px"
                >
                  <el-option label="通过姓名" value="ename" />
                  <el-option label="通过编号" value="empno" />
                </el-select>
              </template>
              <template #append>
                <el-button :icon="Search" @click="empStore.qryemps()" />
              </template>
            </el-input>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </div>
      </template>
      <!-- 员工列表 -->
      <EmpList></EmpList>
      <EmpFormDrawer></EmpFormDrawer>
    </el-card>
  </div>
</template>

<script setup>
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'

import { Search } from '@element-plus/icons-vue'

import { useEmpStore } from '../stores/emp'
import { storeToRefs } from 'pinia'

import EmpList from '../components/emp/EmpList.vue'

import EmpFormDrawer from '../components/emp/EmpFormDrawer.vue'

const empStore = useEmpStore()

const { select, inputvalue } = storeToRefs(empStore)
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card-header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
}
</style>
