<template>
  <div class="main-section">
    <main-slider></main-slider>
    <main-about></main-about>

    <main-products :catalogs="catalogs"></main-products>
    <main-press 
      :all="all"
      :news="news"
      :shows="shows"
    ></main-press>
  </div>
</template>

<script>
import mainSlider from "@/components/main/main-slider.vue";
import mainAbout from "@/components/main/main-about.vue";
import mainProducts from "@/components/main/main-products.vue";
import mainPress from "@/components/main/main-press.vue";

export default {
  components: {
    mainSlider,
    mainAbout,
    mainProducts,
    mainPress
  },
  async asyncData(context) {
    // Получаем каталог
    let response = await context.$axios.get("/catalogdata.json");
    let catalogs = response.data;
    
    // Получаем Новости/Выставки
    let newsData = await context.$axios.$get('/news.json')

    let newsAr = newsData.find( el => el.type === "news-ar")
    let showsAr = newsData.find( el => el.type === "shows-ar")
    let allAr = [];

    // Сортировка по дате (Новые -> Старые)
    let newsSorted = newsAr.items.sort((a, b) => new Date(a.date) - new Date(b.date))
    let showSorted = showsAr.items.sort((a, b) => new Date(a.date) - new Date(b.date))

    newsSorted.forEach(element => {
      allAr.push(element)
    });

    showSorted.forEach(element => {
      allAr.push(element)
    });

    let all = allAr.sort((a, b) => new Date(a.date) - new Date(b.date))

    let news = newsSorted
    let shows = showSorted

    // Ограничение для вывода
    all.splice(4, all.length)
    news.splice(4, news.length)
    shows.splice(4, shows.length)


    return { 
      catalogs,
      all,
      news,
      shows
    }
  },
}
</script>

<style>


</style>

