<template>
  <div>
    <div class="content-card">
      <div class="content-card_img">
        <img :src="getImage(contentImgs.src)" alt />
      </div>
      <div class="content-card_text">
        <blockquote> {{contentImgs.name}} </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'contentImgs',
  ]
};
</script>

<style lang="sass" scoped>

</style>