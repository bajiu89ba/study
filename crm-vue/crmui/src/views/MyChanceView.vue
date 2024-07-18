<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>我的关系</span>
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
              @click="chanceStore.qryList4FeedBack()"
              >查询
            </el-button>
          </div>
        </div>
      </template>
      <my-chance-table></my-chance-table>
    </el-card>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'

import ProductAutocomplete from '../components/chance/ProductAutocomplete.vue'
import CustomerAutocomplete from '../components/chance/CustomerAutocomplete.vue'

import { useChanceStore } from '../stores/chance'

import DateRangePicker from '@/components/chance/DateRangePicker.vue'

import MyChanceTable from '@/components/chance/MyChanceTable.vue'

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
