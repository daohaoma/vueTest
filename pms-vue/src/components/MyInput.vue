<template>
  <div class="my-input-wrap">
    <img v-if="icon" :src="icon" class="my-input-icon">
    <input :name="name" :type="data_type" :placeholder="placeholder" class="my-input-content" id="my-input"/>
    <div v-if="pass_switch" class="testswitch">
      <input class="testswitch-checkbox" id="onoffswitch" type="checkbox" @click="turnSwitch">
      <label class="testswitch-label" for="onoffswitch">
          <span class="testswitch-inner" data-on="ON" data-off="OFF"></span>
          <span class="testswitch-switch"></span>
      </label>
    </div>
    <slot></slot>
  </div>
</template>
<style>
  @import '../assets/css/myInput.css';
</style>
<script>
  export default {
    data() {
      return {
        data_type: this.type === 'password' ? 'password' : this.type === 'number' ? 'number' : 'text',
        showPassword: false,
      }
    },
    props: {
      icon: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      required: {
        type: String,
        default: '',
      },
      pass_switch: {
        type: String,
        default: '',
      },
    },
    mounted: function() {
      this.ready()
    },
    methods: {
      ready: function() {
        if(this.icon) {
          document.getElementById('my-input').className = 'icon-show'
        }
        console.log(this.pass_switch)
      },
      turnSwitch: function() {
        this.showPassword = !this.showPassword
        if(!this.showPassword) {
          this.data_type = 'password'
        } else {
          this.data_type= 'text'
        }
        // console.log(this.showPassword)
        // console.log(this.data_type)
      }
    }
  }
</script>


