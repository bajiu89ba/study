<template>
  <div class="main-header-outter">
    <div style="display: flex; align-items: center">
      <img src="../../assets/imgs/neu.png" />
      <span> 东软客户关系管理系统 </span>
    </div>
    <div style="display: flex; align-items: center">
      <EmpLoginfoPopover></EmpLoginfoPopover>
      <div style="width: 20px; height: 10px"></div>
    </div>
  </div>
</template>

<script setup>
import EmpLoginfoPopover from '@/components/emp/EmpLoginfoPopover.vue'
</script>

<style lang="less" scoped>
div {
  height: 60px;
}
.main-header-outter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 54px;
    margin: 3px 10px;
  }
  span {
    color: #fff;
    font-size: 24px;
    font-family: '微软雅黑';
  }
}
</style>
