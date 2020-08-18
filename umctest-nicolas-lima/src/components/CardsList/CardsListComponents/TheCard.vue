<template>
  <div class="the-card-container">
    <TheCardHeader
      class="header"
      :status="actualCard.status"
      :days="actualCard.days"
      :patientName="actualCard.patientName"
      :healthInsurance="actualCard.healthInsurance"
    />

    <TheCardDetails
      class="details"
      :accountLabel="actualCard.billSources[0].label"
      :account="actualCard.billSources[0].value"
      :attendanceLabel="actualCard.billSources[1].label"
      :attendance="actualCard.billSources[1].value"
      :shippingLabel="actualCard.billSources[2].label"
      :shipping="actualCard.billSources[2].value"
      :lotLabel="actualCard.billSources[3].label"
      :lot="actualCard.billSources[3].value"
      :value="actualCard.value"
      :pendencies="actualCard.pendencies"
    />

    <TheCardFooter
      class="footer"
      :billTypes="actualCard.billTypes"
      :showAttachment="actualCard.showAttachment"
      :showDocument="actualCard.showDocument"
      :hasPendingDocument="actualCard.hasPendingDocument"
    />
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
  props: [
    "cardNumber",
    "patientName",
    "days",
    "status",
    "healthInsurance",
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
    "billTypes",
    "showAttachment",
    "showDocument",
    "hasPendingDocument",
  ],
  computed: {
    actualCard() {
      return this.$store.state.cardsData.value[this.cardNumber];
    },
  },
};
</script>

<style>
</style>