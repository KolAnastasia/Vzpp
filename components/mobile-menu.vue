<template>
  <div id="menuTest" @click="openMenu">TEst</div>
</template>

<script>
export default {
  methods: {
    openMenu:function(event){
      document.getElementById("menuTest").classList.add("active")
    }
  }
};
</script>

<style lang="sass" scoped>

  
</style>