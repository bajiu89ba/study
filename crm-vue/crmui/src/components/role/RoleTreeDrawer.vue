<template>
  <el-drawer
    v-model="drawerDialogVisible"
    :show-close="false"
    @close="drawerClose"
    @opened="drawerOpened"
  >
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">{{ drawerDialogTitle }}</h4>

      <el-button type="primary" @click="btnLoadRoleSys">
        加载角色功能树信息<el-icon class="el-icon--right"><Download /></el-icon>
      </el-button>

      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    <div class="demo-drawer__content">
      <!-- 系统功能树 -->
      <el-tree
        ref="treeRef"
        default-expand-all
        :props="props"
        :data="sysinfotree"
        show-checkbox
        @check-change="handleCheckChange"
        node-key="sysno"
      />
      <hr />
      <!-- 操作按钮组 -->
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" @click="btnSave">
          保存数据<el-icon class="el-icon--right"><Promotion /></el-icon>
        </el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { useRoleStore } from '../../stores/role.js'

import $axios from '../../utils/axios'

import { storeToRefs } from 'pinia'

import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled, Download, Promotion } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { errormsg, okmsg } from '../../utils/message.js'

const btnSave = async () => {
  let set1 = treeRef.value.getCheckedKeys()
  let set2 = treeRef.value.getHalfCheckedKeys()
  const set3 = [...set1, ...set2]
  const roleno = role.value.roleno

  let data = new FormData()
  data.append('roleno', roleno)
  data.append('sysnos', set3)

  const { data: res } = await $axios.post('/role/modsys', data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })

  if (res.statusCode == 200) {
    okmsg()
  } else {
    errormsg()
  }
}

const roleStore = useRoleStore()

const { drawerDialogVisible, drawerDialogTitle, sysinfotree, role } =
  storeToRefs(roleStore)

const treeRef = ref()

const drawerOpened = () => {
  btnLoadRoleSys()
}

const btnLoadRoleSys = async () => {
  // 1、加载角色功能子树
  const path = '/role/sysbyrolno/' + role.value.roleno

  const { data: res } = await $axios.get(path)

  // 2、寻找功能子树的叶子节点

  if (res.statusCode == 200) {
    const rolesys = res.result
    // for (let index = 0; index < rolesys.length; index++) {
    //   const nodekey = rolesys[index]
    //   let node = treeRef.value.getNode(nodekey)
    //   if( node.isLeaf)
    // }

    // treeRef.value.getNode()
    const temp = rolesys.filter(
      (nodekey) => treeRef.value.getNode(nodekey).isLeaf
    ) //  [7, 8]
    // 3、设置树的勾选节点
    treeRef.value.setCheckedKeys(temp)
  }
}

const props = {
  label: 'title',
  children: 'children'
}

const handleCheckChange = (data, checked, indeterminate) => {
  console.log(data, checked, indeterminate)
}
const drawerClose = () => {
  treeRef.value.setCheckedKeys([])
}
</script>
