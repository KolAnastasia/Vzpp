<template>
  <!-- CONTENT PAGE TEMPLATE -->
  <div class="content-section">

   
    <!-- ДЕФОЛТНЫЙ ШАБЛОН -->
    <div class="content">
      <div class="content-left">
        <h2>{{h2}}</h2>
        <blockquote>{{headPhrase}}</blockquote>
        <div class="content-inner" v-html="content"></div>
        <app-vacancy :items="vacancy"></app-vacancy>
        
      </div>
      <div class="content-right">
        <div v-if="$route.params.id == 'education'">
          <div class='content-card'>
            <div class='content-card_img'><img :src='rightImage' alt=''></div>
            <div class='content-card_text'>
              <blockquote>{{rightImageDesc}}</blockquote>
            </div>
          </div>

        </div>
        <div v-else-if="$route.params.id == 'vacancy'">
          <ol>
            <li v-for="(vacancyBenefit, index) in vacancyBenefits" 
                :key="index"
            >
              <p><b>{{vacancyBenefit.head}}</b></p>
              <p>{{vacancyBenefit.description}}</p>
            </li>
          </ol>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import appContentGallery from "@/components/content-gallery";
import appContentImg from "@/components/contentRightImg";
import appVacancy from "@/components/vacancy";

if (process.browser) {
  require("@/plugins/scrollbar");
}


import Vue from "vue";

export default {
  components: {
    appContentGallery,
    appVacancy,
    appContentImg
  },
  props: ["h2", "headPhrase", "content","rightImage", "rightImageDesc", "contentRight", "contentGallery", "vacancyBenefits" , "vacancy"],
  computed: {},
  created() {}
};
</script>

<style lang="sass" >
  .content
    display: flex
    &.w100
      display: block
    &-section
      padding-left: 50px
      padding-bottom: 120px
      width: calc(100% - 284px)
    &-left
      width: 480px
    &-right
      width: calc(100% - 480px)
      padding-left: 60px
      img
        max-width: 100%
        height: auto
    &-card
      background-color: #2F8FFF
      &_img
        img
          width: 100%
          heigh: auto
          display: block
      &_text
        color: #fff
        padding: 42px 48px 22px 48px
        blockquote
          color: #fff
          margin-bottom: 20px
          &:before
            background-image: url("../assets/blockquote-icon-w.svg")
        p
          color: #fff
  .ts
    transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: 0.3s

  .history
    width: 100%
    height: 700px
    overflow-x: hidden
    overflow-y: hidden
    position: relative
    cursor:  url("../assets/scroll.png")
    &:after
      content: ""
      background: rgb(255,255,255);
      background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      width: 100%
      height: 30px
      position: absolute
      bottom: 0
      right: 0
      left: 0
    ul
      position: relative
      &:before
        content: ""
        height: fit-content
        width: 2px
        background: #C4C4C4
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
    li
      position: relative
      min-height: 145px
     
      .history-icon
        position: absolute
        top: 0
        width: 50%
        padding-right: 0px
        padding-left: 30px
        text-align: left
        margin-left: 50%
        &:after
          content: ""
          position: absolute
          top: 0
          left: -1px
          background: #C4C4C4
          width: 2px
          height: 250%
        &:before
          content: ""
          position: absolute
          top: 0
          left: -5px
          width: 10px
          height: 10px
          background: #2F8FFF
          border-radius: 50%
          z-index: 3
          
      &:nth-child(2n)
        .history-icon
          text-align: right
          padding-right: 30px
          padding-left: 0px
          margin-left: 0%
          &:after
            left: unset
            right: -1px 
          &:before
            right: -5px
            left: unset
    &-name
      font-size: 2.4rem
      margin-bottom: 10px
    &-text
      font-family: 'Open Sans'
      font-size: 1.4rem
      display: flex
      flex-direction: column
      align-items: flex-end
      img
        margin-top: 10px
        display: block
        max-width: 100%
        height: auto


</style>

