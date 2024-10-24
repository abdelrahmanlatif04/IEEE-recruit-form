<template>
  <div class="w-[300px] p-2 rounded-lg mx-2">
    <router-link :to="`/committee/${i}`" :key="committee">
      <img class="invert p-14" :src="`committees/${i}.png`" />
      <p
        class="text-center text-white font-semibold tracking-wide hover:tracking-widest transition-all duration-300"
      >
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
