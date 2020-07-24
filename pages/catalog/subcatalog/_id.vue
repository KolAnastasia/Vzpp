<template>
  <div>
    <h1>Список позиций</h1>
    
    <!-- <nuxt-link
      v-for="catalog in catalogs"
      :key="catalog.id"
      :to="{name: 'catalog-id', params: {id: catalog.id}}"
    >{{ catalog.name }}</nuxt-link> -->

  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //       catalogs: [
  //         {
  //           id: 1,
  //           name: "Интегральные микросхемы",
  //           link: "Integrated-circuits",
  //           imgSrc: "catalog-item-1.png",
  //           imgSide: "side-nav-1.svg",
  //           arPath: {
  //             name: ["Главная", "Интегральные микросхемы"],
  //             link: ["/", "/Integrated-circuits"]
  //           },
  //           subNavlist: [
  //             {
  //               id: 1,
  //               name: "Программируемые логические интегральные схемы",
  //               link: "Programmable logic integrated circuits",
  //               arPath: {
  //                 name: ["Главная", "Интегральные микросхемы"],
  //                 link: ["/", "/Integrated-circuits"]
  //               },
  //               code: "/07",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 2,
  //               name: "Интегральные схемы",
  //               link: "Integrated-circuits",
  //               code: "/23",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 3,
  //               name: "Отладочные платы",
  //               link: "Debug boards",
  //               code: "/08",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           id: 2,
  //           name: "Транзисторы",
  //           link: "Transistors",
  //           imgSrc: "catalog-item-2.png",
  //           imgSide: "side-nav-2.svg",
  //           subNavlist: [
  //             {
  //               id: 1,
  //               name: "Программируемые логические интегральные схемы",
  //               link: "Programmable logic integrated circuits",
  //               code: "/07",
  //               arPath: {
  //                 name: ["Главная", "Интегральные микросхемы"],
  //                 link: ["/", "/Integrated-circuits"]
  //               },
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 2,
  //               name: "Интегральные схемы",
  //               link: "Integrated-circuits",
  //               code: "/23",
  //               arPath: {
  //                 name: ["Главная", "Интегральные микросхемы"],
  //                 link: ["/", "/Integrated-circuits"]
  //               },
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 3,
  //               name: "Отладочные платы",
  //               link: "Debug boards",
  //               code: "/05",
  //               arPath: {
  //                 name: ["Главная", "Интегральные микросхемы"],
  //                 link: ["/", "/Integrated-circuits"]
  //               },
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           id: 3,
  //           name: "Диоды",
  //           link: "Diodes",
  //           imgSrc: "catalog-item-3.png",
  //           imgSide: "side-nav-3.svg",
  //           subNavlist: [
  //             {
  //               id: 1,
  //               name: "Программируемые логические интегральные схемы",
  //               link: "Programmable logic integrated circuits",
  //               code: "/02",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 2,
  //               name: "Интегральные схемы",
  //               link: "Integrated-circuits",
  //               code: "/13",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 3,
  //               name: "Отладочные платы",
  //               link: "Debug boards",
  //               code: "/05",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           id: 4,
  //           name: "Силовые блоки",
  //           link: "Power blocks",
  //           imgSrc: "catalog-item-4.png",
  //           imgSide: "side-nav-4.svg",
  //           subNavlist: [
  //             {
  //               id: 1,
  //               name: "Программируемые логические интегральные схемы",
  //               link: "Programmable logic integrated circuits",
  //               code: "/05",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 2,
  //               name: "Интегральные схемы",
  //               link: "Integrated-circuits",
  //               code: "/23",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 3,
  //               name: "Отладочные платы",
  //               link: "Debug boards",
  //               code: "/05",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           id: 5,
  //           name: "Автомобильная электроника",
  //           link: "Car electronics",
  //           imgSrc: "catalog-item-5.png",
  //           imgSide: "side-nav-5.svg",
  //           subNavlist: [
  //             {
  //               id: 1,
  //               name: "Программируемые логические интегральные схемы",
  //               link: "Programmable logic integrated circuits",
  //               code: "/07",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 2,
  //               name: "Интегральные схемы",
  //               link: "Integrated-circuits",
  //               code: "/23",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 3,
  //               name: "Отладочные платы",
  //               link: "Debug boards",
  //               code: "/05",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           id: 6,
  //           name: "Другая продукция",
  //           link: "Other products",
  //           imgSrc: "catalog-item-6.png",
  //           imgSide: "side-nav-6.svg",
  //           subNavlist: [
  //             {
  //               id: 1,
  //               name: "Программируемые логические интегральные схемы",
  //               link: "Programmable logic integrated circuits",
  //               code: "/07",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 2,
  //               name: "Интегральные схемы",
  //               link: "Integrated-circuits",
  //               code: "/23",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             },
  //             {
  //               id: 3,
  //               name: "Отладочные платы",
  //               link: "Debug boards",
  //               code: "/05",
  //               products: [
  //                 {
  //                   id: 1,
  //                   name: "ПЛИС 5576ХС1Т",
  //                   body: "КТ-28-1",
  //                   analog: "VC7812",
  //                   uExit: "12±0,48",
  //                   Ki: [
  //                     {
  //                       "1.0 A": "1,5",
  //                       "1.5 A": "-",
  //                       "2.0 A": "1,5"
  //                     }
  //                   ],
  //                   ty: "АДБК.432120.384ТУ",
  //                   datasheet: "urltofile"
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  // },
  // created() {
  //   // console.log(this.$route.params.id);
  //   console.log(this.$route.params);
  // },
  // computed: {
  //   subcatalogs() {
  //     return this.catalogs.filter( c => c.id == this.$route.params.id)[0] //.filter(  s => s.id == this.$route.params.id)
  //   }
  // }
}
</script>

<style lang="sass" scoped>
  h1
    color: #f23
</style>>
