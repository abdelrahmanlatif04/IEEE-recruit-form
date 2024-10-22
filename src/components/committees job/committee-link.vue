<template>
  <li class="flex flex-col items-center w-[300px] p-2 border mx-2 bg-blue-600">
    <img src="https://placehold.co/300x300" class="" />
    <router-link
      class="text-center text-white font-semibold tracking-wide hover:tracking-widest transition-all duration-300"
      :to="`/committee/${i}`"
      :key="committee"
    >
      0{{ index + 1 }} {{ committee.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["committee", "i", "index"],
};
</script>

<style></style>
