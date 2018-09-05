<template>
  <div class="home-wrap">12121</div>
</template>

<script>
import Api from '@/constants/api.js'
const serviceApi = Api.service

export default {
  data () {
    return {
      content: []
    }
  },
  methods: {
    async getData () {
      await this.$request(serviceApi.listProduct)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
.home-wrap {
  color: #333;
  font-size: 30px;
}
</style>
