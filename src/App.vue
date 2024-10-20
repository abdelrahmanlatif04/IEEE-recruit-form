<template>
  <div class="pb-12">
    <RouterView></RouterView>
    <contacts />

  </div>
</template>

<script>
import contacts from "./components/contacts.vue";
import floatBg from "./components/float-bg.vue";

export default {
  components: {
    contacts,
    floatBg,
  },
};
</script>

<style></style>
