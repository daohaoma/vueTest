<template>
  <div class="content">
    <h1>TOP250电影排名</h1>
    <div class="film-card">12</div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data() {
      return{
        movieList: [],
        start: 0,
        count: 10
      }
    },
    mounted: function() {
      this.userShow()
    },
    methods: {
      userShow: function() {
        // this.$http.jsonp('https://api.douban.com/v2/movie/top250?start=this.start&count=this.count', {},{ headers: {}, emulateJSON: true }).then((response) => {
        //   console.log(response)
        //   console.log(response.data)
        //   this.movieList = response.data.subjects
        // })
        console.log('12')
      },
    },
  }
</script>

