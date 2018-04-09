import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MovieList from '../pages/movieList.vue'
import MovieDetail from '../pages/movieDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movieList',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/movieDetail/:id',
      name: 'MovieDetail',
      component: MovieDetail
    },
  ]
})
