<template>
  <div class="footer-container">
    <div class="bill-type-container">
      <span v-for="(bill, index) in billTypes" :key="index" class="bill-type">{{bill}}</span>
    </div>
    <div class="checklist-container">
      <span class="subtext">Checklist: 15/23</span>
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    </div>
    <div class="attachment-container">
      <img v-if="showAttachment" src="../../../assets/attachment.svg" />
      <img v-if="showDocument && !hasPendingDocument" src="../../../assets/document.svg" />
      <img v-if="hasPendingDocument" src="../../../assets/unread_document.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCardFooter",
  props: ["billTypes", "showAttachment", "showDocument", "hasPendingDocument"],
};
</script>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5em;
}

.bill-type-container {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.bill-type {
  color: #51586f;
  border: 2px solid #51586f;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.bill-type:first-child {
  margin-right: 0.25em;
}

.progress-bar-container {
  background-color: #f6f7fb;
  border-radius: 15px;
}

.progress-bar {
  background-color: #8b98ba;
  width: 65%;
  height: 4px;
  border-radius: 10px;
}

.attachment-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.attachment-container img {
  cursor: pointer;
}

@media (min-width: 1025px) {
  .bill-type:hover {
    color: #fff;
    background: #51586f;
  }
}
</style>