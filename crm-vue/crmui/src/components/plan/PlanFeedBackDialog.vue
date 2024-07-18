<template>
  <el-dialog v-model="feedBackDialogVisible" :show-close="false" width="35%">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">反馈计划执行结果</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    <el-form :model="form">
      <el-form-item label="执行结果" :label-width="formLabelWidth">
        <el-select v-model="form.outcome" placeholder="Please select a OUTCOME">
          <el-option
            :label="title"
            :value="title"
            v-for="(title, index) in getDictTitleByNo('计划结果')"
            :key="'plan' + index"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="执行时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="form.donedate"
          type="date"
          placeholder="选择实际执行时间"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="feedBackDialogVisible.value = false"
          >Cancel</el-button
        >
        <el-button
          type="primary"
          :icon="Promotion"
          @click="planStore.feedBack()"
        >
          保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled, Promotion } from '@element-plus/icons-vue'

import { useDictStore } from '../../stores/dict'

import { usePlanStore } from '../../stores/plan'
import { storeToRefs } from 'pinia'

const dictStore = useDictStore()

const { getDictTitleByNo } = storeToRefs(dictStore)

const formLabelWidth = '140px'
const planStore = usePlanStore()

const { feedBackDialogVisible, form } = storeToRefs(planStore)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
