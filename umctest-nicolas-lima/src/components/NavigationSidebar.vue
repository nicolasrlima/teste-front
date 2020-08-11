<template>
  <section v-if="sidebarStatus">
    <nav>
      <img src="../assets/brand.svg" alt="PEG Contas Logo" />
      <button @click="sidebarStatus = false">X</button>
      <a href="/minhas-atividades">
        <img src="../assets/accounts.svg" />Minhas Atividades
      </a>
      <a href="/todas-as-contas">
        <img src="../assets/accounts.svg" />Todas as contas
      </a>
      <a href="/usuarios">
        <img src="../assets/user.svg" />Usuários
      </a>
      <a href="/desempenho">
        <img src="../assets/performance.svg" />Desempenho
      </a>
      <a href="/dashboard">
        <img src="../assets/dashboard.svg" />Dashboard
      </a>
    </nav>
  </section>
</template>

<script>
export default {
  name: "NavigationSidebar",
  data() {
    return { sidebarStatus: true };
  },
};
</script>

<style scoped>
section {
  height: 100%;
  width: 10rem;
  background-color: #e7ebf7;
  position: fixed;
}

button {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}

nav {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

a {
  color: #a1acc9;
}
</style>