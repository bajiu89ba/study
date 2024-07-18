<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>产品信息列表</span>
          <el-button type="primary "></el-button>
        </div>
      </template>
      <!-- 展示数据的table -->
      <ProductTable />
      <!-- ProductPagination -->
      <ProductPagination></ProductPagination>
    </el-card>
  </div>
</template>

<script setup>
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'
import ProductPagination from '../components/product/ProductPagination.vue'
import ProductTable from '../components/product/ProductTable.vue'
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
</style>
