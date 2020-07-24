<template>
  <!-- CONTENT PAGE TEMPLATE -->
  <div class="content-section">

    <!-- ЕСЛИ СТРАНИЦА ИСТОРИИ  -->
    <div class="content w100" v-if="$route.params.id == 'history'">
      <h2>{{h2}}</h2>
      <div v-html="content"></div>
        <div class="history">
          <ul>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1957">1957</div>
                <div
                  class="history-text"
                >В связи с интенсивным ростом электронной промышленности, Советом Министров СССР 31 декабря 1957г. было принято решение о строительстве в Воронеже Завода полупроводниковых приборов. Заводу была поставлена главная задача - создать и освоить серийный выпуск полупроводниковых приборов - диодов и транзисторов на основе германия и кремния.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1959">1959</div>
                <div
                  class="history-text"
                >18 июня 1959 года была выпущена первая партия кремниевых сплавных высоковольтных диодов типа Д202-Д205. Эту дату принято считать днём рождения ВЗПП. Началась организация серийного производства германиевых сплавных диодов Д7.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1961">1961</div>
                <div
                  class="history-text"
                >Был разработан первый диффузионный транзистор 2Т301, а в 1963г. начался его серийный выпуск.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1963">1963</div>
                <div
                  class="history-text"
                >Начато серийное производство германиевых транзисторов П213- П215, П216-П217 и кремниевых транзисторов П302- П306А. В Воронеже были созданы первые в стране микросхемы диодно-транзисторной логики по твердотельной технологии с диэлектрической изоляцией компонентов (КСДИ) серии 104.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1965">1965</div>
                <div
                  class="history-text"
                >Было освоено производство мезопланарных кремниевых транзисторов типа КТ312.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1967">1967</div>
                <div class="history-text">
                  В 1967г. директором завода был назначен В.Г. Колесников будущий министр электронной промышленности СССР. Совместными усилиями ВЗПП и НИИ «Пульсар» был создан первый отечественный мощный СВЧ транзистор.
                  <img
                    src="../assets/h-img.jpg"
                    alt
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1968">1968</div>
                <div
                  class="history-text"
                >Получены лицензии Федерального Космического агентства на осуществление космической деятельности</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1969">1969</div>
                <div
                  class="history-text"
                >18 июня 1959 года была выпущена первая партия кремниевых сплавных высоковольтных диодов типа Д202-Д205. Эту дату принято считать днём рождения ВЗПП. Началась организация серийного производства германиевых сплавных диодов Д7.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1970">1970</div>
                <div
                  class="history-text"
                >Был разработан первый диффузионный транзистор 2Т301, а в 1963г. начался его серийный выпуск.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1974">1974</div>
                <div
                  class="history-text"
                >Начато серийное производство германиевых транзисторов П213- П215, П216-П217 и кремниевых транзисторов П302- П306А. В Воронеже были созданы первые в стране микросхемы диодно-транзисторной логики по твердотельной технологии с диэлектрической изоляцией компонентов (КСДИ) серии 104.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1975">1975</div>
                <div
                  class="history-text"
                >Было освоено производство мезопланарных кремниевых транзисторов типа КТ312.</div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1978">1978 - 1979</div>
                <div class="history-text">
                  В 1967г. директором завода был назначен В.Г. Колесников будущий министр электронной промышленности СССР. Совместными усилиями ВЗПП и НИИ «Пульсар» был создан первый отечественный мощный СВЧ транзистор.
                  <img
                    src="../assets/h-img.jpg"
                    alt
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="history-icon">
                <div class="history-name" id="y-1981">1981</div>
                <div
                  class="history-text"
                >Получены лицензии Федерального Космического агентства на осуществление космической деятельности</div>
              </div>
            </li>
          </ul>
        </div>
    </div>

    <!-- ДЕФОЛТНЫЙ ШАБЛОН -->
    <div class="content" v-else>
      <div class="content-left">
        <h2>{{h2}}</h2>
        <div v-html="content"></div>
        <app-vacancy :items="vacancy"></app-vacancy>
        
      </div>
      <div class="content-right">
        <div v-html="contentRight"></div>

        <div v-for="(contentRightImg, index) in contentRightImgs" 
            :key="index"
        >
          <app-content-img :contentImgs="contentRightImg" ></app-content-img>
        </div>

        <img :src="getImage(imgDetail)" alt />
      </div>
    </div>

    <!-- ГАЛЛЕРЕЯ ИЗОБРАЖЕНИЙ -->
    <div class="content">
      <app-content-gallery :images="contentGallery"></app-content-gallery>
    </div>
    
  </div>
</template>

<script>
import appContentGallery from "@/components/content-gallery";
import appContentImg from "@/components/contentRightImg";
import appVacancy from "@/components/vacancy";

if (process.browser) {
  require("@/plugins/scrollbar");
}


import Vue from "vue";

export default {
  components: {
    appContentGallery,
    appVacancy,
    appContentImg
  },
  props: ["h2", "content", "contentRight", "contentGallery", "imgDetail" , "vacancy", "contentRightImgs"],
  computed: {},
  created() {}
};
</script>

<style lang="sass" >
  .content
    display: flex
    &.w100
      display: block
    &-section
      padding-left: 50px
      padding-bottom: 120px
      width: calc(100% - 284px)
    &-left
      width: 480px
    &-right
      width: calc(100% - 480px)
      padding-left: 60px
      img
        max-width: 100%
        height: auto
    &-card
      background-color: #2F8FFF
      &_img
        img
          width: 100%
          heigh: auto
          display: block
      &_text
        color: #fff
        padding: 42px 48px 22px 48px
        blockquote
          color: #fff
          margin-bottom: 20px
          &:before
            background-image: url("../assets/blockquote-icon-w.svg")
        p
          color: #fff
  .ts
    transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
    transition: 0.3s

  .history
    width: 100%
    height: 700px
    overflow-x: hidden
    overflow-y: hidden
    position: relative
    cursor:  url("../assets/scroll.png")
    &:after
      content: ""
      background: rgb(255,255,255);
      background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      width: 100%
      height: 30px
      position: absolute
      bottom: 0
      right: 0
      left: 0
    ul
      position: relative
      &:before
        content: ""
        height: fit-content
        width: 2px
        background: #C4C4C4
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
    li
      position: relative
      min-height: 145px
     
      .history-icon
        position: absolute
        top: 0
        width: 50%
        padding-right: 0px
        padding-left: 30px
        text-align: left
        margin-left: 50%
        &:after
          content: ""
          position: absolute
          top: 0
          left: -1px
          background: #C4C4C4
          width: 2px
          height: 250%
        &:before
          content: ""
          position: absolute
          top: 0
          left: -5px
          width: 10px
          height: 10px
          background: #2F8FFF
          border-radius: 50%
          z-index: 3
          
      &:nth-child(2n)
        .history-icon
          text-align: right
          padding-right: 30px
          padding-left: 0px
          margin-left: 0%
          &:after
            left: unset
            right: -1px 
          &:before
            right: -5px
            left: unset
    &-name
      font-size: 2.4rem
      margin-bottom: 10px
    &-text
      font-family: 'Open Sans'
      font-size: 1.4rem
      display: flex
      flex-direction: column
      align-items: flex-end
      img
        margin-top: 10px
        display: block
        max-width: 100%
        height: auto


</style>

