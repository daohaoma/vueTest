<template>
  <div class="card-wrap">
    <div class="card-content" v-for='(item, index) in movieList' :key='index'>
      <div class="film-img">
        <img :src='item.images.small' :alt='item.title'>
      </div>
      <div class="film-content"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {},
    props: {
      movieList: {
        type: Array,
        default: [],
      },
    },
  }
</script>
<style>
  @import url('../assets/css/filmCard.css');
</style>

