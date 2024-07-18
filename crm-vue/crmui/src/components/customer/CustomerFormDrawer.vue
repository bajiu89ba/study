<template>
  <el-drawer
    ref="drawerRef"
    v-model="formDrawerVisible"
    direction="rtl"
    class="demo-drawer"
    size="40%"
    :show-close="false"
  >
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">
        {{ formDrawerTitle }}
      </h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    <div class="demo-drawer__content">
      <el-form :model="form">
        <el-form-item label="客户编号" :label-width="formLabelWidth">
          <el-input v-model="form.cid" autocomplete="off" />
        </el-form-item>
        <el-form-item label="客户名称" :label-width="formLabelWidth">
          <el-input v-model="form.cname" autocomplete="off" />
        </el-form-item>
        <!-- <el-form-item label="所在地区" :label-width="formLabelWidth">
          <AreaCascader
            areano="110101"
            @areaSelectChanged="areaSelectChanged"
          ></AreaCascader>
        </el-form-item> -->
        <el-form-item label="邮政编码" :label-width="formLabelWidth">
          <el-input v-model="form.zipcode" autocomplete="off" />
        </el-form-item>

        <el-form-item label="客户等级" :label-width="formLabelWidth">
          <CustomerGradeRate></CustomerGradeRate>
        </el-form-item>
        <el-form-item label="满意度" :label-width="formLabelWidth">
          <CustomerSatisfactionRate></CustomerSatisfactionRate>
        </el-form-item>
        <el-form-item label="开户行" :label-width="formLabelWidth">
          <el-input v-model="form.deposit" autocomplete="off" />
        </el-form-item>
        <el-form-item label="银行卡号" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off" />
        </el-form-item>
        <el-form-item label="客户黄页" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.status">
            <el-radio-button
              :key="index"
              :label="item"
              v-for="(item, index) in getDictTitleByNo('客户状态')"
            />
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" :icon="Promotion" @click="onClick">
          保存数据
        </el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'

import { useCustomerStore } from '../../stores/customer'
import { storeToRefs } from 'pinia'

import AreaCascader from '../area/AreaCascader.vue'
import CustomerGradeRate from './CustomerGradeRate.vue'
import CustomerSatisfactionRate from './CustomerSatisfactionRate.vue'

import { useDictStore } from '../../stores/dict'

import { Promotion } from '@element-plus/icons-vue'

const dictStore = useDictStore()

const { getDictTitleByNo } = storeToRefs(dictStore)

const areaSelectChanged = (areano) => {
  customerStore.form.value.areano = areano
}

const customerStore = useCustomerStore()

const { formDrawerVisible, form, formDrawerTitle } = storeToRefs(customerStore)

const formLabelWidth = '80px'
let timer

const dialog = ref(false)
const loading = ref(false)

const drawerRef = ref()
const onClick = () => {
  drawerRef.value.close()
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
