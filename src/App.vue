<template>
  <RouterView></RouterView>
  <contacts />
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
