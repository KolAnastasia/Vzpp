<template>
  <nav id="pagination">
    <ul class="page-numbers" v-if="$props.data.length">
      <li  
        v-for="(num, index) in this.pageNumbers" 
        :key="index"
        v-bind:style="{ width: (100 / pageNumberCount) + '%' }"
        >
        <div v-if="num != null" >
          <nuxt-link v-if="num != $route.query.page && num != currentPage" :to="{ path: '/press-center/news', query: { page: num } }">{{ num }}</nuxt-link>
          <span v-else>{{ num }}</span>
        </div>
      </li>
    </ul>
    <ul class="page-guides" v-if="this.$props.data.length != 1">
      <li>
        <nuxt-link v-if="$route.query.page != 1 && $route.query.page" :to="{ path: '/press-center/news', query: { page: 1 }}">Первая</nuxt-link>
        <span v-else>Первая</span>
      </li>
      <li>
        <nuxt-link v-if="this.prevpage != null" :to="{ path: '/press-center/news', query: { page: this.prevpage }}">&laquo; Назад</nuxt-link>
        <span v-else>&laquo; Назад</span>
      </li>
      <li>
        <nuxt-link v-if="this.nextpage != null && $route.query.page != $props.data.length" :to="{ path: '/press-center/news', query: { page: this.nextpage }}">Вперед &raquo;</nuxt-link>
        <span v-else>Вперед &raquo;</span>
      </li>
      <li>
        <nuxt-link v-if="$route.query.page != $props.data.length" :to="{ path: '/press-center/news', query: { page: $props.data.length }}">Последняя</nuxt-link>
        <span v-else>Последняя</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["data"],
  data () {
    return {
      prevpage: null,
      nextpage: null,
      currentPage: null,
      pageNumbers: [],
      pageNumberCount: 0
    }
  },
  watch: {
    $route () {
     
    }
  },
  mounted () {
    this.setPageNumbers()
    console.log('route changed', this.$route.query)
  },
  created(){
  
  },
  methods: {
    setPages (currentPage, totalPageCount) {
      this.prevpage = currentPage > 1 ? (currentPage - 1) : null
      if (!totalPageCount) {
        this.nextpage = this.$route.query.page ? (parseInt(this.$route.query.page) + 1) : 2
      } else {
        this.nextpage = currentPage < totalPageCount ? (parseInt(currentPage) + 1) : null
      }
      for (let i = 0; i < 7; i++) {
        let _p = ((parseInt(currentPage) - 4) + i)
        if (_p > 0 && _p <= totalPageCount) {
          this.pageNumbers.push(_p)
          this.pageNumberCount++
        } else this.pageNumbers.push(null)
      }
    },
    setPageNumbers () {
      let _currentPage = this.$route.query.page ? this.$route.query.page : 1
      this.currentPage = _currentPage
      this.setPages(_currentPage, this.$props.data.length)
    }
  }
}
</script>