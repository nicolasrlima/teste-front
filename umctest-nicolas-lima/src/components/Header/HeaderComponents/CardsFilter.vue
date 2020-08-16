<template>
  <div class="filter-container">
    <span class="desktop">Organizar por:</span>
    <select name="filter" id="filter" v-model="currentFilter">
      <option :value="{id: '1', name: 'Prioridade (SLA)'}">Prioridade (SLA)</option>
      <option :value="{id: '2', name: 'Receber documentos'}">Receber documentos</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CardsFilter",
  data() {
    return {
      currentFilter: { id: "1", name: "Prioridade (SLA)" },
    };
  },
  created() {
    this.$store.commit("CHANGE_CURRENT_FILTER", this.currentFilter);
  },
  updated() {
    this.$store.commit("CHANGE_CURRENT_FILTER", this.currentFilter);
  },
};
</script>

<style scoped>
#filter {
  background: url("../../../assets/arrow.svg") no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  border: 1px solid #8b98ba;
  border-radius: 5px;
  width: fit-content;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px 20px;
}

select:focus {
  outline: none;
}

.desktop {
  display: none;
}

@media (min-width: 801px) {
  .filter-container {
    grid-column: 3;
    justify-self: end;
  }

  .desktop {
    display: inline-block;
    margin-right: 1em;
  }

  #filter {
    padding: 10px 20px;
  }
}
</style>