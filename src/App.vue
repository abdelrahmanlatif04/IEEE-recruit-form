<template>
  <!-- <main-form />
  <hr />
  <committee-info />
  <hr />
  <team-info /> -->



  <RouterView></RouterView>
</template>

<script>
import mainForm from "./components/form.vue";
import committeeInfo from "./components/committee-info.vue";
import teamInfo from "./components/team-info.vue";
export default {
  components: {
    mainForm,
    committeeInfo,
    teamInfo,
  },
};
</script>

<style></style>
