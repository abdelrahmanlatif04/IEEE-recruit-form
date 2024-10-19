<template>
  <form class="flex flex-col gap-10" @submit.prevent="handleSubmit()">
    <main-info />
    <add-info />
    <committee-info />
  </form>
</template>

<script>
import addInfo from "./form/add-form.vue";
import mainInfo from "./form/main-form.vue";
import committeeInfo from "./form/committee-form.vue";
export default {
  data() {
    return {};
  },

  methods: {
    handleSubmit() {
      console.log("done");
    },
  },
  components: {
    addInfo,
    mainInfo,
    committeeInfo,
  },
};
</script>

<style></style>
