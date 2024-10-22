<template>
  <div class="flex flex-col gap-5">
    <div
      class="bg-blue-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center"
    >
      <committee-link
        v-for="(committee, i, index) in committees"
        :key="i"
        :i="i"
        :index="index"
        :committee="committee"
      />
    </div>

    <router-link
      class="bg-blue-700 text-white mx-auto px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      to="/"
      >Main menu</router-link
    >
  </div>
</template>

<script>
import committeeInfo from "./committees job/committee-info.vue";
import committeeLink from "./committees job/committee-link.vue";

export default {
  data() {
    return {
      committees: null,
      titles: null,
    };
  },

  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.committees = res["committees"]));
  },
  components: { committeeInfo, committeeLink },
};
</script>

<style></style>
