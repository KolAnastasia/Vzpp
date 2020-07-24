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
          <table>
            <tr>
              <td>Полное название</td>
              <td>Акционерное общество «Воронежский Завод Полупроводниковых Приборов-Сборка»</td>
            </tr>
            <tr>
              <td>Юридический адрес</td>
              <td>Россия, 394007, г. Воронеж, Ленинский пр-т 119а</td>
            </tr>
            <tr>
              <td>Фактический адрес</td>
              <td>Россия, 394007, г. Воронеж, Ленинский пр-т 119а</td>
            </tr>
            <tr>
              <td>Расчетный счет</td>
              <td>40702810125000001849</td>
            </tr>
            <tr>
              <td>Наименование банка</td>
              <td>Филиал ОАО "Банк ВТБ" в г. Воронеже" г. Воронеж</td>
            </tr>
            <tr>
              <td>Корреспондентский счет</td>
              <td>30101810100000000835</td>
            </tr>
            <tr>
              <td>БИК</td>
              <td>042007835</td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td>042007835</td>
            </tr>
            <tr>
              <td>КПП</td>
              <td>366101001 </td>
            </tr>
            <tr>
              <td>ОКПО</td>
              <td>22788135</td>
            </tr>
          </table>
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