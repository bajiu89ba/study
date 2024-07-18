<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">CRM系统</el-breadcrumb-item>
    <el-breadcrumb-item
      :key="'crumb' + index"
      v-for="(item, index) in getCrmbreadcrumbByPageName(
        router.currentRoute.value.name
      )"
      >{{ item }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

import { useRouter } from 'vue-router'

// 导入组件
import { useCrmbreadcrumbStore } from '../stores/crmbreadcrumb'

const router = useRouter()

// 实例化对象
const crmbreadcrumbStore = useCrmbreadcrumbStore()
// 解构对象成员
const { getCrmbreadcrumbByPageName } = storeToRefs(crmbreadcrumbStore)
//  如果是部门管理和字典管理，需求打开以下注释
// const props = defineProps({
//   title: {
//     type: String,
//     require: true,
//     default: ''
//   }
// })
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin: 10px;
  font-size: 14px;
  font-weight: 900;
}
</style>
