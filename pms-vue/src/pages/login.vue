<template>
  <div class='first-page'>
    <div class='login-user'>
      <div class='login-header'>
        <img src='../assets/images/login/logo.png' alt='巧房科技'/>
      </div>
      <div class='login-content'>
        <div class="content-main" v-show="!showQrCode">
          <div class="content-main-header">
            <span class="user-mt-title" v-show="showLogin">登录</span>
            <span class="forget-mt-title" v-show="!showLogin">重置密码</span>
            <span class="user-mt-img" @click="turnQrCodeLogin(true)" v-show="showLogin"></span>
          </div>
          <div class="content-main-userlogin">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-show="showLogin">
              <div class="userlogin-input">
                <el-form-item prop="safecode">
                  <el-input
                    placeholder="安全码"
                    prefix-icon="el-icon-pms-wufengxian"
                    v-model="ruleForm.safecode"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-input">
                <el-form-item prop="username">
                  <el-input
                    placeholder="用户名"
                    prefix-icon="el-icon-pms-geren"
                    v-model="ruleForm.username"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-input" style="margin-bottom: 5px;">
                <el-form-item prop="password">
                  <el-input
                    placeholder="密码"
                    prefix-icon="el-icon-pms-mimasuo"
                    v-model="ruleForm.password"
                    type="password"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-button">
                <div class="userlogin-button-forget"><span @click="turnLogin(false)">忘记密码</span></div>
                <!-- <div class="userlogin-button-submit" @click="loginSubmit">登录</div> -->
                <el-form-item prop="submit">
                  <el-button type="primary" @click="loginSubmit('ruleForm')" style="width: 100%">登录</el-button>
                </el-form-item>
              </div>
            </el-form>
            <div class="userlogin-goregist" v-show="showLogin"><span style="cursor: pointer;" @click="goToRegist">还没账号，去注册-></span></div>

            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" v-show="!showLogin">
              <div class="userlogin-input">
                <el-form-item prop="forget_phone">
                  <el-input
                    placeholder="请输入手机号"
                    prefix-icon="el-icon-mobile-phone"
                    v-model="ruleForm2.forget_phone"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-input">
                <el-form-item prop="forget_testcode">
                  <el-input
                    placeholder="验证码"
                    prefix-icon="el-icon-pms-wufengxian"
                    v-model="ruleForm2.forget_testcode"
                  ><i slot="suffix" class="send_testcode" @click="sendTestCode">{{showTestCode}}{{second}}</i></el-input>
                </el-form-item>
              </div>
              <div class="userlogin-input">
                <el-form-item prop="forget_password">
                  <el-input
                    placeholder="密码"
                    prefix-icon="el-icon-pms-mimasuo"
                    v-model="ruleForm2.forget_password"
                    :type="turnswitch"
                  ><i slot="suffix">
                    <el-switch
                      v-model="show_password"
                      active-color="#F87242"
                      @change="showPassword"
                    >
                    </el-switch>
                  </i>
                  </el-input>
                </el-form-item>
              </div>
              <div class="userlogin-button">
                <el-form-item prop="forget_submit">
                  <el-button type="primary" style="width: 100%" @click="resetPasswordSubmit('ruleForm2')">确认</el-button>
                </el-form-item>
              </div>
            </el-form>
            <div class="userlogin-turnlogin" v-show="!showLogin"><span style="cursor: pointer;" @click="turnLogin(true)">返回登录-></span></div>

          </div>
        </div>
        <div class="content-qrcode" v-show="showQrCode">
          <div class="content-qrcode-header">
            <span class="user-qr-title">扫码登录</span>
            <span class="user-qr-img" @click="turnQrCodeLogin(false)"></span>
          </div>
          <div class="content-qrcode-userlogin" :class="{'opacity': overdue}" id='qr_code'>
            <!-- <img src="../assets/images/login/qr_code.png" alt="二维码登录"> -->
          </div>
          <div class="content_show_qrcode_again">
            321231321321
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
  import QRCode from 'qrcodejs2'
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
      var checkPhoneNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号码不能为空'))
        } else if (!validator.phone.pattern.test(value)) {
          callback(new Error('请输入正确手机号'))
        } else {
          callback()
        }
      }
      var checkPassWord = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        } else if (!validator.password.pattern.test(value)) {
          callback(new Error('密码长度为4~20位,只能包括数字、英文以及标点符号'))
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
        ruleForm2: {
          forget_phone: '',
          forget_testcode: '',
          forget_password: '',
        },
        rules: {
          safecode: [{ validator: checkSafeCode, trigger: 'change' }],
          username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
          password: [{ required: true, message: '请输入密码', trigger: 'change' }],
        },
        rules2: {
          forget_phone: [{ validator: checkPhoneNum, trigger: 'change' }],
          forget_testcode: [{ required: true, message: '请输入收到的验证码', trigger: 'change' }],
          forget_password: [{ validator: checkPassWord, trigger: 'change' }],
        },
        showLogin: true,
        showQrCode: false,
        showTestCode: '发送验证码',
        second: '',
        show_password: false,
        turnswitch: 'password',
        scanCode: '',
        overdue: false,
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
                  this.$router.push({path:'/home'})
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
      },
      goToRegist() { this.$router.push({path:'/regist'}) },
      turnLogin(value) { this.showLogin = value },
      turnQrCodeLogin(value) {
        this.showQrCode = value
        console.log(value)
        this.showCode()
      },
      showCode() {
        let params = { scanCode: this.scanCode }
        // setInterval(this.getQrCode(params), 1000)
        this.getQrCode(params)
      },
      getQrCode(params) {
        this.$http.post('/v2/jjr_user_login/scan_code_login', params).then((res) => {
          console.log('1')
          $('#qr_code').html('')                        //清除二维码
          var qrcode = new QRCode('qr_code', {
              text: res.body.result.scanCode,
              width: 150,
              height: 150,colorDark : "#000000",
              colorLight : "#ffffff",
              correctLevel : QRCode.CorrectLevel.H
          })
          // this.scanCode = res.body.result.scanCode.split(":")[1]
          // var $t = setInterval(this.showQrCode(), 1000)
        })
      },
      sendTestCode() {
        let params = {phone: this.ruleForm2.forget_phone, type: 2}
        this.$http.post('/v2/register/get_validateCode', params).then((res) => {
          if(res.ok){
            this.$message({ message: '验证码发送成功，请注意查收！', type: 'success' })
            if(!this.second) {
              this.second = 's'
              this.showTestCode = 60
              let timer = setInterval(() => {
                if (this.showTestCode > 1) {
                  this.showTestCode --
                } else {
                  this.second = ''
                  this.showTestCode = '发送验证码'
                  clearInterval(timer)
                }
              }, 1000)
            } else {
              this.$message({ message: '请稍后再次点击发送~', type: 'warning' })
            }
          } else {
            this.$message.error('验证码发送失败~')
          }
        })
      },
      showPassword(value) {
        if(value) {
          this.turnswitch = ''
        } else {
          this.turnswitch = 'password'
        }
      },
      resetPasswordSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2)

          } else {
            this.$message.error('填写信息错误~')
          }
        })
      }
    }
  }
</script>
