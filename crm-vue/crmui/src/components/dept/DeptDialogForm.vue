<template>
  <!-- Form -->
  <!-- <el-button text @click="dialogFormVisible = true">
    open a Form nested Dialog
  </el-button> -->

  <el-dialog v-model="dialogFormVisible" :title="dialogFormTitle" width="600">
    <el-form :model="form">
      <el-form-item label="部门编号" :label-width="formLabelWidth">
        <el-input readonly v-model="form.deptno" autocomplete="off" />
      </el-form-item>
      <el-form-item label="部门名称" :label-width="formLabelWidth">
        <el-input v-model="form.dname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="部门地址" :label-width="formLabelWidth">
        <el-input v-model="form.loc" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button :icon="Promotion" type="primary" @click="btnSave">
          保存数据
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { storeToRefs } from 'pinia' 

import { useDeptStore } from '../../stores/dept'

import { Promotion } from '@element-plus/icons-vue'

const btnSave = () => {
  deptStore.save()
}

const deptStore = useDeptStore()

const { dialogFormVisible, dialogFormTitle, form } = storeToRefs(deptStore)
 

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
