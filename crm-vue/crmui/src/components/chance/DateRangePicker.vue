<template>
  <div class="demo-date-picker">
    <span style="width: 120px">申报日期：</span>
    <el-date-picker
      v-model="daterange"
      type="daterange"
      unlink-panels
      range-separator="至"
      start-placeholder="Start date"
      end-placeholder="End date"
      :shortcuts="shortcuts"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
    />
  </div>
</template>

<script setup>
import { useChanceStore } from '@/stores/chance'
import { storeToRefs } from 'pinia'
const chanceStore = useChanceStore()
const { daterange } = storeToRefs(chanceStore)

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 35%;
  padding: 0;
  align-items: center;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
