<template>
  <client-only>
  <div class="slider-wrap">
    <slick-slide
			ref="slick"
			:options="slickOptions" 
      class="slider">
      <div class="slider-item">
        <div class="slider-img">
          <img :src="getImage('mainslider-1.jpg')" alt="">
        </div>
        <div class="slider-container">
          <div class="slider-left">
            <div class="slider-title">
              Воронежский Завод Полупроводниковых Приборов
            </div>
          </div>
          <div class="slider-right">
            
            <div class="slider-content">
              <blockquote>Ведущий российский разработчик и производитель электронной компонентной базы</blockquote>
              <div class="btn btn-theme-blue btn-theme-skew">
              <nuxt-link to="/company/about">
                подробнее
                </nuxt-link>
              </div>
            </div>
           

          </div>
        </div>

        <div class="slider-scroll">
          <div class="slider-scroll_left">
            <span>
              <svg width="15" height="35" viewBox="0 0 15 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0.0737305V33.9264M7.5 33.9264L1 26.7746M7.5 33.9264L14 26.7746" stroke="#303030"/>
              </svg>
            </span>
            прокрутите вниз
          </div>
        </div>

      </div>

      <div class="slider-item">
        <div class="slider-img">
          <img :src="getImage('mainslider-1.jpg')" alt="">
        </div>
        <div class="slider-container">
          <div class="slider-left">
            <div class="slider-title">
              Воронежский Завод Полупроводниковых Приборов
            </div>
          </div>
          <div class="slider-right">
            <div class="slider-nav">

            </div>
            <div class="slider-content">
              <blockquote>Ведущий российский разработчик и производитель электронной компонентной базы</blockquote>
              <div class="btn btn-theme-blue btn-theme-skew">
                подробнее
              </div>
            </div>
            <div class="slider-dots">

            </div>

          </div>
        </div>

        <div class="slider-scroll">
          <div class="slider-scroll_left">
            <span>
              <svg width="15" height="35" viewBox="0 0 15 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0.0737305V33.9264M7.5 33.9264L1 26.7746M7.5 33.9264L14 26.7746" stroke="#303030"/>
              </svg>
            </span>
            прокрутите вниз
          </div>
        </div>

      </div>

    </slick-slide>

    <div class="slider-nav">
      <div class="slider-arrow slider-prev">
        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8L1 4.5L6 1" stroke="white"/>
        </svg>
      </div>

      <div class="slider-arrow slider-next" >
        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 4.5L1 8" stroke="white"/>
        </svg>
      </div>

    </div>
    <div class="slider-dots">

    </div>
  </div>
  </client-only>
</template>

<script >

export default {
	data() {
		return {
			slickOptions: {
				slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, // показывать `точки`
        arrows: false, // скрыть стрелки
        customPaging: function(slick, index) {
        }
      },
      methods: {
        next() {
            this.$refs.slick.next();
            console.log("NEXT")
        },
 
        prev() {
            this.$refs.slick.prev();
        },
 
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
 
        
      },
		};
	},
}
</script>

<style lang="sass" scoped>
.slider
  width: 100%
  height: calc(100vh - 99px)
  &-item
    position: relative
  &-container
    height: 100%
    width: 100%
    padding-top: 165px
    padding-bottom: 150px
    height: calc(100vh - 99px)
    display: flex
    position: relative
    z-index: 3
    padding-left: 120px
    padding-right: 90px
    max-width: 1440px
    margin: 0 auto
  &-img
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    height: calc(100vh - 99px)
    &:before
      height: calc(100vh - 99px)
      content: ""
      width: 100%
      height: 100%
      top: 0
      right: 0
      bottom: 0
      left: 0
      background-color: #060D23
      position: absolute
    img
      width: 100%
      height: 100%
      object-fit: cover
      opacity: 0.3
  &-left
    width: 50%
    height: 100%
  &-title
    color: #fff
    font-size: 40px
  &-right
    width: 50%
    height: 100%
    blockquote
      color: #fff
  &-nav
    position: absolute
    top: 200px
    right: 200px
    z-index: 3
  &-content
  &-dots
  &-scroll
    width: 100%
    position: absolute
    bottom: 0
    left: 0
    z-index: 3
    display: flex
    justify-content: flex-start
    overflow: hidden
    &_left
      width: 580px
      display: flex
      justify-content: center
      align-items: center
      padding: 26px 0
      font-family: "Open Sans"
      font-weight: bold
      font-size: 0.9rem
      letter-spacing: 0.5em
      text-transform: uppercase
      &:before, &:after
        content: ''
        transform: skew(-50deg)
        background: #fff
        top: 0
        bottom: 0
        height: 100%
        position: absolute
        z-index: -1
      &:before
        left: -70px
        width: calc(580px + 70px)
      &:after
        width: calc(100px + 40px)
        right: -80px

      span
        height: 48px
        margin-right: 38px
        border: 1px solid #000
        padding: 7px 7px 8px 7px

</style>
