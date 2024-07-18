<template>
  <el-drawer v-model="drawerFormVisible" :show-close="false" size="35%">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">{{ drawerFormTitle }}</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    <div class="demo-drawer__content">
      <el-form :model="form">
        <el-form-item label="目标客户" :label-width="formLabelWidth">
          <CustomerAutocomplete
            :state="
              !form || !form.customer || !form.customer.cname
                ? ''
                : form.customer.cname
            "
          ></CustomerAutocomplete>
        </el-form-item>
        <el-form-item label="目标产品" :label-width="formLabelWidth">
          <ProductAutocomplete></ProductAutocomplete>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input
            placeholder="客户名-产品名-XXXXX"
            v-model="form.title"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="机会类型" :label-width="formLabelWidth">
          <el-select v-model="form.type" class="m-2" placeholder="选择机会类型">
            <el-option
              v-for="item in getDictTitleByNo('关系类型')"
              :key="'type' + item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="机会来源" :label-width="formLabelWidth">
          <el-input v-model="form.background" autocomplete="off" />
        </el-form-item>
        <el-form-item label="目的" :label-width="formLabelWidth">
          <el-input v-model="form.purpose" autocomplete="off" />
        </el-form-item>
        <el-form-item label="成功几率" :label-width="formLabelWidth">
          <el-slider
            v-model="form.probability"
            show-input
            :step="5"
            show-stops
          />
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :colume="2"
            v-model="form.info"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" :icon="Promotion" @click="chanceStore.save()"
          >保存</el-button
        >
      </div>
    </div>
  </el-drawer>
</template>
保存
<script setup>
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled, Promotion } from '@element-plus/icons-vue'

import { useChanceStore } from '../../stores/chance'
import { storeToRefs } from 'pinia'

import CustomerAutocomplete from './CustomerAutocomplete.vue'
import ProductAutocomplete from './ProductAutocomplete.vue'

import { useDictStore } from '../../stores/dict'

const dictStore = useDictStore()
const { getDictTitleByNo } = storeToRefs(dictStore)
const formLabelWidth = '80px'
const chanceStore = useChanceStore()

const { drawerFormVisible, form, drawerFormTitle } = storeToRefs(chanceStore)
</script>
