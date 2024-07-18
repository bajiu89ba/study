<template>
  <el-dialog v-model="dialogFormVisible" :title="dialogFormTitle" width="40%">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.cname" autocomplete="off" />
      </el-form-item>

      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio-group v-model="form.gender" class="ml-4">
          <el-radio
            :key="'性别' + index"
            :label="title"
            size="large"
            v-for="(title, index) in getDictTitleByNo('性别')"
            >{{ title }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="岗位" :label-width="formLabelWidth">
        <el-input v-model="form.job" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="办公电话" :label-width="formLabelWidth">
        <el-input v-model="form.tel" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input
          v-model="form.info"
          autocomplete="off"
          :rows="3"
          type="textarea"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button
          :icon="Promotion"
          type="primary"
          @click="contactStore.save()"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useContactStore } from '../../stores/contact'

import { useDictStore } from '../../stores/dict'

import { Promotion } from '@element-plus/icons-vue'

const dictStore = useDictStore()

const { getDictTitleByNo } = storeToRefs(dictStore)

const contactStore = useContactStore()
const { dialogFormVisible, form, dialogFormTitle } = storeToRefs(contactStore)

const formLabelWidth = '140px'
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
