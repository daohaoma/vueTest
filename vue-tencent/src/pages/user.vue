<template>
  <div>你好</div>
</template>

<script>
  export default {
    name: 'user',
    data() {
      return{}
    },
    mounted: function() {
      this.userShow()
    },
    methods: {
      userShow: function() {
        console.log('12')
        // this.$http.get().then((response) => {})
      },
    },
  }
</script>

