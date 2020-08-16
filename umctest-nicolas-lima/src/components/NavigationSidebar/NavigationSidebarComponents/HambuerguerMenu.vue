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

<style scoped>
#container {
  display: inline-block;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
}

.bar {
  width: 35px;
  height: 5px;
  background-color: #2793ff;
  border-radius: 5px;
  margin-bottom: 5px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
</style>