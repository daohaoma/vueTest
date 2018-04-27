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
              <MyInput
                id="safe_code"
                :name="'safeCode'"
                :icon="'../assets/images/icon/ic_register_security_normal.png'"
                :placeholder="'安全码'"
                ></MyInput>
            </div>
            <div class="userlogin-input">
              <MyInput
                :name="'userName'"
                :icon="'../assets/images/icon/ic_register_username_normal.png'"
                :placeholder="'用户名'"
                ></MyInput>
            </div>
            <div class="userlogin-input" style="margin-bottom: 5px;">
              <MyInput
                :name="'passWord'"
                :type="'password'"
                :showswitch="'on'"
                :icon="'../assets/images/icon/ic_register_password_normal.png'"
                :placeholder="'密码'"
                ></MyInput>
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
        let inputs = document.getElementsByClassName('my-input-wrap')
        let value = this.buildNewObj(inputs)
        console.log(value)
      },
      buildNewObj: function(val) {
        let inputVal = new Object()
        for(let i = 0; i < val.length; i++) {
          let input = val[i].getElementsByTagName('input')
          // console.log(input[0].name)
          // console.log(input[0].value)
          // let inputVal = new Object()
          inputVal[input[0].name] = input[0].value
        }
        return inputVal
      }
    }
  }
</script>
