<template>
  <div id="mainwork">
    <CrmBreadcrumb></CrmBreadcrumb>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>角色信息列表</span>

          <el-button type="primary " @click="btnAdd" :icon="Plus"
            >添加角色</el-button
          >
        </div>
      </template>
      <!-- 展示数据的table -->
      <el-table :data="roles" border style="width: 100%">
        <el-table-column prop="roleno" label="#" width="180" />
        <el-table-column prop="rname" label="角色名称" width="180" />
        <el-table-column prop="info" label="说明" />

        <el-table-column label="状态">
          <template #default="scope">
            <el-switch
              v-model="scope.row.nbl"
              class="ml-2"
              active-text="正常"
              inactive-text="禁用"
              style="
                --el-switch-on-color: #13ce66;
                --el-switch-off-color: #ff4949;
              "
              @change="swChages(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Operations">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="roleStore.editRole(scope.$index, scope.row)"
            >
              Edit
            </el-button>
            <el-button
              type="danger"
              :icon="Key"
              size="large"
              @click.prevent="roleStore.authRole(scope.$index, scope.row)"
              >授权</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 编辑角色窗口 -->
    <RoleDialogForm></RoleDialogForm>

    <RoleTreeDrawer></RoleTreeDrawer>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import CrmBreadcrumb from '../components/CrmBreadcrumb.vue'

import { Key } from '@element-plus/icons-vue'

import { useRoleStore } from '../stores/role'

import { Plus } from '@element-plus/icons-vue'

import RoleDialogForm from '../components/role/RoleDialogForm.vue'

import RoleTreeDrawer from '../components/role/RoleTreeDrawer.vue'

const btnAdd = () => {
  roleStore.preData4Add()
}

const swChages = (row) => {
  roleStore.modRole(row)
}

const roleStore = useRoleStore()

roleStore.loadall()

const { roles } = storeToRefs(roleStore)
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
