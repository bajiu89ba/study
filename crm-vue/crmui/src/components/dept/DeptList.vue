<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>部门信息管理列表</span>
        <el-button
          class="button"
          @click="preData4Add"
          type="primary"
          :icon="Plus"
          >新建部门</el-button
        >
      </div>
    </template>
    <!-- 部门数据展示表格 -->
    <el-table :data="depts" style="width: 100%" stripe border>
      <el-table-column prop="deptno" label="部门编号" width="180" />
      <el-table-column prop="dname" label="部门名称" width="250" />
      <el-table-column prop="loc" label="部门地址" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click.prevent="editRow(scope.$index, scope.row)"
            :icon="Edit"
            circle
          >
          </el-button>
          <el-button
            type="danger"
            size="small"
            :icon="Delete"
            circle
            @click="deleteRow(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useDeptStore } from '../../stores/dept'

import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const deleteRow = (index, row) => {
  ElMessageBox.confirm(`部门  ${row.dname}  将被删除.确定吗?`, '删除确认', {
    confirmButtonText: '继续删除',
    cancelButtonText: '取消',
    type: 'error'
  })
    .then(() => {
      deptStore.deleteRow(index, row)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}

const deptStore = useDeptStore()

const editRow = (index, row) => {
  deptStore.preData4mod(index, row)
}

const { depts } = storeToRefs(deptStore)

const preData4Add = () => {
  deptStore.preData4Add()
}

deptStore.loadall()
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #409eff;
  padding: 8px;
  border-radius: 4px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
</style>
