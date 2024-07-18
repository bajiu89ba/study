<template>
  <el-table :data="dicts" border style="width: 100%" table-layout="auto">
    <el-table-column prop="dictno" label="字典编号" align="center" />
    <el-table-column prop="title" label="标题" align="center" />
    <el-table-column prop="category" label="类别" align="center" />
    <el-table-column prop="info" label="备注" align="center" />
    <el-table-column align="center">
      <template #header>
        <DictCategorySelect></DictCategorySelect>
      </template>
      <template #default="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)"
          type="primary"
          :icon="Edit"
          >Edit</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue'

import { storeToRefs } from 'pinia'

import { useDictStore } from '../../stores/dict'

import DictCategorySelect from './DictCategorySelect.vue'

const dictStore = useDictStore()

const { dicts } = storeToRefs(dictStore)

dictStore.loadall()

const handleEdit = (index, row) => {
  dictStore.preData4Mod(row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>
