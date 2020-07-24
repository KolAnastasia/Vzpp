<template>
  <div class="vacancy">
    <vue-accordion>
        
      <vue-accordion-item :title="item.name" v-for="(item, index) in items" :key="index"  :content="item.content" >
      </vue-accordion-item>
    </vue-accordion>

    <div ></div>
  </div>
</template>

<script>

import vueAccordion from "@/components/accordion";
import vueAccordionItem from "@/components/accordion-item";


export default {
  components: {
    vueAccordion,
    vueAccordionItem,
  },
  props: ["items"],
  created() {}
};
</script>

<style lang="sass">

</style>