<template>
  <el-timeline>
    <el-timeline-item
      v-for="(plan, index) in currentList"
      :key="'plan' + index"
      :timestamp="plan.dt"
      placement="top"
      type="primary"
      :hollow="true"
    >
      <el-card>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <h4>工作内容：{{ plan.info }}</h4>
          <div v-if="planStore.currentChance.state === '通过审批'">
            <el-button
              @click="planStore.preData4Feedback(plan, index)"
              type="primary"
              :icon="Edit"
            >
              反馈执行结果
            </el-button>
          </div>
          <div v-if="planStore.currentChance.state === '未审批'">
            <el-button
              @click="planStore.preData4Mod(plan, index)"
              type="primary"
              :icon="Edit"
              circle
            />
            <el-button
              @click="planStore.delByid(plan, index)"
              type="danger"
              :icon="Delete"
              circle
            />
          </div>
        </div>

        <hr />
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <el-tag>责任人：{{ plan.serviceEmp.ename }}</el-tag>
          <p>填报时间：{{ plan.ft }}</p>
          <p>计划时间：{{ plan.dt }}</p>
          <p>
            执行时间：{{ plan.donedate == null ? '未执行' : plan.donedate }}
          </p>
          <el-tag class="ml-2" :type="elTagType(plan.outcome)"
            >计划结果：{{ plan.outcome }}</el-tag
          >
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <PlanFeedBackDialog></PlanFeedBackDialog>
</template>
<script setup>
import { usePlanStore } from '@/stores/plan'
import { storeToRefs } from 'pinia'
import { Delete, Edit } from '@element-plus/icons-vue'
import PlanFeedBackDialog from '@/components/plan/PlanFeedBackDialog.vue'
const planStore = usePlanStore()
const { currentList } = storeToRefs(planStore)

const elTagType = (outcome) => {
  switch (outcome) {
    case '失败':
      return 'danger'
    case '成功':
      return 'success'
    case '未执行':
      return 'warning'
  }
}
</script>
<style scoped lang="less">
.el-card {
  h4 {
    font-size: 16px;
    margin: 15px 0;
  }
}
</style>
