<template>
  <div>
      <div class="heading-wrap">
        <h2>{{ heading }}</h2>
        <div class="tabs">
          <ul>
            <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      

      <div class="tabs-details">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  props :  ['heading'],
  data() {
    return { tabs: [] };
    
  },
  

  created() {

    this.tabs = this.$children;

  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>

<style lang="sass" scoped>
  .tabs 
    ul
      display: flex
  
</style>