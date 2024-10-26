<template>
  <div class="flex flex-col gap-2 pb-2 md:gap-5 w-full text-white">
    <div>
      <img
        src="/team.jpg"
        class="aspect-video object-cover max-w-[700px] w-full pt-10 pb-2 px-4 md:px-10 mx-auto"
      />
      <p class="text-center tracking-wide text-lg">
        * IEEE team from Be Informed camp 6 *
      </p>
    </div>
    <div class="m-4 flex flex-col gap-2">
      <h1 class="font-bold text-xl md:text-2xl tracking-wider">About IEEE</h1>
      <ul class="flex flex-col gap-2">
        <li
          class="flex gap-1 text-sm md:text-lg font-bold tracking-wide"
          v-for="i in general"
          :key="i"
        >
          🔵
          <p>
            {{ i }}
          </p>
        </li>
      </ul>
    </div>

    <div class="m-4 flex flex-col gap-3">
      <h1 class="font-bold text-xl md:text-2xl tracking-wider">
        About IEEE AswanSB
      </h1>
      <ul class="flex flex-col gap-2">
        <li
          class="flex gap-1 text-sm md:text-lg font-bold tracking-wide"
          v-for="i in team"
          :key="i"
        >
          🔵
          <p>
            {{ i }}
          </p>
        </li>
      </ul>
    </div>

    <div class="flex gap-2 justify-around mx-auto max-w-[400px] w-full">
      <router-link
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 hover:bg-white font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
        to="/"
        >Main menu</router-link
      >

      <router-link
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 hover:bg-white font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
        :to="{ name: 'register' }"
        >Join us !</router-link
      >
    </div>
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
