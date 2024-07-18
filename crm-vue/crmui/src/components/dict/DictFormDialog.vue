<template>
  <el-dialog v-model="dialogFormVisible" :title="dialogFormTitle">
    <el-form :model="form">
      <el-form-item label="字典编号" :label-width="formLabelWidth">
        <el-input v-model="form.dictno" autocomplete="off" readonly />
      </el-form-item>
      <el-form-item label="数据项" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>

      <el-form-item label="分类" :label-width="formLabelWidth">
        <DictCategorySelect></DictCategorySelect>
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="form.info" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button :icon="Promotion" type="primary" @click="btnSave">
          保存数据
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

import { useDictStore } from '../../stores/dict'

import { Delete, Edit, Search, Share, Promotion } from '@element-plus/icons-vue'
import DictCategorySelect from './DictCategorySelect.vue'

const dictStore = useDictStore()
// 订阅dictStroe 的状态

dictStore.$subscribe((mutation, state) => {
  form.value.category = state.search
})

const { dialogFormVisible, dialogFormTitle, form } = storeToRefs(dictStore)

const btnSave = () => {
  dictStore.save()
}

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
