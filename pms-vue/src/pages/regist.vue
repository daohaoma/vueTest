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
            <el-form-item prop="area">
              <el-input
                placeholder="所在城市/区域"
                prefix-icon="el-icon-location-outline"
                v-model="ruleForm.area"
              ></el-input>
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
              ></el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input
                placeholder="用户名"
                prefix-icon="el-icon-pms-geren"
                v-model="ruleForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" style="margin-bottom: 0">
              <el-input
                placeholder="密码"
                prefix-icon="el-icon-pms-anquansuo"
                v-model="ruleForm.password"
              ></el-input>
            </el-form-item>
            <el-form-item prop="agreeclause">
              <el-checkbox v-model="checked">同意《PMS公寓管理服务条款》</el-checkbox>
            </el-form-item>
            <el-form-item prop="registsubmit">
              <el-button type="primary" style="width: 100%">注册</el-button>
            </el-form-item>
          </el-form>
          <div class="userregist-gologin"><span style="cursor: pointer;">已有账号，去登陆-></span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  @import '../assets/css/regist.css';
  @import '../assets/icon/iconfont.css';
</style>
<script>
  export default {
    data() {
      return {
        ruleForm: {

        },
        rules: {

        },
        checked: false,
      }
    }
  }
</script>
