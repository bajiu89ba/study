<template>
  <el-table
    ref="chanceTable"
    :data="currentList"
    :expand-row-keys="expandedRowKeys"
    class="chancetable"
    row-key="chanceno"
    stripe
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{ props.row.title }} 活动计划 </span>
              <el-button
                :disabled="props.row.state !== '未审批'"
                :icon="Plus"
                @click="planStore.preData4Add(props.row)"
                >增加计划
              </el-button>
            </div>
          </template>
          <!--     时间戳组件显示活动计划       -->
          <plan-timeline></plan-timeline>
        </el-card>
      </template>
    </el-table-column>
    <el-table-column label="#" prop="chanceno" />
    <el-table-column label="标题" prop="title" />
    <el-table-column label="类型" prop="type" />
    <el-table-column label="机会来源" prop="background" />
    <el-table-column label="目的" prop="purpose" />
    <el-table-column label="成功率" prop="probability" />
    <el-table-column label="状态" prop="state" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scopt">
        <el-button
          link
          size="small"
          type="primary"
          @click="chanceStore.preData4Mod(scopt.row)"
          >编辑
        </el-button>
        <el-button
          link
          size="small"
          type="primary"
          @click="chanceStore.prePlans4Show(scopt.row)"
          >计划
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useChanceStore } from '../../stores/chance'
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { usePlanStore } from '../../stores/plan'

import PlanTimeline from '@/components/plan/PlanTimeline.vue'

const planStore = usePlanStore()

const chanceTable = ref()
const chanceStore = useChanceStore()

const { currentList, expandedRowKeys } = storeToRefs(chanceStore)
</script>

<style lang="less" scoped>
.box-card {
  margin: 5px 5px 5px 5px;
}

.el-timeline {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
}
</style>
