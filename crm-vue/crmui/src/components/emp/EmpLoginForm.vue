<template>
  <el-form
    ref="ruleFormRef"
    :model="logform"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="登录名" prop="logid">
      <el-input :prefix-icon="Avatar" v-model.number="logform.logid" />
    </el-form-item>
    <el-form-item label="密码" prop="logpwd">
      <el-input
        :prefix-icon="Key"
        v-model="logform.logpwd"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        :icon="Promotion"
        type="primary"
        @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Avatar, Key, Promotion } from '@element-plus/icons-vue'

import { useEmpStore } from '../../stores/emp'
import { storeToRefs } from 'pinia'

const empStore = useEmpStore()

const { logform } = storeToRefs(empStore)

const ruleFormRef = ref()

const rules = reactive({
  logid: [
    { required: true, message: '登录名必填', trigger: 'blur' },
    {
      min: 3,
      max: 15,
      message: '登录名的长度应该在 3 到 15 个字符之间',
      trigger: 'blur'
    }
  ],
  logpwd: [
    { required: true, message: '密码必填', trigger: 'blur' },
    {
      min: 6,
      max: 18,
      message: '密码的长度应该在 6 到 18 个字符之间',
      trigger: 'blur'
    }
  ]
  //   pass: [{ validator: validatePass, trigger: 'blur' }],
  //   checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  //   logidage: [{ validator: checkAge, trigger: 'blur' }]
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      empStore.login()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped lang="less">
.el-form {
  width: 90%;
  margin: 20px;
  margin-left: 0px;
}
</style>
