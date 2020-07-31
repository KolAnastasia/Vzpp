<template>
  <div class="gallery">
    <div class="gallery-item"
      v-for="(image, index) in images"
      :key="index"
      >
      <a :href="getImage(image[1])" >
        <img :src="getImage(image[0])" alt="gallery-img">
      </a>
      
    </div>
  </div>
</template>


<script>
export default {
  props: ["images"],
  created() {
  }
}
</script>

<style lang="sass" scoped>
  .gallery
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(222px, 222px))
    width: 100%
    grid-gap: 20px
    &-item
      width: 100%
      margin-right: 15px
      margin-bottom: 45px
      &:nth-child(4n)
        margin-right: 0px
      img
        width: 100%
        height: 100%
        object-fit: cover
        display: block
        position: relative
        z-index: 1
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
        transition: 0.2s
        transform-origin: center
      a
        width: 100%
        height: 330px
        display: block
        position: relative
        overflow: hidden
        &:before 
          content: ""
          width: 100%
          height: 100%
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          background-color: #000
          z-index: 0
        &:hover
          img 
            opacity: 0.8
            width: 103%


</style>