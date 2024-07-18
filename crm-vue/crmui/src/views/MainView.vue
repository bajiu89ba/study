<script setup>
import MainHeader from '../components/main/MainHeader.vue'
import LeftAside from '../components/main/LeftAside.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-view-div">
    <el-container>
      <el-header> <MainHeader></MainHeader> </el-header>
      <el-container>
        <el-aside width="250px"> <LeftAside></LeftAside></el-aside>
        <el-main> <RouterView /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="less">
.main-view-div {
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    width: 100%;
  }
}

.el-header {
  background-color: #373d41;
  height: 60px;
  padding: 0px;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  padding: 0px;
  background-color: #eaedf1;
}
</style>
