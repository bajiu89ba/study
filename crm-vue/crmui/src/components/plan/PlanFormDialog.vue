<template>
  <el-dialog v-model="dialogFormVisible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">{{ dialogFormTitle }}</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left">
            <CircleCloseFilled />
          </el-icon>
          Close
        </el-button>
      </div>
    </template>
    <el-form :model="form">
      <el-form-item :label-width="formLabelWidth" label="工作内容">
        <el-input v-model="form.info" autocomplete="off" />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="执行时间">
        <el-date-picker
          v-model="form.dt"
          placeholder="计划执行日期"
          type="date"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button :icon="Promotion" type="primary" @click="planStore.save()">
          保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled, Promotion } from '@element-plus/icons-vue'
import { usePlanStore } from '../../stores/plan'
import { storeToRefs } from 'pinia'

const formLabelWidth = '140px'
const planStore = usePlanStore()

const { dialogFormVisible, dialogFormTitle, form } = storeToRefs(planStore)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
