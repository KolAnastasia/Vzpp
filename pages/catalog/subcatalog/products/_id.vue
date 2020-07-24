<template>
  <!-- ПОЗИЦИЯ КАТАЛОГА -->
  <div>
    <app-breadcrumbs 
      :names="names"
      :links="links"
      :bg="bg"
      :heading="heading"
    >
    </app-breadcrumbs>
    <h1>{{$route.params}}</h1>
  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";

export default {
  components: {
    AppBreadcrumbs
  },
    
  async asyncData(context){
    let response = await context.$axios.get(`/catalogdata.json`);
    let catalogs = response.data;
 
    return {
      catalogs
    }
  },
  created() {
  
    // console.log(this.parent)
    // console.log(this.item)
  },
  computed: {
    // item() {
    //   return this.catalogs.filter(c => c.id == this.$route.params.gparendId)[0].subNavlist.filter(p => p.id == this.$route.params.parendId)[0].products.filter(i => i.id == this.$route.params.id)[0]
    // },
    gParent(){
      return this.catalogs
      .filter(c => c.id == this.$route.params.gparendId)[0]
    },
    parent(){
      let object =  this.catalogs
      .filter(c => c.id == this.$route.params.parentId)[0].subNavlist
      let _parendId = this.$route.params.parentId;
      console.log(object)
      console.log(_parendId);
      let current;
      for (const parentId in object) {
        if (object.hasOwnProperty(parentId)) {
          const element = object[parentId];
          console.log(element.parentId);
          if( element.parentId == _parendId) {
            current = element
          }
        }
      }
      console.log(current)
      return current;
    },
    names() {
      let obj = []
      obj.push("Главная","Каталог" , this.gParent.name, this.parent.name );
      return obj;
    },
    links(){
      let obj = [];
      obj.push("/","/catalog", "#", "#");
      return obj;
    },
    bg(){
      return "catalog-bread-bg.jpg"
    },
    heading(){
      return "Каталог продукции"
    }
  }

}
</script>

<style>
</style>