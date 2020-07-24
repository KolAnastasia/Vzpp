<template>
  <div>
     <app-breadcrumbs 
      :names="names"
      :links="links"
      :bg="bg"
      :heading="heading"
    />
    <div class="container company">
        <app-side-bar
        :links="sideLinks"
        :names="sideNames"
        section="career"
      /> 
      <app-content
        :h2="careerItems.name"
        :content="careerItems.content"
        :contentRight="careerItems.contentRight"
        :contentGallery="careerItems.contentGallery "
        :vacancy="careerItems.vacancyItems"
      />
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
    AppContent
  },
  async asyncData({store, params}) {
    const _companyList = await store.dispatch('career/fetchCareer')
    const _careerItems = await store.dispatch('career/fetchCareerById', params.id)
    let companyList = _companyList.career
    let careerItems = _careerItems.career
    return {companyList , careerItems}
  },
   computed: {
    names() {
      let obj = ['Главная', 'Карьера']
      let curId  = this.$route.params.id 
      this.companyList.forEach( function(item , i, arr) {
        if( item.path == curId) {
          obj.push(item.name)
        }
      })

      return obj
    },
    links(){
      let obj = ["/", '/career/education'];
      let curId  = this.$route.params.id 
      this.companyList.forEach( function(item , i, arr) {
        if( item.path == curId ) {
          obj.push('/career/' + item.path)
        }
      })
      return obj
    },
    bg(){
      return "catalog-bread-bg.jpg"
    },
    heading(){
      return "Карьера"
    },
    sideLinks() {
      let sideL = []
      this.companyList.forEach( function(item , i, arr) {
        sideL.push(item.path)
      })
      return sideL
    },
    sideNames() {
      let sideN = []
      this.companyList.forEach( function(item , i, arr) {
        sideN.push(item.name)
      })
      return sideN
    }
  }
}
</script>

<style lang="sass" scoped>
.company
   display: flex
   .content
     width: calc(100% - 280px)
</style>