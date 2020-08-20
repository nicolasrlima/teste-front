<template>
  <div class="filter-container">
    <div>
      <span class="desktop">Organizar por:</span>
      <select name="filter" id="filter" v-model="currentFilter">
        <option :value="{id: '0', name: 'Prioridade (SLA)'}">Prioridade (SLA)</option>
        <option :value="{id: '1', name: 'Receber documentos'}">Receber documentos</option>
      </select>
    </div>
    <div>
      <span class="desktop">Resultados por página:</span>
      <select name="results-per-page" id="results-per-page" v-model="resultsPerPage">
        <option :value="3">3</option>
        <option :value="6">6</option>
        <option :value="9">9</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsFilter",
  data() {
    return {
      currentFilter: { id: "0", name: "Prioridade (SLA)" },
      resultsPerPage: "9",
    };
  },
  created() {
    this.$store.commit("CHANGE_CURRENT_FILTER", this.currentFilter.id);
    this.$store.commit("CHANGE_RESULTS_PER_PAGE", this.resultsPerPage);
  },
  updated() {
    this.$store.commit("CHANGE_CURRENT_FILTER", this.currentFilter.id);
    this.$store.commit("CHANGE_RESULTS_PER_PAGE", this.resultsPerPage);
  },
};
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

select {
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

@media (min-width: 1025px) {
  .filter-container {
    grid-column: 3;
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .desktop {
    display: inline-block;
    margin-right: 1em;
  }

  #filter {
    padding: 10px 20px;
    margin-bottom: 0.5em;
  }
}
</style>