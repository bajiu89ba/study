<template>
  <el-dialog v-model="dialogFormVisible" :title="dialogFormTitle">
    <el-form :model="form">
      <el-form-item label="角色编号" :label-width="formLabelWidth">
        <el-input v-model="form.roleno" readonly autocomplete="off" />
      </el-form-item>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.rname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="form.info" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-switch
          v-model="form.nbl"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          :disabled="form.roleno === -1"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="roleStore.save()">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useRoleStore } from '../../stores/role.js'

const roleStore = useRoleStore()

const { dialogFormVisible, dialogFormTitle, form } = storeToRefs(roleStore)

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
