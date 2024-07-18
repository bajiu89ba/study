<template>
  <el-drawer v-model="formDrawerVisible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>

    <!-- 嵌入Form -->
    <el-form :model="form" label-width="120px">
      <el-form-item label="员工姓名">
        <el-input v-model="form.ename" />
      </el-form-item>
      <el-form-item label="岗位">
        <el-select
          v-model="form.job"
          class="m-2"
          placeholder="选择岗位"
          size="large"
        >
          <el-option
            v-for="(item, index) in getDictTitleByNo('员工岗位')"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="责任区">
        <AreaCascader
          :areano="form.area"
          @areaSelectChanged="areaSelectChanged"
        >
        </AreaCascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup>
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useEmpStore } from '../../stores/emp'

import { useDictStore } from '../../stores/dict'

import AreaCascader from '../area/AreaCascader.vue'

const dictStore = useDictStore()

const { getDictTitleByNo } = storeToRefs(dictStore)

const empStore = useEmpStore()

const { formDrawerVisible, form } = storeToRefs(empStore)

const areaSelectChanged = (areano) => {
  form.value.areano = areano
  console.log(areano)
}
</script>
