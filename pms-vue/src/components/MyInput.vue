<template>
  <div class="my-input-wrap">
    <img v-if="icon" :src="icon" class="my-input-icon">
    <input :name="name" :type="data_type" :placeholder="placeholder" class="my-input-content" id="my-input"/>
    <div v-if="showswitch == 'on'" class="testswitch">
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
      showswitch: {
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
          let inputs = document.getElementsByClassName('my-input-content')
          for(let i=0; i<inputs.length; i++) {
            let input = inputs[i]
            if(input.name === this.name) {
              input.className = 'icon-show'
            }
          }
        }
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


