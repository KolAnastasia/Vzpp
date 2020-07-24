<template>
  <div>
    <app-breadcrumbs 
      :names="names" 
      :links="links" 
      :bg="bg" 
      :heading="heading" />
    <div class="container content">
      <app-side-bar 
        :links="sideLinks" 
        :names="sideNames" 
        section="press-center"/>
     
      <app-content 
        :h2="news.name" 
        :content="news.textDetail" 
        :imgDetail="news.imgDetail"/>
      
    </div>
  </div>
</template>

<script>
import AppSideBar from "@/components/sideBar";
import AppBreadcrumbs from "@/components/breadcrumbs";
import AppContent from "@/components/content";

export default {
  components: {
    AppBreadcrumbs,
    AppSideBar,
    AppContent,
  },
  async asyncData({ store, params }) {
    const currentNews_ = await store.dispatch(
      "news/fetchPressCenter",
      params.id
    );
    let currentNews = currentNews_.news
    return { currentNews };
  },
  computed: {
    news() {
      let curId = this.$route.params.id;
      let obj;
      this.currentNews.forEach(function(item, i, arr) {
        item.items.forEach(function(el, i, arr) {
          if (el.path == curId) {
            obj = el;
          }
        });
      });
      return obj;
    },
    names() {
      let obj = ["Главная", "Пресс-центр", "Новости"];
      let curId = this.$route.params.id;
      console.log(this.news.name)
      obj.push(this.news.name);

      return obj;
    },
    links() {
      let obj = ["/", "/press-center/news/", '/press-center/news/'];
      let curId = this.$route.params.id;
       obj.push(this.news.path);
      return obj;
    },
    bg() {
      return "catalog-bread-bg.jpg";
    },
    heading() {
      return "Пресс-центр";
    },
    sideLinks() {
      let sideL = [];
      this.currentNews.forEach(function(item, i, arr) {
        sideL.push(item.path);
      });
      return sideL;
    },
    sideNames() {
      let sideN = [];
      this.currentNews.forEach(function(item, i, arr) {
        sideN.push(item.name);
      });
      return sideN;
    }
  },
  created() { console.log( this.currentNews)}
};
</script>

<style lang="sass" scoped>
  .ts
    transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: 0.3s
</style>

