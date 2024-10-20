<template>
  <div class="flex flex-col gap-5">
    <img src="/logo.png" class="w-3/5 max-w-[400px] p-5 mx-auto" />
    <div>
      <h1 class="font-semibold text-2xl mb-2">About IEEE</h1>
      <div>
        <div v-for="i in general" :key="i">{{ i }}</div>
      </div>
    </div>

    <div>
      <h1 class="font-semibold text-2xl mb-2">About IEEE AswanSB</h1>
      <div>
        <div v-for="i in team" :key="i">{{ i }}</div>
      </div>
    </div>

    <router-link
      class="bg-blue-700 text-white mx-auto px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      to="/"
      >Main menu</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: null,
      general: null,
    };
  },

  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.general = res["IEEE"]["main"];
        this.team = res["IEEE"]["aswan"];
      });
  },
};
</script>

<style></style>
