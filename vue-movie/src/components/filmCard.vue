<template>
  <div class="card-wrap">
    <div class="card-content" v-for='(item, index) in movielist' :key='index'>
      <div class="film-num">{{ num+index+1 }}</div>
      <div class="film-img" style="width: 150px; height: 200px">
        <img :src='item.images.small' :alt='item.title' style="width: 100%; height: 200px">
      </div>
      <div class="film-content">
        <div class="film-name">
          <a href="javascript:" style="text-decoration : none; color: #9933FF" @click="goToDetail(item.id, index)">
            {{ item.title }}&nbsp;/&nbsp;{{ item.original_title }}
          </a>
        </div>
        <div class="film-performer">
          导演:
          <span v-for='(names, i) in item.directors' :key="i+1">{{ names.name }}</span>
          &nbsp;&nbsp;&nbsp;
          主演:
          <span v-for='(stars, i) in item.casts' :key="i+2">
            {{ i===0 ? '' : '/' }}&nbsp;{{ stars.name }}</span>
        </div>
        <div class="film-introduction">
          <span>{{ item.year }}</span>&nbsp;/&nbsp;
          <span v-for='(pro, i) in item.genres' :key="i">{{ pro }}&nbsp;</span>
        </div>
        <div class="film-score">
          <div class="film-score-stars">
            <div
              :class="{'half': parseInt(item.rating.stars) === 5,
                       'none': parseInt(item.rating.stars) < 5,
                       'whole': parseInt(item.rating.stars) > 10
              }"></div>
            <div
              :class="{'half': parseInt(item.rating.stars) === 15,
                       'none': parseInt(item.rating.stars) < 15,
                       'whole': parseInt(item.rating.stars) > 20
              }"></div>
            <div
              :class="{'half': parseInt(item.rating.stars) === 25,
                       'none': parseInt(item.rating.stars) < 25,
                       'whole': parseInt(item.rating.stars) > 30
              }"></div>
            <div
              :class="{'half': parseInt(item.rating.stars) === 35,
                       'none': parseInt(item.rating.stars) < 35,
                       'whole': parseInt(item.rating.stars) > 40
              }"></div>
            <div
              :class="{'half': parseInt(item.rating.stars) === 45,
                       'none': parseInt(item.rating.stars) < 45,
                       'whole': parseInt(item.rating.stars) === 50
              }"></div>
          </div>
          <div class="film-score-fraction">{{ item.rating.average }}</div>
          <div class="film-score-num"><span>{{ item.collect_count }}人评价过</span></div>
        </div>
      </div>
    </div>
    <div class="paging-device">
      <div class="prev" @click="goPrev">上一页</div>
      <div class="current">第{{ current }}页，共{{ total }}页</div>
      <div class="next" @click="goNext">下一页</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        current: 1,
      }
    },
    props: {
      movielist: {
        type: Array,
        default: [],
      },
      total: {
        type: Number,
        default: 0,
      },
      num: {
        type: Number,
        default: 1,
      }
    },
    // mounted: function() {
    // },
    methods: {
      goPrev: function() {
        this.current--
        if(this.current < 2) {
          this.current = 1
        }
        this.$emit('page', this.current) // 子组件向父组件传值
      },
      goNext: function() {
        this.current++
        this.$emit('page', this.current)
      },
      goToDetail: function(id, index) {
        console.log(id,index)
        this.$router.push({path:`/movieDetail/${id}`, query: {num: index+(this.current-1)*10}})
      }
    }
  }
</script>
<style>
  @import '../assets/css/filmCard.css';
</style>

