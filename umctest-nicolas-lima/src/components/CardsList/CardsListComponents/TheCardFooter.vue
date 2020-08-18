<template>
  <div class="footer-container">
    <span v-for="(bill, index) in billTypes" :key="index">{{bill}}</span>
    <img v-if="showAttachment" src="../../../assets/attachment.svg" />
    <img v-if="showDocument && !hasPendingDocument" src="../../../assets/document.svg" />
    <img v-if="hasPendingDocument" src="../../../assets/unread_document.svg" />
  </div>
</template>

<script>
export default {
  name: "TheCardFooter",
  props: ["billTypes", "showAttachment", "showDocument", "hasPendingDocument"],
};
</script>

<style>
</style>