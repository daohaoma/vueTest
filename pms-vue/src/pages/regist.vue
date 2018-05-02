<template>
  <div class='regist-user'>
    <div class='regist-header'>
      <img src='../assets/images/login/logo.png' alt='巧房科技'/>
    </div>
    <div class='regist-content'>
      <div class='regist-content-main'>
        <div>
          <span class="user-mt-title">注册</span>
        </div>
        <div class='content-main-userregist'>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phonenumber">
              <el-input
                placeholder="请输入手机号"
                prefix-icon="el-icon-mobile-phone"
                v-model="ruleForm.phonenumber"
              ></el-input>
            </el-form-item>
            <el-form-item prop="company">
              <el-input
                placeholder="公寓/公司名称"
                prefix-icon="el-icon-pms-zhuye"
                v-model="ruleForm.company"
              ></el-input>
            </el-form-item>
            <el-form-item prop="area" class="regist_area">
              <i class="el-icon-location-outline regist_area_icon"></i>
              <el-cascader
                :options="options"
                placeholder="所在城市/区域"
                style="width: 100%"
                @change="handleChange"
              >
              </el-cascader>
            </el-form-item>
            <el-form-item prop="contacts">
              <el-input
                placeholder="联系人"
                prefix-icon="el-icon-document"
                v-model="ruleForm.contacts"
              ></el-input>
            </el-form-item>
            <el-form-item prop="testcode">
              <el-input
                placeholder="验证码"
                prefix-icon="el-icon-pms-wufengxian"
                v-model="ruleForm.testcode"
              ><i slot="suffix" class="send_testcode" @click="sendTestCode">{{showTestCode}}{{second}}</i></el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input
                placeholder="用户名admin, 管理员用户名均为admin"
                prefix-icon="el-icon-pms-geren"
                v-model="ruleForm.username"
                :disabled="true"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 10px">
              <el-input
                placeholder="密码"
                prefix-icon="el-icon-pms-mimasuo"
                v-model="ruleForm.password"
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
            <el-form-item prop="agreeclause" style=" margin-bottom: 12px;" class="regist_agree_checkbox">
              <el-checkbox-group v-model="ruleForm.agreeclause">
                <el-checkbox v-model="checked" style="line-height: 33px;" name="type">同意《PMS公寓管理服务条款》</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item prop="registsubmit">
              <el-button type="primary" style="width: 100%" @click="registsubmit('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
          <div class="userregist-gologin"><span style="cursor: pointer;" @click="goToLogin">已有账号，去登陆-></span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import '../assets/css/regist.css';
</style>
<script>
  import validator from '../../static/validator/index.js'
  export default {
    data() {
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
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
        }],
        ruleForm: {
          phonenumber: '',
          company: '',
          contacts: '',
          testcode: '',
          password: '',
          agreeclause: [],
          area: '',
        },
        rules: {
          phonenumber: [
            { validator: checkPhoneNum, trigger: 'change' }
          ],
          company: [{ required: true, message: '请输入公寓/公司名称', trigger: 'change' }],
          area: [{ required: true, message: '请选择所在区域', trigger: 'change' }],
          contacts: [{ required: true, message: '请输入联系人', trigger: 'change' }],
          testcode: [{ required: true, message: '请输入验证码', trigger: 'change' }],
          password: [{ validator: checkPassWord, trigger: 'change' }],
          agreeclause: [{ type: 'array', required: true, message: '请点击并同意条款', trigger: 'change' }],
        },
        checked: false,
        show_password: false,
        turnswitch: 'password',
        showTestCode: '发送验证码',
        second: '',
      }
    },
    methods: {
      registsubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '信息填写正确',
              type: 'success'
            })
          } else {
            this.$message.error('信息填写不正确')
            return false;
          }
        })
      },
      handleChange(value) {
        console.log(value)
      },
      showPassword(value) {
        if(value) {
          this.turnswitch = ''
        } else {
          this.turnswitch = 'password'
        }
      },
      goToLogin() {this.$router.push({path:'/login'})},
      sendTestCode() {
        if(!this.second) {
          this.second = 's'
          this.showTestCode = 5
          let timer = setInterval(() => {
            if (this.showTestCode > 0) {
              this.showTestCode --
            } else {
              this.second = ''
              this.showTestCode = '发送验证码'
              clearInterval(timer)
            }
          }, 1000)
        }
      },
    }
  }
</script>
