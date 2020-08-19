<template>
  <div class="details-container">
    <div class="bill-source-container">
      <div class="bill-source">
        <h3 class="bill-source-label">{{accountLabel}}</h3>
        <span class="bill-source-value">{{account}}</span>
      </div>

      <div class="bill-source">
        <h3 class="bill-source-label">{{attendanceLabel}}</h3>
        <span class="bill-source-value">{{attendance}}</span>
      </div>

      <div class="bill-source">
        <h3 class="bill-source-label">{{shippingLabel}}</h3>
        <span class="bill-source-value">{{shipping}}</span>
      </div>

      <div class="bill-source">
        <h3 class="bill-source-label">{{lotLabel}}</h3>
        <span class="bill-source-value">{{lot}}</span>
      </div>
    </div>
    <div class="pendencies-container">
      <span class="pendencies-value">{{valueWithMask}}</span>
      <button class="pendencies-number">{{pendencies}} pendências</button>
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
  computed: {
    valueWithMask() {
      return this.value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
};
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
}

.bill-source-container {
  padding-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 1em;
}

.bill-source {
  display: flex;
  flex-direction: column;
}

.bill-source-label {
  font-size: 0.8em;
  font-weight: 400;
}

.bill-source-value {
  font-weight: bold;
}

.pendencies-container {
  display: flex;
  flex-direction: row;
  background: #f6f7fb;
  justify-content: space-around;
  border-radius: 5px;
  margin-top: 0.5em;
  padding: 0.5em 0;
}

.pendencies-value {
  font-size: 1.3em;
}

.pendencies-number {
  font-weight: bold;
  color: #2793ff;
  border: 2px solid #2793ff;
  border-radius: 50px;
  padding: 0 2.5em;
  outline: none;
}

.pendencies-number:hover {
  color: #fff;
  background: #2793ff;
  cursor: pointer;
}
</style>