<template>
  <div class="details-container">
    <div class="bill-sources">
      <slot name="accountLabel"></slot>
      <slot name="account"></slot>

      <slot name="attendanceLabel"></slot>
      <slot name="attendance"></slot>

      <slot name="shippingLabel"></slot>
      <slot name="shipping"></slot>

      <slot name="lotLabel"></slot>
      <slot name="lot"></slot>
    </div>
    <div class="pendencies-value">
      <slot name="value"></slot>
      <slot name="pendencies"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCardDetails",
};
</script>

<style>
</style>