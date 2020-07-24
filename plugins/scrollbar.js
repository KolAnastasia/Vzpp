import NormalizeWheel from './lib/normwheel';
import { TweenLite } from 'gsap';
import $ from 'jquery'


function scrollBar() {


  let currentS = 0;
  let lastS = 0;
  let lastTime = 0;
  let liheight = 100;
  let windowHeight = $('.history').height();
  let windowWidth = $('.history').width();

  let top = (windowHeight - liheight) / 2;
  let factor = windowHeight / liheight;
  let maxScroll = $('.history').height() / 4;

  let isScrolling = false;


  function Velocity(e) {
    if (isScrolling) {
      let speed = (currentS - lastS) / (e - lastTime);

      if (speed < -5) speed = -5;
      if (speed > 5) speed = 5;
      TweenLite.to('.history li', 2, {
        skewY: -speed * 18
      });
      lastTime = e;
      lastS = currentS;
    }
    window.requestAnimationFrame(Velocity);
  }

  Velocity();

  function gotoClosest() {
    let closest = Math.round(factor * currentS / windowHeight);
    goto(closest);
  }

  function goto(n) {
    let target = document.querySelector(n).parentNode.parentNode;
    let positionY = document.querySelector(n).parentNode.parentNode.offsetTop - 120
    TweenLite.to('.history ul li', 0.5, {
      y: -positionY,
      overwrite: 1, // preexisting
      onUpdate: function () {

      },
      onComplete: function () {
        isScrolling = false;
        addCurrentItem();

      }
    });
  }

  $('.history-list li a').on('click', function (e) {
    e.preventDefault();
    goto($(this).attr("href"));
  });



  let scrollWrap = document.querySelector('.history')
  let sideWrap = document.querySelector('.history-list')
  let sideItems = document.querySelectorAll('.history-list li a')
  let items = document.querySelectorAll('.history ul li');


  function addCurrentItem() {
    items.forEach(item => {
      let currentItemId = $(item).find('.history-name').attr('id')
      if ($(item).position().top <= 120) {
        sideItems.forEach(sideitem => {
          sideitem.classList.remove('current')
          if ('#' + currentItemId == sideitem.getAttribute('href')) {
            sideitem.classList.add('current')
          }
        })
      }
    });
  }

  if (scrollWrap != undefined) {
    scrollWrap.addEventListener('wheel', function (event) {
      event.preventDefault();
      if (!isScrolling) isScrolling = true;
      let norm = NormalizeWheel(event);
      currentS += norm.spinY * 12;

      if (currentS < 0) currentS = 0;
      if (currentS > maxScroll) currentS = maxScroll;

      TweenLite.to('.history ul li', 0.5, {
        y: -currentS * factor,
        overwrite: 5, // preexisting
        onUpdate: function () {

        },
        onComplete: function () {
          //gotoClosest();
          isScrolling = false;
          addCurrentItem();
          TweenLite.to('.history li', 1, {
            skewY: 0
          });
        }
      });
    });

  }



  // document.addEventListener("DOMContentLoaded", function (event) {
  //   let scrollWrap = document.querySelector('.history')
  //   let scrollItems = document.querySelectorAll('.history li .history-name')
  //   let sideWrap = document.querySelector('.history-list')
  //   let sideItems = document.querySelectorAll('.history-list li a')

  //   scrollWrap.addEventListener('wheel', function () {
  //     scrollItems.forEach(item => {
  //       let topOffset = item.getBoundingClientRect().top
  //       let currentItemId = item.getAttribute('id')
  //       if (topOffset <= 350) {
  //         sideItems.forEach( sideitem => {
  //           sideitem.classList.remove('current')
  //           if( '#' + currentItemId == sideitem.getAttribute('href')) {
  //             sideitem.classList.add('current')
  //           }
  //         })
  //       }
  //     })
  //   });

  // });

}
$(document).ajaxSuccess(function() {
  console.log( "ready!" );
  scrollBar()
});

$(window).on('load', function() {
  scrollBar()
});