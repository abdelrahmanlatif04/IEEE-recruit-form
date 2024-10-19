<template>
  <div
    class="bg-blue-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center"
  >
    <router-link
      class="text-center text-white py-1 my-5 font-semibold tracking-wide hover:tracking-widest transition-all duration-300"
      :to="`/committee/${i}`"
      v-for="(committee, i, index) in committees"
      :key="committee"
    >
      0{{ ++index }}  {{ committee.name }}
    </router-link>
  </div>
</template>

<script>
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
};
</script>

<style></style>
