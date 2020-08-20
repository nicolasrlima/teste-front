<template>
  <div>
    <h1>Desculpe, essa página não existe!</h1>
    <router-link to="/activities">
      <p>Clique aqui para voltar para Minhas Atividades.</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
div {
  display: block;
  text-align: center;
  padding-top: 4rem;
}

h1 {
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
}
</style>