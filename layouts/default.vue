<template>
  <div>
    <div class="container">
      <app-header/>
    </div>
    <nuxt/>
    <app-footer/>
  </div>
</template>


<script>
import appHeader from '@/components/header.vue'
import appFooter from "@/components/footer";

export default { 
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style lang="sass" >

</style>

