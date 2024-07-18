<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[5, 10, 20, 40]"
    :small="small"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script setup>
import { ref } from 'vue'

import { useProductStore } from '../../stores/product'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()

const { currentPage, pageSize, total } = storeToRefs(productStore)

const small = ref(false)
const background = ref(false)

const handleSizeChange = () => {
  productStore.qryPaged()
}
const handleCurrentChange = () => {
  productStore.qryPaged()
}

productStore.qryPaged()
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
