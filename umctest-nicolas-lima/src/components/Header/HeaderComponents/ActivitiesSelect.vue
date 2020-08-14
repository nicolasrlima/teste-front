<template>
  <div>
    <select name="activities" id="activities">
      <option value="Unidade integrada I">Unidade integrada I</option>
      <option value="Unidade integrada II">Unidade integrada II</option>
      <option value="Unidade integrada III">Unidade integrada III</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ActivitiesSelect",
};
</script>

<style scoped>
select {
  width: fit-content;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../../../assets/arrow.svg") no-repeat right;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

select:focus {
  outline: none;
}
</style>