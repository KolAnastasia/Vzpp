<template>
  <!-- РАЗДЕЛ КАТАЛОГА -->
  <div>
    <app-breadcrumbs 
      :names="names"
      :links="links"
      :bg="bg"
      :heading="heading"
    >
    </app-breadcrumbs>
    <div class="container">
      <nuxt-link
        v-for="item in subCatalogItems" 
        :key="item.id"
        :to="{name: 'catalog-subcatalog', params: {id: item.id, parentId: current.id}}"
      > 
      {{ item.name + " " +item.id + " " + current.id }}
      </nuxt-link>
    </div>
    
  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  components: {
    AppBreadcrumbs
  },
  async asyncData({store, params}){
     
     // Весь каталог
    let response = await store.dispatch('catalog/fetchCatalog');
    let catalogs = response.data;
    

    // Текущий раздел каталога
    let subcatalog = await store.dispatch('catalog/fetchCatalogById', params.id);
    let curSubCatalog = subcatalog.data;

    // Подразделы текущего раздела каталога
    let subCatalogItems = curSubCatalog.subItems
    
    return {
      catalogs,
      curSubCatalog,
      subCatalogItems

    }
  },
  created() {
    console.log(this.curSubCatalog)
  },
  computed: {
    current() {
      return this.catalogs
      .filter(c => c.id == this.$route.params.id)[0]
    },
    names() {
      let obj = []
      obj.push("Главная","Каталог" , this.current.name);
      return obj;
    },
    links() {
      let obj = [];
      obj.push("/","/catalog", "#");
      return obj;
    },
    bg() {
      return "catalog-bread-bg.jpg"
    },
    heading() { 
      return "Каталог продукции"
    }
  }
};
</script>

<style lang="sass" scoped>
h1
  color: #ff0

</style>