import Vue from 'vue';
import $ from 'jquery';
import Slick from 'vue-slick';

const SlickSlide = {
  install(Vue, options) {
    Vue.component('slick-slide', 
    Slick,
    function methods() {
      
    }
    )
  }
};

$(window).on('load', function() {
  // console.log(Slick.methods.next)
});
Vue.use(SlickSlide);
export default SlickSlide;