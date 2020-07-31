<template>
  <div class="mainabout">
    <div class="container">
      <div class="mainabout_content">
          <div class="mainabout_content_img"> <img :src="getImage('mainabout.png')" alt="" /> </div>
          <div class="mainabout_content--right"> 
            <h2>завод «ВЗПП-С» </h2>
            <div class="mainabout_content_desc">
              Продукция используется более чем 1000 предприятиях России и стран ближнего зарубежья. </div>
            <div class="mainabout_content_text">
              АО «ВЗПП-С» производит компоненты и модули для комплексов и сервисов в различных отраслях промышленности, активно сотрудничает с предприятиями и организациями, поставляющими отдельные узлы и законченные электронные устройства. Основная серийно-выпускаемая продукция включает в себя более 900 различных типономиналов. 
            </div>
             <div class="btn btn-theme-blue">
              <nuxt-link to="/catalog">
                подробнее
                </nuxt-link>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="sass" scoped>
  .mainabout 
    margin: 100px 0 90px 0
    background-image: url('../../assets/mainabout-bg.svg')
    background-repeat: no-repeat
    background-size: contain
    background-position: right 150px
    &_content 
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
      &_img 
        text-align: right
        margin-right: 35px
        img 
          width: 100%
          max-width: 560px
      h2 
        position: relative
        font-size: 40px
        color: #202528
        max-width: 320px
        margin: 0 0 25px 0
        &::before
          content: ""
          position: absolute
          top: -20px
          left: 0
          background-image: url(../../assets/blockquote-icon.svg)
          background-size: cover
          background-repeat: no-repeat
          width: 25px
          height: 20px
      &_desc 
        line-height: 1.9
        color: #323A3F
        font-weight: bold
        font-family: 'Open Sans', Arial, Helvetica, sans-serif
        text-transform: none
        font-size: 14px
        margin-bottom: 10px
        padding-left: 55px
      &_text     
        line-height: 1.9
        color: #323A3F
        font-weight: normal
        font-family: 'Open Sans', Arial, Helvetica, sans-serif
        text-transform: none
        font-size: 14px
        margin-bottom: 35px
        padding-left: 55px
      .btn 
        margin-left: 55px
      

</style>