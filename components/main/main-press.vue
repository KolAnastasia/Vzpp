<template>
  <div class="mainpress">
    <div class="container">
       
      <tabs :heading="'Пресс-центр'">
        <tab name="Все" :selected="true">
           <app-press-item v-for="(item, index) in all" :key="index"
              :data="item"
            >
            </app-press-item>
        </tab>
        <tab name="Новости">
           <app-press-item v-for="(item, index) in news" :key="index"
              :data="item"
            >
            </app-press-item>
        </tab>
        <tab name="Выставки">
          <app-press-item v-for="(item, index) in shows" :key="index"
              :data="item"
            >
            </app-press-item>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import tabs from "@/components/tabs/tabs.vue";
import tab from "@/components/tabs/tab.vue";
import AppPressItem from "@/components/pressItem";

export default {
  
  components: {
    tabs,
    tab,
    AppPressItem
  },
  props: [
    'all',
    'news',
    'shows'
  ]
  
};
</script>

<style lang="sass">
  .mainpress
    .tabs 
      ul
        display: flex
        li
          margin-left: 30px
          &.is-active
            a
              color: #303030
              &:after
                width: 100%
          a
            font-family: "Open Sans";
            font-size: 1.4rem
            line-height: 24px
            color: #C4C4C4
            font-weight: bold
            position: relative
            display: inline-block
            transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
            transition: 0.3s
            &:after
              content: ""
              position: absolute
              bottom: -4px
              left: 0
              width: 0%
              height: 4px
              background-color: #2F8FFF
              transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
              transition: 0.3s


</style>