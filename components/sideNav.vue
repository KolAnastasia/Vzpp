<template>
  <div class="aside-wrap">
    <button 
      class="fullscreen-off"
      v-if="fs"
      @click="fullscreenOff($el)">
      <div class="fullscreen-img">
        <img :src="getImage('fullscreen.svg')" alt="">
      </div>
    </button>
    <aside>
      <button 
        v-if="products" 
        class="fullscreen"
        @click="fullscreenOn($el)"
      >
        <div class="fullscreen-text">
          Таблица на весь экран 
        </div>
        <div class="fullscreen-img">
          <img :src="getImage('fullscreen.svg')" alt="">
        </div>
      </button>
      <nav>
        <ul>
          <accordion
            v-for="link in catalogdata"
            :key="link.id"
            :title="link.name" 
            :link="link.link" 
            :imgSrc="link.imgSide"
          >
            <ul>
              <li 
                v-for="sublink in link.subNavlist"
                :key="sublink.id"
              >
                <nuxt-link
                  :to="'/catalog/' + link.link + '/' + sublink.link"
                >
                  {{sublink.name}}
                </nuxt-link>
              </li>
            </ul>
          </accordion>
        </ul>
      </nav>
      <button 
        v-if="products"
        class="params"
      >
        Настроить параметры
      </button>
    </aside>
  </div>
</template>

<script>


import accordion from '@/components/accordion'

export default {
  props: [
    'products'
  ],
  data() {
    return {
      fs: false
    }
  },
  components: {
    accordion
  },
  computed: {
  },
  methods: {
    fullscreenOn (el) {
      let aside = el.querySelector('aside');
      el.style.width =  0
      aside.classList.toggle("active")
      this.fs = true
    },
    fullscreenOff (el) {
      let aside = el.querySelector('aside');
      el.style.width = "386px"
      aside.classList.toggle("active")
      this.fs = false
    }    
  }
}
</script>

<style lang="sass" scoped>
  .aside-wrap
    position: relative
    transition: 0.3s
  aside
    width: 334px
    border-right: 1px solid #EEEEEE
    margin-right: 52px
    position: relative
    padding-right: 15px
    transition: 0.3s
    opacity: 1
    transform: translateX(0)
    visibility: visible
    &.active
      opacity: 0
      transform: translateX(-200px)
      visibility: hidden
    >nav
      padding-top: 60px
  .fullscreen
    display: flex
    align-items: center
    background-color: #fff
    border: none
    cursor: pointer
    position: absolute
    top: 10px
    left: 0
    &-off
      position: absolute
      top: 10px
      left: -45px
      height: 20px
      background: #fff
      border: none
      cursor: pointer
    &-text
      font-family: 'Open Sans'
      font-weight: bold
      font-size: 1.1rem
      text-transform: uppercase
      margin-right: 12px
    &-img
      background: #F8F9FA
      width: 20px
      height: 20px
      display: flex
      justify-content: center
      align-items: center

  .params
    font-family: 'Open Sans'
    font-weight: bold
    font-size: 1.1rem
    text-transform: uppercase
    border: none
    cursor: pointer
    background: #F8F9FA
    border-radius: 27px
    border: 1px solid #CDD4D9
    height: 40px
    width: 100%
    margin-top: 42px


</style>