<template>
  <div class='first-page'>
    <div class='login-user'>
      <div class='login-header'>
        <img src='../assets/images/login/logo.png' alt='巧房科技'/>
      </div>
      <div class='login-content'>
        <div class="content-main">
          <div class="content-main-header">
            <span class="user-mt-title">登录</span>
            <span class="user-mt-img"></span>
          </div>
          <div class="content-main-userlogin">
            <div class="userlogin-input">
              <MyInput :type="'password'" :pass_switch="'12'" id="safe_code"></MyInput>
            </div>
            <div class="userlogin-input">
              <MyInput></MyInput>
            </div>
            <div class="userlogin-input" style="margin-bottom: 5px;">
              <MyInput></MyInput>
            </div>
            <div class="userlogin-button">
              <div class="userlogin-button-forget"><span>忘记密码</span></div>
              <div class="userlogin-button-submit" @click="loginSubmit">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import '../assets/css/login.css';
</style>
<script>
  import MyInput from '../components/MyInput'
  export default {
    data() {
      return {}
    },
    components: {
      MyInput
    },
    methods: {
      loginSubmit: function() {
        let input = document.getElementById('my-input').value
        console.log(input)
      }
    }
  }
</script>
