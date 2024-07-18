<template>
  <el-table
    :data="currentList"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column type="expand" label="...">
      <template #default="props">
        <el-descriptions
          class="margin-top"
          title="客户信息详情"
          :column="1"
          :size="size"
          border
        >
          <template #extra>
            <el-button
              type="primary"
              @click="customerStore.perData4Mod(props.row)"
              :icon="Edit"
              >编辑</el-button
            >
          </template>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <WindPower />
                </el-icon>
                客户编号
              </div>
            </template>
            {{ props.row.cid }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <user />
                </el-icon>
                客户名称
              </div>
            </template>
            {{ props.row.cname }}
          </el-descriptions-item>
          <!-- <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <Location />
                </el-icon>
                所在地区
              </div>
            </template>

            <AreaCascader
              :areano="props.row.areano"
              disabled="true"
            ></AreaCascader>
            <el-tag size="large">{{ props.row.zipcode }}</el-tag>
          </el-descriptions-item> -->

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <tickets />
                </el-icon>
                用户级别
              </div>
            </template>
            <el-tag size="small">{{ props.row.cgrade }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <tickets />
                </el-icon>
                满意度
              </div>
            </template>
            <el-tag size="small">{{ props.row.satisfaction }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <Postcard />
                </el-icon>
                财务信息
              </div>
            </template>
            <el-tag size="small"
              >{{ props.row.deposit }} / {{ props.row.account }}</el-tag
            >
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <Platform />
                </el-icon>
                客户网址
              </div>
            </template>
            <el-link type="primary" :href="props.row.url">
              {{ props.row.url }}</el-link
            >
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <location />
                </el-icon>
                客户状态
              </div>
            </template>

            {{ props.row.status }}
          </el-descriptions-item>
        </el-descriptions>
        <hr />
      </template>
    </el-table-column>
    <el-table-column prop="customerno" label="#" width="80" />
    <el-table-column prop="cid" label="客户编号" width="120" />
    <el-table-column prop="cname" label="客户名称" />
    <!-- <el-table-column prop="areano" label="所在地区" width="250">
      <template #default="scope">
        <AreaCascader :areano="scope.row.areano" disabled="true"></AreaCascader>
      </template>
    </el-table-column> -->
    <el-table-column prop="cgrade" label="级别">
      <template #default="scope">
        <el-rate
          v-model="scope.row.cgrade"
          :texts="['潜在客户', '目标客户', '客户', '优质客户', '忠实客户']"
          show-text
          disabled
        />
      </template>
    </el-table-column>
    <el-table-column prop="satisfaction" label="满意度">
      <template #default="scope">
        <el-rate
          v-model="scope.row.satisfaction"
          :texts="['投诉', '不满意', '一般', '比较满意', '非常满意']"
          disabled
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCustomerStore } from '../../stores/customer'
import AreaCascader from '../area/AreaCascader.vue'
import { computed, ref } from 'vue'
import {
  Platform,
  Location,
  Tickets,
  User,
  WindPower,
  Postcard,
  Edit
} from '@element-plus/icons-vue'

const customerStore = useCustomerStore()
const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px'
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default
  }
})
const { currentList } = storeToRefs(customerStore)

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 3 === 1) {
    return 'warning-row'
  } else if (rowIndex % 3 === 2) {
    return 'success-row'
  }
  return ''
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
