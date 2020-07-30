<template>
  <div class="press-center">
    <app-breadcrumbs :names="names" :links="links" :bg="bg" :heading="heading" />
    <div class="container press-container">
      <app-side-bar
        :links="sideLinks"
        :names="sideNames"
        section="press-center"
      /> 

  
      <div class="press-wrap">
        <div class="press-list">
          <app-press-item v-for="(item, index) in pressCenterItems.items" :key="index"
            :data="item"
          >
          </app-press-item>
        </div>
        <div class="btn-more btn-news"> 
          <img class="btn-more_img" :src="getImage('more-icon.svg')" alt="" />
          показать еще
        </div>
      </div>
       
    
    </div>

     <!--app-page-nav
     :data="pressCenterItems.items"
     ></app-page-nav-->

   


  </div> 
</template>

<script>
import AppSideBar from "@/components/sideBar";
import AppBreadcrumbs from "@/components/breadcrumbs";
import AppPressItem from "@/components/pressItem";
// import AppPageNav from "@/components/pageNav";


export default {
  components: {
    AppBreadcrumbs,
    AppSideBar,
    AppPressItem,
    // AppPageNav,

  },
  async asyncData({store, params}) {
    const pressCenters = await store.dispatch('news/fetchPressCenter')
    const pressCenterItems_ = await store.dispatch('news/fetchPressCenterById', params.id)
    let pressCenter = pressCenters.news
    let pressCenterItems = pressCenterItems_.news
    return {pressCenter ,pressCenterItems}
  },
  created() {
    console.log(this.$route)
  },
  computed: {
    names() {
      let obj = ["Главная", "Пресс-центр"];
      let curId = this.$route.params.id;
      this.pressCenter.forEach(function(item, i, arr) {
        if (item.path == curId) {
          obj.push(item.name);
        }
      });
      return obj;
    },
    links() {
      let obj = ["/", "/press-center/news"];
      let curId = this.$route.params.id;
      this.pressCenter.forEach(function(item, i, arr) {
        if (item.path == curId) {
          obj.push("/press-center/" + item.path + "?page=1");
        }
      });
      return obj;
    },
    sideLinks() {
      let sideL = []
      this.pressCenter.forEach( function(item , i, arr) {
        sideL.push(item.path +  "?page=1")
      })
      return sideL
    },
    sideNames() {
      let sideN = []
      this.pressCenter.forEach( function(item , i, arr) {
        sideN.push(item.name)
      })
      return sideN
    },
    bg() {
      return "catalog-bread-bg.jpg";
    },
    heading() {
      return "Предприятие";
    }
  }
};
</script>

<style lang="sass" scoped>
  .press-center .container
    padding-bottom: 70px
  .ts
    transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: 0.3s
  .press
    &-container
      display: flex
    &-wrap
      width: calc(100% - 280px)
      padding-left: 30px
    &-list
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
      grid-gap: 15px
</style>

