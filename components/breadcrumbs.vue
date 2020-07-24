<template>
  <div class="breadcrumbs breadcrumbs-section" :style="{ 'background-image': 'url(' + getImage(bg) + ')' }">
    <div class="container">
      <nav>
        <ul>
          <li
            v-for="(link, index) in links"
            :key="index"
          >
            <nuxt-link
              :to="link"
            >
              <div>
                {{ names[index] }}
              </div>
            </nuxt-link>
          </li>
            
        </ul>
      </nav>
      <div class="breadcrumbs-heading-wrap">
        <h1 class="breadcrumbs-heading">{{heading}}</h1>
        <button>
          <div class="btn-content">
            <img :src="getImage('compare-icon.svg')" alt=""> Сравнение 
          </div>
          <span>2</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'names',
    'links',
    'bg',
    "heading"
  ], 

}
</script>

<style lang="sass" scoped>
.breadcrumbs
  padding: 40px 0
  margin-bottom: 70px
  &-section
    color: #fff
    background-size: cover
    a
      color: #fff
  &-heading
    font-size: 4rem
    &-wrap
      display: flex
      justify-content: space-between
      align-items: center
      button
        border: none
        height: 32px
        color: #fff
        font-size: 1rem
        font-weight: bold
        text-transform: uppercase
        letter-spacing: 0.03em
        padding: 0 20px
        position: relative
        background: transparent
        cursor: pointer
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
        transition: 0.3s
        &:hover
          box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.35);
          &:before
            background: #2d80e2
          span
            right: -3px
            top: -3px
        &:before
          content: ""
          background: #2F8FFF
          width: 100%
          height: 100%
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          clip-path: polygon(calc(100% - 15px) 0, calc(100% - 15px) 15px, 100% 15px, 100% 100%, 0 100%, 0 0);
          z-index: 1
          transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
          transition: 0.3s
        span
          transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
          transition: 0.3s
          position: absolute
          top: -5px
          right: -5px
          width: 15px
          height: 15px
          display: flex
          justify-content: center
          align-items: center
          background: #FF5E25
        .btn-content
          position: relative
          z-index: 3
  nav
    margin-bottom: 10px
    ul
      display: flex
      li
        margin-right: 10px
        position: relative
        display: flex
        align-items: center
        &:after
          content: '>'
          display: inline-block
          margin-left: 8px
          font-family: 'Open Sans'
        &:nth-last-child(1)
          &:after
            content: unset
        a
          border-bottom: 1px solid #fff
          font-size: 1.2rem
          font-family: 'Open Sans'
          text-transform: none
          font-weight: normal
          &:hover
            border-color: transparent

</style>