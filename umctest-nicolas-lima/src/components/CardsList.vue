<template>
  <div class="cards-container">
    <h1>CardsList</h1>
  </div>
</template>

<script>
export default {
  name: "CardsList",
};
</script>

<style>
.cards-container {
  grid-row: 2;
  display: flex;
  align-content: center;
  background: blue;
}

@media (min-width: 801px) {
  .cards-container {
    grid-column: 1 / 4;
  }
}
</style>