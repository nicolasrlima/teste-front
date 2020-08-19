<template>
  <div class="the-card-container">
    <TheCardHeader
      class="header"
      @click.native="cardOpen = !cardOpen"
      :status="actualCard.status"
      :days="actualCard.days"
      :patientName="actualCard.patientName"
      :healthInsurance="actualCard.healthInsurance"
    />
    <transition name="dropdown">
      <TheCardDetails
        :class="cardOpen ? 'details-open' : 'details-closed'"
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
    </transition>

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
  props: ["actualCard"],
  data() {
    return {
      cardOpen: false,
    };
  },
};
</script>

<style>
.the-card-container {
  background: #fff;
  padding: 1em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 0.5em;
}

.subtext {
  font-size: 0.8em;
}

.details-closed {
  height: 0px;
  overflow: hidden;
}

.details-open {
  height: auto;
  overflow: auto;
}

@media (min-width: 801px) {
  .the-card-container {
    width: 26vw;
  }

  .details-closed {
    height: auto;
    overflow: auto;
  }
}
</style>