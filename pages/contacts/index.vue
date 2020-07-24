<template>
  <div class="contacts">
    <app-breadcrumbs
      :names="names" :links="links" :bg="bg" :heading="heading" >
    </app-breadcrumbs>


    <div class="container contacts-container">
      <div class="sidebar-wrap">
        <nav class="sidebar">
          <ul>
            <li
              v-for="(link, index) in  sideLinks"
              :key="link"
            >
              <nuxt-link
                :to='link'
              >
                {{ sideNames[index]}} 
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content">
        <h2>Контакты</h2>
        <blockquote>
          Акционерное общество «Воронежский Завод <br/> Полупроводниковых Приборов-Сборка»
        </blockquote>
        <div class="contacts-wrap">

          <div class="contacts-item contacts-item">
            <div class="contacts-item_heading">
              <h3>Адрес</h3>
            </div>
            <div class="contacts-item_content">
              <p><b> Юридический:</b> </p>
              <p>Россия, 394007, г. Воронеж, Ленинский пр-т 119а </p>
              <p><b>Почтовый: </b></p>
              <p>Россия, 394033, г. Воронеж, Ленинский пр-т 119а</p>
            </div>
          </div>
          
          <div class="contacts-item contacts-item-phone">
            <div class="contacts-item_heading">
              <h3>Телефоны</h3>
            </div>
            <div class="contacts-item_content">
              <a href="tel:+74732267330">+7 (473) 226-73-30</a>
              <a href="tel:+74732236951">+7 (473) 223-69-51</a>
            </div>
          </div>

          <div class="contacts-item contacts-item">
            <div class="contacts-item_heading">
              <h3>Генеральный директор</h3>
            </div>
            <div class="contacts-item_content">
              <a href="tel:+74732230355">+7 (473) 223-03-55</a>
              <a href="tel:+74732266016">+7 (473) 226-60-16</a>
              <a href="mailto:ceo@vzpp-s.ru">ceo@vzpp-s.ru</a>
            </div>
          </div>
          
          <div class="contacts-item contacts-item">
            <div class="contacts-item_heading">
              <h3>Зам.ген.директора по развитию</h3>
            </div>
            <div class="contacts-item_content">
              <a href="tel:+74732265732">+7 (473) 226-57-32</a>
              <a href="tel:+74732279153">+7 (473) 227-91-53</a>
            </div>
          </div>

          <div class="contacts-item contacts-item">
            <div class="contacts-item_heading">
              <h3>Отдел маркетинга</h3>
            </div>
            <div class="contacts-item_content">
              <p> Начальник отдела, тел:  <a href="tel:+74732279527">+7 (473) 227-95-27</a> </p>
              <p> Бюро маркетинга, тел/факс: <a href="tel:+74732236951">+7 (473) 223-69-51</a> </p>
              <p>e-mail: <a href="mailto:market@vzpp-s.ru">market@vzpp-s.ru</a></p>
            </div>
          </div>

          <div class="contacts-item contacts-item">
            <div class="contacts-item_heading">
              <h3>Отдел сбыта</h3>
            </div>

            <div class="contacts-item_content">
              <p> Начальник отдела:  <a href="tel:+74732279247">+7 (473) 227-92-47</a> </p>
              <p> Договорное бюро: <a href="tel:+74732279137">+7 (473) 227-91-37</a> , 
                <a href="tel:+74732379262">+7 (473) 237-92-62 </a> (факс), 
                <a href="tel:+74732279160">+7 (473) 227-91-60 </a>
              </p>
              <p> Бюро реализации: <a href="tel:+74732279297">+7 (473) 227-92-97</a> </p>

              <p>E-mail: <a href="mailto:sales@vzpp-s.ru">sales@vzpp-s.ru</a></p>
            </div>
          </div>

          <div class="contacts-item contacts-item" style="margin-top: -80px">
            <div class="contacts-item_heading">
              <h3>Бухгалтерия</h3>
            </div>

            <div class="contacts-item_content">
              <a href="tel:+74732279186">+7 (473) 227-91-86</a>
              <a href="tel:+74732279420">+7 (473) 227-94-20</a>
             
            </div>
          </div>

        </div>

        <h3>Схема проезда</h3>

        <client-only>
          <div v-if="isMounted">
            <yandex-map :zoom="14" :coords="[51.679314, 39.254752]" class="map">
              <ymap-marker 
                markerId="123" 
                marker-type="placemark" 
                hint-content="г. Воронеж, Ленинский пр-т 119а " 
                :coords="[51.679314, 39.254752]">
              </ymap-marker>
            </yandex-map>
          </div>
        </client-only>
        

      </div> 
    </div>

  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";
import AppSideBar from "@/components/sideBar";



export default {
  components: {
    AppBreadcrumbs,
    AppSideBar
  },
  data(){
    return {
      // Breadcrumbs Params
      names : ["Главная", "Контакты"],
      links : ["/", "/contacts/"],
      bg : 'contacts-bread-bg.jpg',
      heading : "Контакты",

      // SideBar Params
      sideLinks: ['/contacts/', '/requisites/'],
      sideNames: ['Контакты', 'Реквизиты'],

      // yandexMap 
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="sass" scoped>
  .contacts
    &-container
      display: flex
      padding-bottom: 200px
      .content
        width: calc(100% - 280px)
        display: block
        padding-left: 50px
    &-wrap
      display: flex
      flex-wrap: wrap
      
      a
        color: #323A3F
        font-family: 'Open Sans'
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715);
        transition: 0.3s
        &:hover
          color: #1F7FF0

      p
        color: #323A3F
        margin-top: 0
        margin-bottom: 8px
        line-height: 1.6em

    &-item
      width: 50%
      padding-right: 40px
      margin-bottom: 25px
      a
        font-size: 1.4rem
        margin-bottom: 5px
      &_heading
      &_content
        p
          a
            display: inline-block
            margin-bottom: 0
      &-phone
        a
          font-size: 1.8rem
          margin-bottom: 10px
  .map
    height: 400px
    margin-top: 30px
</style>