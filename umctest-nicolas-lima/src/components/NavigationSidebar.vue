<template>
  <section v-if="sidebarStatus">
    <img id="logo" src="../assets/brand.svg" alt="PEG Contas Logo" />
    <nav>
      <button @click="sidebarStatus = false">X</button>
      <a href="/minhas-atividades">
        <img src="../assets/accounts.svg" />
        <span>Minhas Atividades</span>
      </a>
      <a href="/todas-as-contas">
        <img src="../assets/accounts.svg" />
        <span>Todas as contas</span>
      </a>
      <a href="/usuarios">
        <img src="../assets/user.svg" />
        <span>Usuários</span>
      </a>
      <a href="/desempenho">
        <img src="../assets/performance.svg" />
        <span>Desempenho</span>
      </a>
      <a href="/dashboard">
        <img src="../assets/dashboard.svg" />
        <span>Dashboard</span>
      </a>
    </nav>
  </section>
  <button @click="sidebarStatus = true" v-else>Abrir</button>
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
  width: 8rem;
  background-color: #e7ebf7;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo {
  width: 100%;
}

nav {
  text-align: center;
  width: 100%;
}

a,
button {
  margin-top: 1.5rem;
}

button {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  color: #e7ebf7;
  background-color: #2793ff;
  border-radius: 50%;
  border: 2px solid #2793ff;
  position: absolute;
  right: -10px;
  font-size: 1.2rem;
}

a {
  display: flex;
  flex-direction: column;
  color: #a1acc9;
  align-items: center;
}

a:hover {
  color: #2793ff;
  border-left: 4px solid #2393ff;
}

span {
  width: 6rem;
}
</style>