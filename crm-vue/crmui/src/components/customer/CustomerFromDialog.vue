<template>
  <el-dialog v-model="dialogFormVisible" title="指派销售经理" width="40%">
    <el-form :model="form">
      <el-form-item label="客户编号" :label-width="formLabelWidth">
        <el-input v-model="form.cid" autocomplete="off" readonly />
      </el-form-item>
      <el-form-item label="客户名称" :label-width="formLabelWidth">
        <el-input v-model="form.cname" autocomplete="off" readonly />
      </el-form-item>
      <el-form-item label="候选经理" :label-width="formLabelWidth">
        <el-select v-model="form.servicer" placeholder="请选择经理">
          <el-option
            :label="emp.ename"
            :value="emp.empno"
            :key="index"
            v-for="(emp, index) in areaResponsible"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button
          :icon="Promotion"
          type="primary"
          @click="customerStore.assignResponsible()"
        >
          保存修改
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { useCustomerStore } from '../../stores/customer'

import { useEmpStore } from '../../stores/emp'

import { storeToRefs } from 'pinia'

import { Promotion } from '@element-plus/icons-vue'

const customerStore = useCustomerStore()

const { dialogFormVisible, form } = storeToRefs(customerStore)

const empStore = useEmpStore()

const { areaResponsible } = storeToRefs(empStore)

const formLabelWidth = '140px'
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
