<template>
  <transition name="fade">
    <div id="container" v-show="sidebarStatus === false" @click="toggleSidebar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HamburguerMenu",
  computed: {
    sidebarStatus() {
      return this.$store.state.sidebarStatus;
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("CHANGE_SIDEBAR_STATUS");
    },
  },
};
</script>

<style scoped src="./menuStyle.css"></style>