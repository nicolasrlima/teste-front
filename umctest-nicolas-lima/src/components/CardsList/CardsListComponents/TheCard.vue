<template>
  <div class="the-card-container">
    <TheCardHeader>
      <template v-slot:days>
        <slot name="days"></slot>
      </template>

      <template v-slot:patientName>
        <slot name="patientName"></slot>
      </template>
    </TheCardHeader>

    <TheCardDetails>
      <template v-slot:accountLabel>
        <slot name="accountLabel"></slot>
      </template>
      <template v-slot:account>
        <slot name="account"></slot>
      </template>

      <template v-slot:attendanceLabel>
        <slot name="attendanceLabel"></slot>
      </template>
      <template v-slot:attendance>
        <slot name="attendance"></slot>
      </template>

      <template v-slot:shippingLabel>
        <slot name="shippingLabel"></slot>
      </template>
      <template v-slot:shipping>
        <slot name="shipping"></slot>
      </template>

      <template v-slot:lotLabel>
        <slot name="lotLabel"></slot>
      </template>
      <template v-slot:lot>
        <slot name="lot"></slot>
      </template>

      <template v-slot:value>
        <slot name="value"></slot>
      </template>
      <template v-slot:pendencies>
        <slot name="pendencies"></slot>
      </template>
    </TheCardDetails>

    <TheCardFooter />
  </div>
</template>

<script>
import TheCardHeader from "./TheCardHeader.vue";
import TheCardDetails from "./TheCardDetails.vue";
import TheCardFooter from "./TheCardFooter.vue";

export default {
  name: "TheCard",
  components: {
    TheCardHeader,
    TheCardDetails,
    TheCardFooter,
  },
};
</script>

<style>
</style>