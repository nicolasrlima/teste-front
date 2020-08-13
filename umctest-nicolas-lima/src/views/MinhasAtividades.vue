<template>
  <div>
    <TheHeader />
    <CardsList />
    <PageBrowser />
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader.vue";
import CardsList from "@/components/CardsList.vue";
import PageBrowser from "@/components/PageBrowser.vue";

export default {
  name: "MinhasAtividades",
  components: {
    TheHeader,
    CardsList,
    PageBrowser,
  },
};
</script>
