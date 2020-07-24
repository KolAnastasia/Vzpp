<template>
  <div class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open"
      v-html="title"
    ></div>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__wrapper" v-show="visible">
        <div class="accordion__content" v-html="content" >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['title', 'content'],
  inject: ['Accordion'],
  data() {
    return {
      index: null
    }
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    }
  },
  created() {
    this.index = this.Accordion.count++
  }
};
</script>

<style lang="sass" scoped>

.accordion-enter-active, .accordion-leave-active
  will-change: height
  transition: height 0.3s ease
  overflow: hidden
.accordion-enter, .accordion-leave-to 
  height: 0 !important
  opacity: 0 
  
.accordion
  &__item
    margin-bottom: 30px
    box-shadow: 0px 1px 0px #EEEEEE, inset 0px 1px 0px #EEEEEE;
  &__trigger
    padding: 20px 35px
    background: #F8F9FA
    color: #303030
    cursor: pointer
    font-family: 'Open Sans'
    font-size: 1.4rem
    font-weight: bold
    position: relative
    padding-right: 70px
    height: 80px
    display: flex
    align-items: center
    user-select: none
    box-shadow: 0px 1px 0px #EEEEEE, inset 0px 1px 0px #EEEEEE;
    &:after
      content: ""
      position: absolute
      top: 30px
      right: 34px
      background: url('../assets/content-accrodion-arrow.svg')
      width: 19px
      height: 19px
    &_active
      &:after
        transform: scale(-1)
  &__content
    background: #F8F9FA
    padding: 24px 34px
  
  
</style>