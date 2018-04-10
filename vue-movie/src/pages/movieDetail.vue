<template>
  <div class="detail-wrap">
    <!-- 1 -->
    <div class="con-theme">
      <span class="con-theme-content">NO.{{ parseInt(this.$route.query.num) + 1 }}&nbsp;&nbsp;豆瓣电影Top250</span>
    </div>

    <!-- 2 -->
    <div class="con-title">
      <span class="con-title-name">
        {{ movieDetail.title }} {{ movieDetail.original_title }}
      </span>&nbsp;&nbsp;
      <span class="con-title-year">({{ movieDetail.year }})</span>
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
        <div class="con-content-score-histogram">此处为统计图。。。</div>
      </div>
    </div>

    <!-- 4. 星星评分，代码烂的一批 -->
    <div class="con-score">
      <div>我要评分：</div>
      <div style="padding: 2px" id="nostar">
        <ul class="con-score-rating">
          <li class="one"><a href="javascript:void(0)" @mouseover ="showEvaluate(1)" @mouseout="clearEvaluate" @click="markStar(1)" >很差</a></li>
          <li class="two"><a href="javascript:void(0)" @mouseover="showEvaluate(2)" @mouseout="clearEvaluate" @click="markStar(2)" >较差</a></li>
          <li class="three"><a href="javascript:void(0)" @mouseover="showEvaluate(3)" @mouseout="clearEvaluate" @click="markStar(3)" >一般</a></li>
          <li class="four"><a href="javascript:void(0)" @mouseover="showEvaluate(4)" @mouseout="clearEvaluate" @click="markStar(4)" >较好</a></li>
          <li class="five"><a href="javascript:void(0)" @mouseover="showEvaluate(5)" @mouseout="clearEvaluate" @click="markStar(5)" >很好</a></li>
        </ul>
      </div>
      <div id="star" style="margin-left: 5px;">{{ evaluate }}</div>
      <div @click="onClear" style="margin-left: 5px; cursor: pointer;" v-show="click">
        取消
      </div>
    </div>

    <!-- 5 -->
    <div class="con-controduct"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        movieDetail: {},
        evaluate: '',
        click: false,
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
        })
        console.log(this.$route.query.num)
      },
      showEvaluate: function(val) {
        let star = document.getElementById('star')
        let nostar = document.getElementById('nostar')
        console.log(this.click, '经过')
        if (this.click === false) {
          nostar.className = '123'
        }
        if(val === 1) {
          this.evaluate = '很差'
          star.className = 'poor'
        } else if(val === 2) {
          this.evaluate = '较差'
          star.className = 'substandard'
        } else if(val === 3) {
          this.evaluate = '一般'
          star.className = 'ordinary'
        } else if(val === 4) {
          this.evaluate = '较好'
          star.className = 'good'
        } else {
          this.evaluate = '很好'
          star.className = 'perfect'
        }
      },
      clearEvaluate: function() {
        this.evaluate = ''
      },
      markStar: function(val) {
        this.click = true
        console.log(this.click, '点击')
        let star = document.getElementById('nostar')
        if(val === 1) {
          star.className = 'one-star'
        } else if(val === 2) {
          star.className = 'two-star'
        } else if(val === 3) {
          star.className = 'three-star'
        } else if(val === 4) {
          star.className = 'four-star'
        } else {
          star.className = 'five-star'
        }
      },
      onClear: function() {
        this.click = false
        console.log(this.click, '取消')
        document.getElementById('nostar').className = 'no-star'
      }
    },
  }
</script>
<style>
  @import '../assets/css/movieDetail.css';
  @import '../assets/css/filmCard.css';
</style>
