<template>
  <div class="flex flex-col items-center">
    <img
      src="https://placehold.co/1"
      class="mx-auto w-1/2 mt-5 mb-2 max-w-96"
    />
    <router-link
      class="text-center text-white font-semibold tracking-wide hover:tracking-widest transition-all duration-300"
      :to="`/committee/${i}`"
      :key="committee"
    >
      0{{ ++index }} {{ committee.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["committee", "i", "index"],
};
</script>

<style></style>
