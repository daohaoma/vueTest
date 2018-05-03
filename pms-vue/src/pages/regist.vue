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
                @active-item-change="parentItemChange"
                @focus="getCityList"
                v-model="ruleForm.area"
                filterable
                :clearable="true"
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
        options: [],
        children: [],
        ruleForm: {
          phonenumber: '',
          company: '',
          contacts: '',
          testcode: '',
          password: '',
          agreeclause: [],
          area: [],
        },
        rules: {
          phonenumber: [
            { validator: checkPhoneNum, trigger: 'change' }
          ],
          company: [{ required: true, message: '请输入公寓/公司名称', trigger: 'change' }],
          area: [{ type: 'array', required: true, message: '请选择所在区域', trigger: 'change' }],
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
        cityIndex: 0,
        townIndex: 0,
        cityCode: '',
        cityName: '',
        cityId: '',
        townName: '',
        townId: '',
        citys: [],
        towns: [],
      }
    },
    mounted: function() {
      this.ready()
    },
    methods: {
      ready() {},
      registsubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {}
            params.accountName = this.ruleForm.contacts
            params.cityCode = this.cityCode
            params.companyName = this.ruleForm.company
            params.isAgree = 'on'
            params.password = this.ruleForm.password
            params.townId = this.townId
            params.validateCode = this.ruleForm.testcode
            this.citys.forEach((item, index) => {
              if(item.cityCode === this.cityCode) {
                params.cityId = item.id
                params.cityName = item.name
              }
            })
            this.towns.forEach((item, index) => {
              if(item.id === this.townId) {
                params.townName = item.name
              }
            })
            console.log(params)
            this.$http.post('/v2/register/register', params).then((res) => {
              console.log(res)
            })
          } else {
            return false
          }
        })
      },
      handleChange(value) {
        console.log(value)
        this.cityCode = value[0]
        this.townId = value[1]
      },
      parentItemChange(value) {
        this.townIndex = this.children.length
        // 获取区域
        let params = {cityCode: value[0]}
        this.$http.post('/v2/location/town/get_list', params).then((res1) => {
          let townList = res1.body.result.list
          this.towns = townList
          townList.forEach((val, i) => {
            let town = {
              label: val.name,
              value: val.id
            }
            this.children.push(town)
          })
          this.children.splice(0, this.townIndex)
        })
      },
      getCityList() {
        this.cityIndex = this.options.length
        // 获取城市
        this.$http.post('/v2/location/city/get_list', {}).then((res) => {
          let cityList = res.body.result.list
          this.citys = cityList
          cityList.forEach((item, index) => {
            let city = {
              label: item.name,
              value: item.cityCode,
              children: this.children
            }
            this.options.push(city)
          })
          this.options.splice(0, this.cityIndex)
        })
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
        let params = { phone: this.ruleForm.phonenumber, type: 1 }
        if(!this.second) {
          this.$http.post('/v2/register/get_validateCode', params).then((res) => {
          if(res.ok) {
            if(res.body.status.code === '99') {
              this.$message.error(res.body.status.msg)
            } else {
              this.$message({ message: '验证码发送成功，请注意查收！', type: 'success' })
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
            }
          } else {
            this.$message.error('验证码发送失败~')
          }
        })
        } else {
          this.$message({ message: '请稍后再次点击发送~', type: 'warning' })
        }
      },
    }
  }
</script>
