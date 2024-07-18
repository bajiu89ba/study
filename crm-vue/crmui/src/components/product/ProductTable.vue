<template>
  <el-table
    :data="currentPagedList"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="productno" label="#" align="center" width="100" />
    <el-table-column prop="pno" label="产品编号" align="center" />
    <el-table-column prop="pname" label="名称" align="center">
      <template #default="scope">
        <el-link type="success" :href="scope.row.url">{{
          scope.row.pname
        }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="keyword" label="关键字" align="center">
      <template #default="scope">
        <el-tag
          v-for="(tag, index) in scope.row.keyword.split(',')"
          :key="index"
          >{{ tag }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="onsale" label="在售状态" align="center">
      <template #default="scope">
        <el-switch
          v-model="scope.row.onsale"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { useProductStore } from '../../stores/product'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()

const { currentPagedList } = storeToRefs(productStore)

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.el-tag {
  margin-right: 8px;
}
</style>
