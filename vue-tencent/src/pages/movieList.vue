<template>
  <div>
    <div class="content">
      <h1>TOP250电影排名</h1>
      <div class="film-card">
        <filmCard :movielist='this.movieList' @page='page' :total='total' :num='num'></filmCard>
      </div>
    </div>
  </div>
</template>

<script>
  import filmCard from '../components/filmCard'
  export default {
    name: 'movieList',
    data() {
      return{
        movieList: [],
        start: 0,
        count: 10,
        current: 1,
        total: 1,
        num: 1,
      }
    },
    mounted: function() {
      this.movieShow()
    },
    components: {
      filmCard
    },
    methods: {
      movieShow: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?start='+this.start+'&count='+this.count, {},
        { headers: {}, emulateJSON: true }).then((response) => {
          console.log(response)
          console.log(response.data)
          this.movieList = response.data.subjects
          this.total = Math.round(response.data.total/this.count)
          this.num = response.data.start
          // console.log( typeof Math.round(response.data.total/this.count))
        })
      },
      page: function(...data){
        this.start = (data[0] - 1)*10
        this.movieShow()
      },
    },
  }
</script>
<style>
  .content {
    width: 60%;
    height: 100%;
    margin: 0 auto;
  }
  body{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
</style>

