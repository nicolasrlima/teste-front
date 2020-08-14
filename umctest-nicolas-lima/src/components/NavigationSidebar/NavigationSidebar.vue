<template>
  <div @click="outsideClick" :class="sidebarStatus ? 'sidebar-open' : 'sidebar-closed'">
    <transition name="slide">
      <section v-show="sidebarStatus">
        <img id="logo" src="../../assets/brand.svg" alt="PEG Contas Logo" />

        <nav>
          <router-link to="/activities">
            <img src="../../assets/accounts.svg" />
            <span class="light-grey">Minhas Atividades</span>
          </router-link>

          <router-link to="/accounts">
            <img src="../../assets/accounts.svg" />
            <span class="light-grey">Todas as contas</span>
          </router-link>

          <router-link to="/users">
            <img src="../../assets/user.svg" />
            <span class="light-grey">Usuários</span>
          </router-link>

          <router-link to="/performance">
            <img src="../../assets/performance.svg" />
            <span class="light-grey">Desempenho</span>
          </router-link>

          <router-link to="/dashboard">
            <img src="../../assets/dashboard.svg" />
            <span class="light-grey">Dashboard</span>
          </router-link>
        </nav>
      </section>
    </transition>
    <HamburguerMenu />
  </div>
</template>

<script>
import HamburguerMenu from "./HamburguerMenu/HambuerguerMenu.vue";

export default {
  name: "NavigationSidebar",
  components: {
    HamburguerMenu,
  },
  computed: {
    sidebarStatus() {
      return this.$store.state.sidebarStatus;
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("changeSidebarStatus");
    },
    outsideClick({ currentTarget, target }) {
      if (currentTarget === target && this.sidebarStatus === true) {
        this.toggleSidebar();
      }
    },
  },
  watch: {
    $route() {
      if (this.sidebarStatus === true) this.toggleSidebar();
    },
  },
};
</script>

<style scoped src="./sidebarStyle.css"></style>