<template>
  <!-- КАТАЛОГ -->
  <div>
    <app-breadcrumbs 
      :names="names"
      :links="links"
      :bg="bg"
      :heading="heading"
    >
    </app-breadcrumbs>
    <section class="container catalog-l2-section">
      <div class="catalog-list">
        <nuxt-link
          v-for="catalog in catalogs"
          :key="catalog.id"
          :to="{name: 'catalog-id', params: {id: catalog.id }}"
        >
          <img :src="getImage(catalog.imgSrc)" alt />
          <div class="catalog-list_name">{{ catalog.name }}</div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";

export default {
  components: {
    AppBreadcrumbs
  },
  async asyncData({store, params}) {
    let response = await store.dispatch('catalog/fetchCatalog')// context.$axios.get("/catalogdata.json");
    let catalogs = response.data;
    return {
      catalogs
    };
  },

  created() {
  },
  computed: {
    names() {
      let obj = []
      obj.push("Главная","Каталог");
      return obj;
    },
    links(){
      let obj = [];
      obj.push("/","/catalog");
      return obj;
    },
    bg(){
      return "catalog-bread-bg.jpg"
    },
    heading(){
      return "Каталог продукции"
    }
  }
};
</script>

<style lang="sass">
  .catalog
    &-l2-section
      display: flex
      margin-bottom: 120px
  .catalog-list 
    display: flex
    flex-wrap: wrap
    a
      width: calc(25% - 12px)
      height: 282px
      margin-right: 16px
      margin-bottom: 16px
      display: flex
      justify-content: center
      align-items: center
      background: #fff
      flex-direction: column
      border: 1px solid #F0F3F5;
      box-shadow: 0px 11px 10px rgba(231, 236, 239, 0.66);
      position: relative
      &:nth-child(4n)
        margin-right: 0
      &:before, &:after
        content: ''
        // transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715)
        // transition: .25s
        position: absolute
      &:before
        top: 77px
        left: 20px
        right: 20px
        background: #02328F
        width: calc(100% - 40px)
        height: 76%
        opacity: 0
        filter: blur(12px)
        z-index: -1
      &:after
        top: 0
        right: 0
        bottom: 0
        left: 0
        width: 100%
        height: 100%
        display: block
        background-image: linear-gradient(to bottom, #c7e1ff, #d1e6ff, #dbecff, #e4f1ff, #eef6ff);
        z-index: 1
        opacity: 0
      &:hover
        &:after
          opacity: 1
        &:before
          opacity: 0.35
          z-index: 1
        img
          transform: translateY(-8px)
      img
        z-index: 3
        transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715)
        transition: .25s
    &_name
      z-index: 3
      color: #3C4452
      font-size: 1.4rem
      text-align: center
      width: 100%
      padding: 0  40px
</style>