<template>
  <el-menu
    active-text-color="#4093ff"
    background-color="#333744"
    class="el-menu-vertical-demo"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-sub-menu
      :index="index"
      :key="'submen' + index"
      v-for="(sysinfo, index) in roleSysInfoTree"
    >
      <template #title>
        <el-icon>
          <component :is="MenuIcons(sysinfo.title)" />
        </el-icon>
        <span>{{ sysinfo.title }}</span>
      </template>
      <el-menu-item
        :index="si.path"
        v-for="(si, index) in subRoleSysInfoTree(sysinfo.sysno)"
        :key="'sbitem' + index"
      >
        <el-icon><Menu /></el-icon>
        <template #title>{{ si.title }}</template>
      </el-menu-item>

      <!-- <el-menu-item index="dict">字典管理</el-menu-item>
      <el-menu-item index="role">角色管理</el-menu-item> -->
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {
  Location,
  Setting,
  UserFilled,
  GoodsFilled,
  Shop,
  Histogram,
  Menu
} from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import { useEmpStore } from '../../stores/emp'

import { useRoleStore } from '../../stores/role'

// 定义带有输入参数的计算属性，用于计算菜单的ICON

const MenuIcons = computed(() => (title) => {
  switch (title) {
    case '系统管理':
      return Setting
    case '产品管理':
      return GoodsFilled
    case '客户管理':
      return UserFilled
    case '关系管理':
      return Shop
    case '统计分析':
      return Histogram
  }
})

const empStore = useEmpStore()
const roleStore = useRoleStore()

const { roleSysInfoTree, subRoleSysInfoTree } = storeToRefs(roleStore)

const { empLoginfo } = storeToRefs(empStore)
console.log(empLoginfo.value)
// 根据登录信息查询后台，获得角色的系统功能子树
roleStore.loadSysListByRoleno(empLoginfo.value.roleid)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.el-menu {
  border: 0;
}
</style>
