<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>发现新关系</span>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <CustomerAutocomplete></CustomerAutocomplete>
            <ProductAutocomplete></ProductAutocomplete>

            <el-button
              :icon="Search"
              type="primary"
              @click="chanceStore.qryList()"
              >查询
            </el-button>
            <el-button
              :icon="Plus"
              type="primary"
              @click="chanceStore.preData4Add()"
              >申报
            </el-button>
          </div>
        </div>
      </template>

      <ChanceTable></ChanceTable>
    </el-card>
    <ChanceFormDrawer></ChanceFormDrawer>
    <PlanFormDialog></PlanFormDialog>
  </div>
</template>

<script setup>
import { Search, Plus } from '@element-plus/icons-vue'
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'

import ProductAutocomplete from '../components/chance/ProductAutocomplete.vue'
import CustomerAutocomplete from '../components/chance/CustomerAutocomplete.vue'
import ChanceFormDrawer from '../components/chance/ChanceFormDrawer.vue'

import { useChanceStore } from '../stores/chance'

import ChanceTable from '../components/chance/ChanceTable.vue'

import PlanFormDialog from '@/components/plan/PlanFormDialog.vue'

const chanceStore = useChanceStore()
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
