<template>
  <div class="pb-10 bg-blue-800 min-h-screen">
    <RouterView></RouterView>
    <contacts />
  </div>
</template>

<script>
import contacts from "./components/contacts.vue";
import viewApplicants from "./components/view-applicants.vue";
export default {
  components: {
    contacts,
  },
};
</script>
