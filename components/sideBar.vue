<template>
  <div class="sidebar-wrap">
    <nav class="sidebar">
      <ul>
        <li
          v-for="(link, index) in  links"
          :key="link"
        >
          <nuxt-link
            :to='"/"+section +"/" + link'
          >
            {{ names[index]}} 
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="history-list" v-if="$route.params.id == 'history'">
      <ul>
        <li>
          <a href="#y-1957" class="current" >1957</a>
        </li>
        <li>
          <a href="#y-1959">1959</a>
        </li>
        <li>
          <a href="#y-1961">1961</a>
        </li>
        <li>
          <a href="#y-1963">1963</a>
        </li>
        <li>
          <a href="#y-1965">1965</a>
        </li>
        <li>
          <a href="#y-1967">1967</a>
        </li>
        <li>
          <a href="#y-1968">1968</a>
        </li>
        <li>
          <a href="#y-1969">1969</a>
        </li>
        <li>
          <a href="#y-1970">1970</a>
        </li>
        <li>
          <a href="#y-1974">1974</a>
        </li>
        <li>
          <a href="#y-1975">1975</a>
        </li>
        <li>
          <a href="#y-1978">1978 - 1979</a>
        </li>
        <li>
          <a href="#y-1981">1981</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["links" , "names", 'section']
 
}
</script>

<style lang="sass">
.sidebar
  width: 284px
  margin-bottom: 30px
  ul
    list-style-type: none
    border-right: 1px solid #eee
    position: sticky
    top: 20px
    li
      &:nth-last-child(1)
        a
          &:after
            display: none
      a
        padding: 0 80px
        display: flex
        justify-content: flex-start
        align-items: center
        height: 80px
        position: relative
        font-size: 1.4rem
        font-weight: bold
        font-family: "Open Sans"
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
        transition: 0.3s
        &.nuxt-link-active
          background: #F8F9FA
        &:hover
          background: #F8F9FA
          &:after
            width: 100%
            transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
            transition: 0.3s
        &:after
          content: ""
          position: absolute
          bottom: 0px
          left: 0
          width: calc(100% - 15px)
          height: 1px 
          background-color: #EEEEEE

.history-list
  width: 190px
  ul
    height: 525px
    overflow-x: hidden
    overflow-y: auto
    &::-webkit-scrollbar
      width: 4px
    &::-webkit-scrollbar-track
      background-color: #e5e5e5
    &::-webkit-scrollbar-thumb
      background-color: #C4C4C4
    li
      a
        padding-left: 84px
        display: block
        color: #C4C4C4
        font-size: 1.4rem
        margin-bottom: 16px
        position: relative
        padding-bottom: 6px
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
        transition: 0.35s
        letter-spacing: 0.05em
        &:hover 
          color: #202528
        &:before
          content: ""
          position: absolute
          bottom: 0
          left: 0
          background: #2F8FFF
          width: 0%
          height: 2px
          transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
          transition: 0.35s

        &.current
          color: #202528
          &:before
            width: 100%
        
          

    
</style>