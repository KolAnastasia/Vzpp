<template>
  <div class="accordion"><slot /></div>
</template>

<script>
export default {
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  },
  provide() {
    return {Accordion: this.Accordion}
  }
};
</script>

<style lang="sass" scoped>
  // .tab
  //   &-elem
  //     font-family: 'Open Sans'
  //     border-bottom: 1px solid #eee
  //     &:nth-child(1)
  //       border-top: 1px solid #eee
  //   &-header
  //     a
  //       display: flex
  //       align-items: center
  //       justify-content: space-between
  //       padding: 25px 14px 14px 23px
  //       &.active
  //         background: #F8F9FA
  //         .accordion-arrow
  //           background: #fff
  //           img
  //             transform: rotate(-180deg)
  //   &-title-wrap
  //     display: flex
  //     align-items: center
  //     justify-content: space-between
  //     width: calc(100% - 60px)
  //     font-size: 1.4rem
  //     font-weight: bold
  //     strong
  //       width: calc(100% - 24px)
  //   &-img
  //     width: 40px
  //     text-align: center
  //   &-content
  //     padding: 25px 25px 30px 25px
  //     font-size: 1.4rem
  //     font-weight: bold
  //     li
  //       margin-bottom: 28px
  // .accordion-arrow
  //   width: 24px
  //   height: 24px
  //   display: flex
  //   justify-content: center
  //   align-items: center
  //   background: #F8F9FA
  //   transition: .2s
  //   img
  //     transition: .2s
</style>