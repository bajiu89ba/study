<template>
  <el-table
    :data="currentemps"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @expand-change="expandChange"
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-descriptions
          class="margin-top"
          title="员工详细信息"
          :column="1"
          :size="size"
          border
        >
          <template #extra>
            <el-button type="primary" :icon="Edit"  @click="empStore.preData4Mod(props.row)" > 编辑</el-button>
          </template>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <user />
                </el-icon>
                员工姓名
              </div>
            </template>
            {{ props.row.ename }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <iphone />
                </el-icon>
                性别
              </div>
            </template>
            {{ props.row.gender }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <location />
                </el-icon>
                岗位
              </div>
            </template>
            {{ props.row.job }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <tickets />
                </el-icon>
                电话
              </div>
            </template>
            <el-tag size="small">
              {{ props.row.tel }} / {{ props.row.phone }}</el-tag
            >
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                角色
              </div>
            </template>
            {{ getRoleByNo(props.row.roleid).rname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                责任区
              </div>
            </template>
            {{ getAddiByno(props.row.area).aname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                状态
              </div>
            </template>
            {{ getDictByNo(props.row.status).title }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                部门
              </div>
            </template>
            {{ getDeptByno(props.row.deptno).dname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                上级领导
              </div>
            </template>
            {{ props.row.mgr }}
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </el-table-column>
    <el-table-column prop="empno" label="员工编号" />
    <el-table-column prop="ename" label="姓名" />
    <el-table-column prop="gender" label="性别" />
    <el-table-column prop="job" label="岗位" />
    <el-table-column prop="tel" label="办公电话" />
    <el-table-column prop="phone" label="手机" />
  </el-table>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useEmpStore } from '../../stores/emp'

import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
  Edit
} from '@element-plus/icons-vue'

import { computed, ref } from 'vue'

import { useRoleStore } from '../../stores/role'

import { useDictStore } from '../../stores/dict'

import { useDeptStore } from '../../stores/dept'

import { useAddiStore } from '../../stores/addi'

const addiStore = useAddiStore()

const { getAddiByno } = storeToRefs(addiStore)

const expandChange = (row) => {
  addiStore.qryAddiByno(row.area)
}

const deptStore = useDeptStore()

const { getDeptByno } = storeToRefs(deptStore)

const dictStore = useDictStore()

const { getDictByNo } = storeToRefs(dictStore)

const roleStore = useRoleStore()

const { getRoleByNo } = storeToRefs(roleStore)

const empStore = useEmpStore()

const { currentemps } = storeToRefs(empStore)

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default
  }
})
</script>

<style lang="less" scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>
