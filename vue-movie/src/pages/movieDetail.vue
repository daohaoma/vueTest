<template>
  <div class="detail-wrap">
    <!-- 1 -->
    <div class="con-theme">
      <span class="con-theme-content">NO.{{ this.$route.query.num+1 }}&nbsp;&nbsp;豆瓣电影Top250</span>
    </div>

    <!-- 2 -->
    <div class="con-title">
      <span class="con-title-name">{{ movieDetail.title }} {{ movieDetail.original_title }}</span>&nbsp;&nbsp;<span class="con-title-year">{{ (movieDetail.year) }}</span>
    </div>

    <!-- 3 -->
    <div class="con-content">
      <div class="con-content-img">
        <img :src='movieDetail.images.small' alt="">
      </div>
      <div class="con-content-detail">
        <div class="con-content-detail-director gray">
          导演：<span v-for="(val, i) in movieDetail.directors" :key="i">{{ i===0 ? '' : '/' }} {{ val.name }}</span>
        </div>
        <div class="con-content-detail-stars gray">
          主演：<span v-for="(val, i) in movieDetail.casts" :key="i+1">{{ i===0 ? '' : '/' }} {{ val.name }}</span>
        </div>
        <div class="con-content-detail-type gray">
          类型：<span v-for="(val, i) in movieDetail.genres" :key="i+2">{{ i===0 ? '' : '/' }} {{ val }}</span>
        </div>
        <div class="con-content-detail-area gray">
          制片国家/地区：<span v-for="(val, i) in movieDetail.countries" :key="i+3">{{ i===0 ? '' : '/' }} {{ val }}</span>
        </div>
        <!-- <div class="con-content-detail-language gray" v-for="(val, i) in movieDetail.directors" :key="i">
          语言：
        </div>
        <div class="con-content-detail-date gray" v-for="(val, i) in movieDetail.directors" :key="i">
          上映日期：
        </div>
        <div class="con-content-detail-long gray">片长：</div> -->
        <div class="con-content-detail-othername gray">
          又名：<span v-for="(val, i) in movieDetail.aka" :key="i+4">{{ i===0 ? '' : '/' }} {{ val }}</span>
        </div>
      </div>
      <div class="con-content-score">
        <div class="con-content-score-title gray">豆瓣评分</div>
        <div class="con-content-score-star">
          <div class="con-content-score-star-branch">{{ movieDetail.rating.average }}</div>
          <div class="con-content-score-star-evaluate">
            <div class="con-content-score-star-evaluate-stars">
              <div
                :class="{'half': parseInt(movieDetail.rating.stars) === 5,
                        'none': parseInt(movieDetail.rating.stars) < 5,
                        'whole': parseInt(movieDetail.rating.stars) > 10
                }"></div>
              <div
                :class="{'half': parseInt(movieDetail.rating.stars) === 15,
                        'none': parseInt(movieDetail.rating.stars) < 15,
                        'whole': parseInt(movieDetail.rating.stars) > 20
                }"></div>
              <div
                :class="{'half': parseInt(movieDetail.rating.stars) === 25,
                        'none': parseInt(movieDetail.rating.stars) < 25,
                        'whole': parseInt(movieDetail.rating.stars) > 30
                }"></div>
              <div
                :class="{'half': parseInt(movieDetail.rating.stars) === 35,
                        'none': parseInt(movieDetail.rating.stars) < 35,
                        'whole': parseInt(movieDetail.rating.stars) > 40
                }"></div>
              <div
                :class="{'half': parseInt(movieDetail.rating.stars) === 45,
                        'none': parseInt(movieDetail.rating.stars) < 45,
                        'whole': parseInt(movieDetail.rating.stars) === 50
                }"></div>
              </div>
            <div class="con-content-score-star-evaluate-num gray">{{ movieDetail.ratings_count }}人评价过</div>
          </div>
        </div>
        <div class="con-content-score-histogram"></div>
      </div>
    </div>

    <!-- 4 -->
    <div class="con-score"></div>

    <!-- 5 -->
    <div class="con-controduct"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        movieDetail: {},
      }
    },
    mounted: function() {
      // 1292052
      this.getFilmDetail()
    },
    methods: {
      getFilmDetail: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id, {},
        { headers: {}, emulateJSON: true }).then((res) => {
          console.log(res.data)
          this.movieDetail = res.data
          console.log(this.$route)
        })
      }
    },
  }
</script>
<style>
  @import '../assets/css/movieDetail.css';
  @import '../assets/css/filmCard.css';
</style>
