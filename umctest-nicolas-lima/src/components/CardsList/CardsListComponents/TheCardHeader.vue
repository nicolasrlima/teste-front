<template>
  <div class="the-card-header">
    <span>{{days}}</span>
    <h2>{{patientName}}</h2>
    <span class="light-grey">{{healthInsurance}}</span>
    {{status}}
  </div>
</template>

<script>
export default {
  name: "TheCardHeader",
  props: ["status", "days", "patientName", "healthInsurance"],
};
</script>

<style>
</style>