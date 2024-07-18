<template>
  <div id="loginwin">
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/imgs/logo.png" alt="" srcset="" />
      </div>
      <div class="login-form">
        <EmpLoginForm></EmpLoginForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmpLoginForm from '../components/emp/EmpLoginForm.vue'
</script>

<style scoped lang="less">
#loginwin {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #ddd;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  .login-form {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0px;
  }

  .avater_box {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;

    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #ddd;
    }
  }
}
</style>
