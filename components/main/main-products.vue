<template>
  <div class="mainproducts catalog-list">
    <nuxt-link
      v-for="catalog in catalogs"
      :key="catalog.id"
      :to="{name: 'catalog-id', params: {id: catalog.id }}"
    >
      <img :src="getImage(catalog.imgSrc)" alt />
      <div class="catalog-list_name">{{ catalog.name }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["catalogs"]
}
</script>

<style lang="sass" scoped>

.mainproducts
  max-width: 1160px
  margin: 0 auto
  display: flex
  margin-bottom: 120px
  -webkit-box-shadow: 0px 22px 5px -10px rgba(185,186,185,1)
  -moz-box-shadow: 0px 22px 5px -10px rgba(185,186,185,1)
  box-shadow: 0px 22px 5px -10px rgba(185,186,185,1)
  a
    width: 33.3%
    margin-right: 0
    margin-bottom: 0

@media (max-width: 768px)
  .mainproducts a
    width: 50%

@media (max-width: 500px)
  .mainproducts a
    width: 100%

</style>