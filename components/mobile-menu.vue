<template>
 <div class="mob-menu-wr">
 <div class="mob-menu-vis" @click="closeMenu"></div>
    <div class="mob-icon-wr">
      <div class="search-btn">
        <img src="@/assets/search.svg" alt="">
      </div>
      <div class="hamburger" @click="openMenu">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <span class="bar bar4"></span>
      </div>
    </div>
        <nav class="mob-nav">
            <ul class="mob-menu">
           
              <li>
                <nuxt-link to="/company/about">Предприятие</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/catalog">Каталог</nuxt-link>
              </li>
              <li>
                <a href="/career/education">Карьера</a>
              </li>
              <li>
                <a href="/press-center/news">пресс-центр</a>
              </li>
              <li>
                  <nuxt-link to="/contacts/">Контакты</nuxt-link>
              </li>
              <li>
                <div class="header-contacts">
                  <a href="tel:+74732279247">+7 (473) 227-92-47</a>
                  <a href="mailto:sales@vzpp-s.ru" class="mail-link">sales@vzpp-s.ru</a>
                </div>
              </li>
            </ul>
          </nav>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu:function(event){
      document.querySelector(".mob-icon-wr").classList.toggle("active")
      document.querySelector(".mob-menu").classList.toggle("active")
      document.querySelector(".mob-menu-vis").classList.toggle("active")
      document.querySelector("body").classList.toggle("body--overflow")
    },
    closeMenu:function(){
      document.querySelector(".mob-menu.active").classList.remove('active')
      document.querySelector(".mob-menu-vis.active").classList.remove('active')
      document.querySelector(".mob-icon-wr.active").classList.remove('active')
      document.querySelector("body.body--overflow").classList.remove('body--overflow')
    }
  }
};
</script>

<style lang="sass" scoped>
.mob-menu-vis
  max-width: 0
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 15
  transition: .1s
.mob-menu-wr 
  display: none
  .hamburger
        width: 15px
        height: 20px
        position: relative
        z-index: 99
        .bar 
          padding: 0
          width: 16px
          height: 3px
          background-color: #000000
          display: block
          border-radius: 4px
          transition: all 0.4s ease-in-out
          position: absolute
          &1
            top: 0
          &2
            top: 8px
          &3
            top: 8px
            right: 0
          &4
            bottom: 0

  .mob-icon-wr.active
    .hamburger
      .bar1
        transform: rotate(45deg)
        transform-origin: 5%
        width: 26px
      .bar2
        transform: translateX(-40px)
        background-color: transparent
      .bar3
        transform: translateX(40px)
        background-color: transparent
      .bar4
        transform-origin: 5%
        transform: rotate(-45deg)
        width: 26px

@media (max-width: 1200px)
  .body--overflow
    overflow: hidden
  .mob-menu-vis.active
    max-width: 100%
  .mob-menu-wr 
    display: block
  .mob-icon-wr
    display: flex
    align-items: center
    .search-btn
      position: relative
      margin-right: 35px    
      transform: scale(2)
  .mob-nav
    display: block
  .mob-menu
    max-width: 0
    overflow: hidden
    display: flex
    position: fixed
    top: 0
    right: 0
    bottom: 0
    min-height: 100%
    flex-direction: column
    justify-content: space-between
    background-color: #ffffff
    z-index: 80
    padding: 70px 0
    transition: .3s 
    li a
        color: #303030
        margin: 10px 90px
    &.active
      max-width: 100%
      overflow: visible
      transition: .3s 
   
</style>