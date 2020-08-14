<template>
  <div class="filter-container">
    <select name="filter" id="filter">
      <option value="Unidade integrada I">Prioridade(SLA)</option>
      <option value="Unidade integrada II">Receber documentos</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CardsFilter",
};
</script>

<style scoped>
#filter {
  background: url("../../../assets/arrow.svg") no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  border: 1px solid;
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
</style>