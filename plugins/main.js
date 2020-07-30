import Vue from 'vue';
var moment = require('moment');

// Date format
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format('DD-MM-YYYY');
  }
})

// get file by name
Vue.mixin({
  methods: {
    getImage(fileName) {
      if (fileName != undefined)
        return require(`@/assets/${fileName}`);
    }
  }
})


// Accordion Component
Vue.component('vue-accordion', {
  template: '<div class="accordion"><slot /></div>',
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  },
  provide() {
    return { Accordion: this.Accordion }
  }
})


// Accordion Item Component
Vue.component('vue-accordion-item', {
  template: `
    <div class="accordion__item">
      <div 
        class="accordion__trigger"
        :class="{'accordion__trigger_active': visible}"
        @click="open"
        v-html="title"></div>
      <transition 
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end">
        <div class="accordion__wrapper" v-show="visible">
          <div class="accordion__content"><slot /></div>
        </div>
      </transition>
    </div>
  `,
  props: ['title'],
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
})

// $(document).ready(function () {
//   if ($(window).width() < 981) {
//     $('.inform_nav').click(function () {
//       $('.inform_nav').toggleClass('active')
//    })
//    $('.inform_nav_item').click(function (event) {
//       if(!$(event.currentTarget).parent(".inform_nav").hasClass("active")){
//          event.preventDefault();
//       }
//    })

//   }
// });