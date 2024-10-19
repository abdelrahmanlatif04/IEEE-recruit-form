<template>
  <div class="pb-12">
    <RouterView></RouterView>
    <contacts />
  </div>
</template>

<script>
import contacts from "./components/contacts.vue";

export default {
  components: {
    contacts,
  },
};
</script>

<style></style>
