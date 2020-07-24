<template>
  <header class="header">
    <div class="header-logo">
      <nuxt-link to="/">
        <img src="@/assets/logo.svg" alt />
        <div class="header-logo_text-wrap">
          <div class="header-logo_text-main">
            <b>ВЗПП-C</b>
          </div>
          <div class="header-logo_text-side">
            Воронежский Завод
            <br />Полупроводниковых
            <br />Приборов
          </div>
        </div>
      </nuxt-link>
    </div>
    <nav>
      <ul>
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
          <div class="search-btn">
            <img src="@/assets/search.svg" alt="">
          </div>
        </li>
      </ul>
    </nav>
    <div class="header-contacts">
      <a href="tel:+74732279247">+7 (473) 227-92-47</a>
      <a href="mailto:sales@vzpp-s.ru" class="mail-link">sales@vzpp-s.ru</a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.header
  padding: 33px 0
  display: flex
  justify-content: space-between
  align-items: center
  &-logo
    a
      display: flex
      align-items: center
    &_text
      &-wrap
        display: flex
        align-items: center
      &-main
        b
          font-size: 2.4rem 
          line-height: 1em
          letter-spacing: 0.15em
          opacity: 1
          font-weight: bold
          text-transform: uppercase
          margin-left: 12px
      &-side
        opacity: 0.5
        font-size: .8rem
        letter-spacing: 0.1em
        text-transform: uppercase
        font-family: "Open Sans"
        font-weight: bold
        margin-left: 8px
  &-contacts
    display: flex
    flex-direction: column
    align-items: flex-end
    a
      font-family: "Open Sans"
      font-size: 1.8rem
      line-height: 1.2em
      font-weight: 700
      text-align: right
      &:nth-child(1)
        position: relative
        &:before
          content: ""
          position: absolute
          top: 3px
          left: -16px
          background-image: url('../assets/icon-phone.svg')
          background-size: contain
          background-repeat: no-repeat
          width: 8px
          height: 16px

    .mail-link
      margin-top: 8px
      color: #999
      line-height: 1.4em
      text-transform: uppercase
      line-height: 0.1em
      font-weight: normal
      font-size: 1rem
      
nav
  ul
    display: flex
    align-items: center
  li
    margin-right: 40px
    &:nth-last-child(1)
      margin-right: 0
  a
    font-family: "Open Sans"
    font-size: 1.1rem
    text-transform: uppercase
    font-weight: bold
    letter-spacing: 0.1em
    line-height: 1.2em
    
.search-btn
  cursor: pointer


</style>