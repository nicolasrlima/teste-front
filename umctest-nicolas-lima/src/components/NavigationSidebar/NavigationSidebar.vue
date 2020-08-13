<template>
  <div @click="outsideClick" :class="sidebarStatus ? 'sidebar-open' : 'sidebar-closed'">
    <transition name="slide">
      <section v-show="sidebarStatus">
        <img id="logo" src="../../assets/brand.svg" alt="PEG Contas Logo" />

        <nav>
          <a href="/minhas-atividades">
            <img src="../../assets/accounts.svg" />
            <span>Minhas Atividades</span>
          </a>

          <a href="/todas-as-contas">
            <img src="../../assets/accounts.svg" />
            <span>Todas as contas</span>
          </a>

          <a href="/usuarios">
            <img src="../../assets/user.svg" />
            <span>Usuários</span>
          </a>

          <a href="/desempenho">
            <img src="../../assets/performance.svg" />
            <span>Desempenho</span>
          </a>

          <a href="/dashboard">
            <img src="../../assets/dashboard.svg" />
            <span>Dashboard</span>
          </a>
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
};
</script>

<style scoped src="./sidebarStyle.css"></style>