<template>
  <el-table
    ref="chanceTable"
    :data="filterTableData"
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
                :icon="Lock"
                text
                @click="open(props.row)"
                v-show="props.row.state !== '已经结束'"
                >结束机会</el-button
              >
            </div>
          </template>
          <!--     时间戳组件显示活动计划       -->
          <feed-back-plan-timeline></feed-back-plan-timeline>
        </el-card>
      </template>
    </el-table-column>
    <el-table-column label="#" prop="chanceno" width="60" />
    <el-table-column label="标题" prop="title" />
    <el-table-column label="类型" prop="type" />
    <el-table-column label="机会来源" prop="background" />
    <el-table-column label="目的" prop="purpose" />
    <el-table-column label="成功率" prop="probability" />
    <el-table-column label="状态" prop="state" />
    <el-table-column fixed="right" width="120">
      <template #header>
        <el-input v-model="search" size="small" placeholder="状态过滤" />
      </template>
      <template #default="scopt">
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
import { ref, computed } from 'vue'
import { Lock } from '@element-plus/icons-vue'
import FeedBackPlanTimeline from '@/components/plan/FeedBackPlanTimeline.vue'

import { ElMessage, ElMessageBox } from 'element-plus'

const open = (chance) => {
  const title = chance.title
  ElMessageBox.prompt('从页面上复制并填入机会的标题', '结束机会提醒', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    //校验方法
    inputValidator: (val) => {
      if (val === null || val.length < 1 || val.length > 216 || val !== title) {
        return false
      }
    },
    inputErrorMessage: '此项不能为空，必须与机会的标题一致'
  })
    .then(() => {
      chanceStore.finish(chance)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled OR Input Error'
      })
    })
}

const search = ref('')
const filterTableData = computed(() =>
  currentList.value.filter(
    (data) =>
      !search.value ||
      data.state.toLowerCase().includes(search.value.toLowerCase())
  )
)
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
    height: 60px;
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
