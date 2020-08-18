<template>
  <div class="details-container">
    <div class="bill-sources">
      <h3>{{accountLabel}}</h3>
      <span>{{account}}</span>

      <h3>{{attendanceLabel}}</h3>
      <span>{{attendance}}</span>

      <h3>{{shippingLabel}}</h3>
      <span>{{shipping}}</span>

      <h3>{{lotLabel}}</h3>
      <span>{{lot}}</span>
    </div>
    <div class="pendencies-value">
      <span>{{value}}</span>
      <button>{{pendencies}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCardDetails",
  props: [
    "accountLabel",
    "account",
    "attendanceLabel",
    "attendance",
    "shippingLabel",
    "shipping",
    "lotLabel",
    "lot",
    "value",
    "pendencies",
  ],
};
</script>

<style>
</style>