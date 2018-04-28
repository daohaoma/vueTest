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
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <div class="userlogin-input">
                <el-form-item prop="safecode">
                  <el-input
                    placeholder="安全码"
                    prefix-icon="el-icon-tickets"
                    v-model.number="ruleForm.safecode"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-input">
                <el-form-item prop="username">
                  <el-input
                    placeholder="用户名"
                    prefix-icon="el-icon-tickets"
                    v-model="ruleForm.username"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-input" style="margin-bottom: 5px;">
                <el-form-item prop="password">
                  <el-input
                    placeholder="密码"
                    prefix-icon="el-icon-tickets"
                    v-model="ruleForm.password"
                    type="password"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-button">
                <div class="userlogin-button-forget"><span>忘记密码</span></div>
                <!-- <div class="userlogin-button-submit" @click="loginSubmit">登录</div> -->
                <el-form-item prop="submit">
                  <el-button type="primary" @click="loginSubmit('ruleForm')" style="width: 100%">登录</el-button>
                </el-form-item>
              </div>
            </el-form>
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
  import validator from '../../static/validator/index.js'
  export default {
    data() {
      var checkSafeCode = (rule, value, callback) => {
        // console.log(Number.isInteger(parseInt(value)))
        if (!value) {
          return callback(new Error('安全码不能为空'))
        } else if (!Number.isInteger(parseInt(value))) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          safecode: '',
          username: '',
          password: '',
        },
        rules: {
          safecode: [
            { validator: checkSafeCode, trigger: 'change' }
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ],
        }
      }
    },
    components: {
    },
    mounted: function() {
      this.ready()
    },
    methods: {
      ready: function() {
      },
      loginSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
            console.log(this.ruleForm.username)
          } else {
            console.log('error submit!!')
            // console.log(this.ruleForm.safecode)
            return false;
          }
        })
      }
      // loginSubmit: function() {
      //   let inputs = document.getElementsByClassName('my-input-wrap')
      //   let value = this.buildNewObj(inputs)
      //   console.log(value)
      // },
      // buildNewObj: function(val) {
      //   let inputVal = new Object()
      //   for(let i = 0; i < val.length; i++) {
      //     let input = val[i].getElementsByTagName('input')
      //     // console.log(input[0].name)
      //     // console.log(input[0].value)
      //     // let inputVal = new Object()
      //     inputVal[input[0].name] = input[0].value
      //   }
      //   return inputVal
      // }
    }
  }
</script>
