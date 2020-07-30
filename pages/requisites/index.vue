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
        <h2>Реквизиты</h2>
        <div class="heading-wrap">
          <blockquote>
            Акционерное общество «Воронежский Завод <br/> Полупроводниковых Приборов-Сборка»
          </blockquote>
          <button class="print" @click="print()">
            Распечатать
          </button>
        </div>
        <div ref="print">
          <div class="table">
            <div class="table_row">
              <div class="table_row_name">Полное название</div>
              <div class="table_row_value">Акционерное общество «Воронежский Завод Полупроводниковых Приборов-Сборка»</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">Юридический адрес</div>
              <div class="table_row_value">Россия, 394007, г. Воронеж, Ленинский пр-т 119а</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">Фактический адрес</div>
              <div class="table_row_value">Россия, 394007, г. Воронеж, Ленинский пр-т 119а</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">Расчетный счет</div>
              <div class="table_row_value">40702810125000001849</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">Наименование банка</div>
              <div class="table_row_value">Филиал ОАО "Банк ВТБ" в г. Воронеже" г. Воронеж</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">Корреспондентский счет</div>
              <div class="table_row_value">30101810100000000835</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">БИК</div>
              <div class="table_row_value">042007835</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">ИНН</div>
              <div class="table_row_value">042007835</div>
            </div>
            <div class="table_row">
              <div class="table_row_name">КПП</div>
              <div class="table_row_value">366101001 </div>
            </div>
            <div class="table_row">
              <div class="table_row_name">ОКПО</div>
              <div class="table_row_value">22788135</div>
            </div>
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
    AppBreadcrumbs,
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

      // For yandexMap 
      isMounted: false
    }
  },
  mounted() {
    this.isMounted = true;

 
  },
  methods: {
    print() {
      function PrintElem(elem , name) {

      var mywindow = window.open('', 'PRINT', 'height=768,width=1280');

      mywindow.document.write('<html><head><title>' + document.title + '</title>');
      mywindow.document.write('</head><body >');
      mywindow.document.write('<h1>' + document.title + '</h1>');
      name != undefined ? mywindow.document.write('<h2>' + name + '</h2>'): false
      

      mywindow.document.write(elem);
      mywindow.document.write('</body></html>');

      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      mywindow.close();

      return true;
    }

      PrintElem(this.$refs.print.innerHTML,"Реквизиты" )
    }
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
        .table
          border-top: 3px solid #475057
          border-bottom: 3px solid #475057
          font-family: 'Open Sans', sans-serif
          font-size: 14px
          &_row
            display: flex
            align-items: center
            width: 100%
            border-bottom: 1px solid #EEEEEE
            &_name
              padding: 25px
              width: 100%
              max-width: 320px
              font-weight: bold
              height: 100%
            &_value
              width: 100%
              height: 100%
              padding: 25px
            &:nth-of-type(2n-1)
              background-color: #F8F9FA
              .table_row_name
                
              .table_row_value
                background-color: #EEF0F1
                
    &-wrap
      display: flex
      flex-wrap: wrap
      
      a
        color: #323A3F
        font-family: 'Open Sans'
        transition-timing-function:  cubic-bezier(0.47, 0, 0.745, 0.715)
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
  .heading-wrap
    align-items: flex-start
  
</style>