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
        section="company"
      >
      </app-side-bar>
      <app-content
        :h2="companyItem.name"
        :content="companyItem.content"
        :contentRight="companyItem.contentRight"
        :contentGallery="companyItem.contentGallery "
        :contentRightImgs="companyItem.contentRightImgs"
      ></app-content>
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
    const _companyList = await store.dispatch('company/fetchCompany')
    const _companyItem = await store.dispatch('company/fetchCompanyById', params.id)
    let companyList = _companyList.company
    let companyItem = _companyItem.company
    return {companyList , companyItem}
  },
  computed: {
    names() {
      let obj = ['Главная', 'Предприятие']
      let curId  = this.$route.params.id 
      this.companyList.forEach( function(item , i, arr) {
        if( item.path == curId) {
          obj.push(item.name)
        }
      })

      return obj
    },
    links(){
      let obj = ["/", '/company/about'];
      let curId  = this.$route.params.id 
      this.companyList.forEach( function(item , i, arr) {
        if( item.path == curId ) {
          obj.push('/company/' + item.path)
        }
      })
      return obj
    },
    bg(){
      return "catalog-bread-bg.jpg"
    },
    heading(){
      return "Предприятие"
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