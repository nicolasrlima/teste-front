<template>
  <div>
    <p>the card</p>
    <TheCardDetails />
    <TheCardBillTypes />
  </div>
</template>

<script>
import TheCardDetails from "./TheCardDetails.vue";
import TheCardBillTypes from "./TheCardBillTypes.vue";

export default {
  name: "TheCard",
  components: {
    TheCardDetails,
    TheCardBillTypes,
  },
};
</script>

<style>
</style>