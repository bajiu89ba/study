<template>
  <CrmBreadcrumb title="dict"></CrmBreadcrumb>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>字典数据管理</span>
        <el-button type="primary" @click="btnAdd" :icon="Plus"
          >添加数据项</el-button
        >
      </div>
    </template>
    <!-- table，展示数据 -->
    <DictList></DictList>
    <!-- Dialog 编辑 -->
    <DictFormDialog></DictFormDialog>
  </el-card>
</template>

<script setup>
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'
import DictList from '../components/dict/DictList.vue'

import { useDictStore } from '../stores/dict'

import DictFormDialog from '../components/dict/DictFormDialog.vue'

import { Delete, Edit, Search, Share, Plus } from '@element-plus/icons-vue'

const dictStore = useDictStore()

const btnAdd = () => {
  dictStore.preData4Add()
}
</script>
<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #409eff;
  padding: 6px;
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
