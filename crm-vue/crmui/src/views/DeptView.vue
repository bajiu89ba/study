<template>
  <div id="crmbreadcrumb">
    <!-- 面包屑导航组件 -->
    <CrmBreadcrumb title="dept"></CrmBreadcrumb>
    <!-- 部门管理列表组件 -->
    <DeptList></DeptList>
    <DeptDialogForm></DeptDialogForm>
  </div>
</template>

<script setup>
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'
import DeptList from '../components/dept/DeptList.vue'
import DeptDialogForm from '../components/dept/DeptDialogForm.vue'
</script>
