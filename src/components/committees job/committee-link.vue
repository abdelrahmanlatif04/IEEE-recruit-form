<template>
  <div
    class="w-[300px] p-2 rounded-lg mx-2 hover:opacity-60 transition-all duration-300"
  >
    <router-link :to="`/committee/${i}`" :key="committee">
      <img class="invert p-14" :src="`committees/${i}.png`" />
      <p class="text-center text-white font-semibold tracking-wide">
        0{{ index + 1 }} {{ committee.name }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["committee", "i", "index"],
};
</script>

<style></style>
