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
                    v-model="ruleForm.safecode"
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
            // console.log(this.ruleForm)
            // console.log(this.ruleForm.username)
            let params = {
              gcid: this.ruleForm.safecode,
              params:{
                accountName: this.ruleForm.username,
                accountPwd: this.ruleForm.password,
                gcid: this.ruleForm.username,
              },
              token: "",
              userid: "",
            }
            this.$http.post('/v2/jjr_user_login/pc_login', params).then((response) => {
              // console.log(response)
              let data = response.data
              if(response.status === 200) {
                if(data.status.code === '200') {
                  this.$message({
                    message: '登陆成功！',
                    type: 'success'
                  })
                } else if(data.status.code === '1012') {
                  this.$message.error(data.status.msg)
                } else if(data.status.code === '1007') {
                  this.$message.error('请检查用户名是否正确！')
                } else if(data.status.code === '99') {
                  this.$message.error('请检查密码是否正确！')
                }
              } else {
                this.$message.error('网络错误~')
              }
            }).catch((error)=>{
              console.log(error)
            })
          } else {
            console.log('error submit!!')
            return false;
          }
        })
      }
    }
  }
</script>
