<template>
  <div class="faq">
    <app-breadcrumbs :names="names" :links="links" :bg="bg" :heading="heading"></app-breadcrumbs>

    <div class="container faq-container">
      <div class="sidebar-wrap">
        <nav class="sidebar">
          <ul>
            <li v-for="(link, index) in  sideLinks" :key="link">
              <nuxt-link :to="link">{{ sideNames[index]}}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content">
        <div class="content-left">
          <h2>FAQ</h2>
          <blockquote>Здесь Вы можете найти ответы на частозадаваемые вопросы, а так же задать свой вопрос</blockquote>

          <vue-accordion>
            <vue-accordion-item
              :title="item.name"
              v-for="(item, index) in acItems"
              :key="index"
              :content="item.content"
            ></vue-accordion-item>
          </vue-accordion>
        </div>

        <div class="content-right">
          <form class="form"
            ref="form"
            action="/feedback.json" 
            @submit.prevent="checkForm">
            <div class="form-input">
              <input name="name" v-model="name" type="text" placeholder="ФИО" />
              <div class="danger" v-if="errors.name != null">
                {{errors.name}}
              </div>
            </div>
            <div class="form-input">
              <input name="phone" v-model="phone" type="text" placeholder="Телефон" />
               <div class="danger" v-if="errors.phone != null">
                {{errors.phone}}
              </div>
            </div>
            <div class="form-input">
              <input name="mail" v-model="mail" type="text" placeholder="E-mail" />
              <div class="danger" v-if="errors.mail != null">
                {{errors.mail}}
              </div>
            </div>
            <div class="form-input form-textarea">
              <textarea name="question"  v-model="question" placeholder="Вопрос"></textarea>
            </div>
            <div class="form-submit-wrap">
              <div class="form-submit">
                <button class="btn btn-theme-blue" :disabled="policy ? false : true" >Отправить</button>
              </div>
              <div class="form-policy">
                <label>
                  <input type="checkbox" v-model="policy" 
                  true-value="true"
                  false-value="" />
                  <span></span>
                </label>
                <div class="form-policy-text">
                  Я согласен с
                  <a href="/politika-konfidentsialnosti/">
                    политикой обработки
                    <br />персональных данных
                  </a>
                </div>
              </div>
            </div>



          </form>
        
        </div>
      </div>
    </div>

    <stack-modal
      v-if="response"
      :show="show"
      :title="response.title"
      @close="show=false"
      :modal-class="{ [modalClass]: true }"
    >
      {{response.text}}

      <div slot="modal-footer"></div>

    </stack-modal>
   
  </div>
</template>

<script>
import AppBreadcrumbs from "@/components/breadcrumbs";
import vueAccordion from "@/components/accordion";
import vueAccordionItem from "@/components/accordion-item";

import axios from "axios"
import StackModal from '@innologica/vue-stackable-modal'


export default {
  components: {
    AppBreadcrumbs,
    vueAccordion,
    vueAccordionItem,
    StackModal
  },
  data() {
    return {
      // Breadcrumbs Params
      names: ["Главная", "Информация", "FAQ"],
      links: ["/", "/info/faq/", "/info/faq/"],
      bg: "info-bread-bg.jpg",
      heading: "Контакты",

      // SideBar Params
      sideLinks: ["/info/revelation/", "/info/faq"],
      sideNames: ["Раскрытие", "FAQ"],

      // Accordion Ar
      acItems: [
        {
          name:
            "Курс на социально-ориентированный национальный проект требует от нас анализа направлений прогрессивного развития?",
          content:
            "<p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу специалистов участие в формировании форм воздействия? Разнообразный и богатый опыт начало повседневной работы по формированию позиции напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развитая системы массового участия? Таким образом, выбранный нами инновационный путь в значительной степени обуславливает создание существующих финансовых и административных условий.</p>"
        },
        {
          name:
            "Выбранный нами инновационный путь требует от нас анализа дальнейших направлений развития проекта?",
          content:
            "<p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу специалистов участие в формировании форм воздействия? Разнообразный и богатый опыт начало повседневной работы по формированию позиции напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развитая системы массового участия? Таким образом, выбранный нами инновационный путь в значительной степени обуславливает создание существующих финансовых и административных условий.</p>"
        },
        {
          name:
            "Задача организации создаёт предпосылки новых шагов для системыизменения ряда параметров?",
          content:
            "<p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу специалистов участие в формировании форм воздействия? Разнообразный и богатый опыт начало повседневной работы по формированию позиции напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развитая системы массового участия? Таким образом, выбранный нами инновационный путь в значительной степени обуславливает создание существующих финансовых и административных условий.</p>"
        }
      ],

      isMounted: false,

      // Form 
      errors: {
        name : null,
        phone : null,
        mail : null,
      },
      name: null,
      phone: null,
      mail: null,
      question: null,
      response: null,
      policy: null,

      // Modal
      show: true,
      modalClass: 'modal-border-0'

  
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    checkForm: function(e) {
      
      if (this.name && this.phone && this.mail) {
        this.submit()
      }

      this.errors = [];

      if (!this.name) {
        this.errors.name = 'Требуется указать имя.';
      }
      if (!this.phone) {
        this.errors.phone = 'Требуется указать телефон.';
      }
      if (!this.mail) {
        this.errors.mail = 'Требуется указать E-mail.';
      } 
      e.preventDefault();
     
      
    },
    submit: function(){
      // axios.post('/submit', this.fields).then(response => {
      axios.get('/feedback.json').then(response => {
        this.response = response.data
        this.show = true

        this.name = null
        this.phone = null
        this.mail = null
        this.question = null

      }).catch(error => {
        if (error.response.status ) {
          this.errors = error.response.data.errors || {};
        }
      });
    }
  }
};
</script>


<style>
  /* @import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"; */
</style>

<style lang="sass" scoped>
.faq
  &-container
    display: flex
    padding-bottom: 200px
    .content
      width: calc(100% - 280px)
      &-left
      &-right
        .form
          position: sticky
          top: 70px
 
</style>

