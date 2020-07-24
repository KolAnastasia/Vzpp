<template>
  <div class="rev">
    <app-breadcrumbs :names="names" :links="links" :bg="bg" :heading="heading"></app-breadcrumbs>

    <div class="container rev-container">
      <div class="sidebar-wrap">
        <nav class="sidebar">
          <ul>
            <li v-for="(link, index) in  sideLinks" :key="link">
              <nuxt-link :to="link">{{sideNames[index]}}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content">
        <h2>Раскрытие</h2>
        <blockquote>
          Наше предприятие приглашает на работу
          <br />профессиональных работников
        </blockquote>

        <div class="files-wrap">
          <div class="files-item" v-for=" (file, index) in files.names" :key="index">
            <a :href="files.links[index]" target="_blank">
              <div class="files-item_left">{{file}}</div>
              <div class="files-item_right">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 15V3.07027L2.99633 1H12V15H1Z" stroke="#2F8FFF" stroke-width="2" />
                  <rect x="4" y="7" width="5" height="2" fill="#2F8FFF" />
                  <rect x="4" y="10" width="5" height="2" fill="#2F8FFF" />
                  <rect x="4" y="4" width="5" height="2" fill="#2F8FFF" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";

export default {
  components: {
    AppBreadcrumbs
  },
  data() {
    return {
      // Breadcrumbs Params
      names: ["Главная", "Информация", "Раскрытие"],
      links: ["/", "/info/revelation/", "/info/revelation/"],
      bg: "info-bread-bg.jpg",
      heading: "Контакты",

      // SideBar Params
      sideLinks: ["/info/revelation/", "/info/faq"],
      sideNames: ["Раскрытие", "FAQ"],

      isMounted: false,

      // files Array
      files: {
        names: [
          'Временное положение о закупке оборудования АО "ВЗПП-С"',
          'Ведение реестра акционеров АО "ВЗПП-С" осуществляет ОАО "Регистратор Р.О.С.Т."',
          'Временное положение о закупке оборудования АО "ВЗПП-С"',
          'Ведение реестра акционеров АО "ВЗПП-С" осуществляет ОАО "Регистратор Р.О.С.Т."',
          'Временное положение о закупке оборудования АО "ВЗПП-С"',
          'Ведение реестра акционеров АО "ВЗПП-С" осуществляет ОАО "Регистратор Р.О.С.Т."',
          'Информация о регулируемом виде деятельности в сфере электроснабжения'
        ],
        links: [
          "/download/1", 
          "/download/2",
          "/download/1", 
          "/download/2",
          "/download/1", 
          "/download/2",
          "/download/3"
        ]
      }
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="sass" scoped>
  .rev-container
    display: flex
    padding-bottom: 200px
    .content
      width: calc(100% - 280px)
      display: block

  .files
    &-wrap
      border-top: 3px solid #323A3F
      border-bottom: 3px solid #323A3F
    &-item
      a
        font-family: 'Open Sans'
        font-weight: normal
        font-size: 1.4rem
        color: #202528
        display: flex
        min-height: 64px
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
        transition: 0.3s
        &:hover
          background-color: #DDE2E6
      &_left
        width: calc(100% - 60px)
        display: flex
        align-items: center
        padding: 5px 20px
      &_right
        padding: 5px 20px
        width: 60px
        display: flex
        justify-content: center
        align-items: center
        border-left: 1px solid #DDE2E6

</style>