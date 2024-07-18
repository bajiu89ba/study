<template>
  <el-badge :value="12" class="item">
    <el-button link>信息</el-button>
  </el-badge>
  <div style="width: 40px; height: 10ppx"></div>
  <el-popover
    :width="300"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
    </template>
    <template #default>
      <div
        class="demo-rich-conent"
        style="display: flex; gap: 16px; flex-direction: column"
      >
        <el-avatar
          :size="60"
          src="https://avatars.githubusercontent.com/u/72015883?v=4"
          style="margin-bottom: 8px"
        />
        <div>
          <p
            class="demo-rich-content__name"
            style="margin: 0; font-weight: 500"
          >
            欢迎：{{ empLoginfo.ename }}
          </p>
          <p
            class="demo-rich-content__mention"
            style="margin: 0; font-size: 14px; color: var(--el-color-info)"
          >
            @ {{ empLoginfo.job }}
          </p>
        </div>
        <p class="demo-rich-content__desc" style="margin: 0">
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>操作</span>
              </template>

              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>登出</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>找回密码</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>反馈</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </p>
      </div>
    </template>
  </el-popover>
</template>

<script setup>
import { useEmpStore } from '@/stores/emp'
import { storeToRefs } from 'pinia'
const empStore = useEmpStore()
const { empLoginfo } = storeToRefs(empStore)
</script>
