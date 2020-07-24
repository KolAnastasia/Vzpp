<template>
  <nuxt-link
    class="press-item"
    :to="'/press-center/'+ data.parent + '/' + data.path"
    >
      <div class="press-img">
        <img :src="getImage(data.imgPrev)" alt="">
      </div>
      <div class="press-content ts">
        <div class="press-date">
          {{data.date | formatDate}}
        </div>
        <div class="press-name">
          {{data.name}}
        </div>
        <div class="press-title">
          {{data.textPrev}}
        </div>
      </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['data'],
  computed: {
   
  }
}
</script>

<style lang="sass" scoped>
  .press
    &-item
      margin-right: 15px
      width: calc(33.3% - 15px)
      font-family: 'Open Sans'
      &:hover
        .press-content 
          box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2)
          transform: translateY(-10px)
    &-img
      img
        max-width: 100%
        height: auto
        display: block
    &-content
      position: relative
      top: -50px
      background-color: #fff
      padding: 34px 
      width: calc(100% - 40px)
      margin: 0 auto
    &-date
      font-size: 1.2rem
      text-transform: uppercase
      margin-bottom: 20px
    &-name
      font-size: 1.4rem
      color: #323A3F
      font-weight: bold
      margin-bottom: 20px
    &-title
      font-size: 1.4rem
      color: #323A3F


</style>

