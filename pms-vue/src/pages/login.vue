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
                :name="'safeCode'"
                :icon="'../../static/images/icon/ic_register_security_normal.png'"
                :placeholder="'安全码'"
                :pattern="rule.checked ? rule.positiveInteger.pattern : ''"
                :message="rule.checked ? rule.positiveInteger.message : ''"
                :required="true"
                ></MyInput>
            </div>
            <div class="userlogin-input">
              <MyInput
                :name="'userName'"
                :icon="'../../static/images/icon/ic_register_username_normal.png'"
                :placeholder="'用户名'"
                :message="rule.checked ? '请填写用户名' : ''"
                :required="true"
                ></MyInput>
            </div>
            <div class="userlogin-input" style="margin-bottom: 5px;">
              <MyInput
                :name="'passWord'"
                :type="'password'"
                :showswitch="'on'"
                :icon="'../../static/images/icon/ic_register_password_normal.png'"
                :placeholder="'密码'"
                :message="rule.checked ? '请填写密码' : ''"
                :required="true"
                ></MyInput>
            </div>
            <div class="userlogin-button">
              <div class="userlogin-button-forget"><span>忘记密码</span></div>
              <div class="userlogin-button-submit" @click="loginSubmit">登录</div>
            </div>
            <div class="userlogin-goregist"><span style="cursor: pointer;">还没账号，去注册-></span></div>
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
  import validator from '../../static/validator/index.js'
  export default {
    data() {
      return {
        rule: {},
      }
    },
    components: {
      MyInput
    },
    mounted: function() {
      this.ready()
    },
    methods: {
      ready: function() {
        // :pattern="rule.positiveInteger.pattern"
        // :message="rule.positiveInteger.message"
        this.rule = validator
      },
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
