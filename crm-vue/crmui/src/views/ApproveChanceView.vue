<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>审批关系</span>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
            "
          >
            <date-range-picker></date-range-picker>
            <CustomerAutocomplete></CustomerAutocomplete>
            <ProductAutocomplete></ProductAutocomplete>

            <el-button
              :icon="Search"
              type="primary"
              @click="chanceStore.qryList4Approve()"
              >查询
            </el-button>
          </div>
        </div>
      </template>
      <approve-chance-table></approve-chance-table>
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

import PlanFormDialog from '@/components/plan/PlanFormDialog.vue'
import DateRangePicker from '@/components/chance/DateRangePicker.vue'
import ApproveChanceTable from '@/components/chance/ApproveChanceTable.vue'

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
