<template>
  <div class="the-card-header">
    <slot name="days" id="days"></slot>
    <slot name="patientName" id="name"></slot>
  </div>
</template>

<script>
export default {
  name: "TheCardHeader",
};
</script>

<style>
</style>