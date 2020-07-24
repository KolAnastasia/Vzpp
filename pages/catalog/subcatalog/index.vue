<template>
  <!-- ПОДРАЗДЕЛ КАТАЛОГА -->
  <div>
    <app-breadcrumbs 
      :names="names"
      :links="links"
      :bg="bg"
      :heading="heading"
    >
    </app-breadcrumbs>
    <h1>{{$route.params}}</h1>
    <nuxt-link
      v-for="product in products.products"
      :key="product.id"
      :to="{
      name: 'catalog-subcatalog-products-id',
      params: {
        id: product.id, 
        parentId: products.id ,  
        gparendId: $route.params.parentId
      }}"
    >{{ product.name }}</nuxt-link>
  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";

export default {
  data() {
  return {
    id: this.$route.params.id,
    }
  },
  components: {
    AppBreadcrumbs
  },
  

  async asyncData({store, params}){
     
    // Весь каталог
    let response = await store.dispatch('catalog/fetchCatalog');
    let catalogs = response.data;
    

    return {
      catalogs
    }
  },

  created() {
 
  },
  computed: {
    products() {
      return this.catalogs
      .filter(c => c.id == this.$route.params.parentId)[0].subItems
      .filter(p => p.id == this.$route.params.id)[0]
    },
    current() {
      return this.catalogs.filter(c => c.id == this.$route.params.parentId)[0];
    },
    names() {
      let obj = []
      obj.push("Главная","Каталог" , this.current.name, this.products.name);
      return obj;
    },
    links(){
      let obj = [];
      obj.push("/","/catalog",  "#", "#");
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

<style lang="sass" scoped>
  h1
    color: #f23
</style>>
