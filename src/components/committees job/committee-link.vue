<template>
  <div
    :class="`rounded-lg w-[${width}px] flex-shrink-0 hover:opacity-60 transition-all duration-300`"
  >
    <router-link
      :to="`/committee/${i}`"
      :key="committee"
      class="flex flex-col h-full justify-around"
    >
      <img
        :src="`committees/${i}.png`"
        class="w-5/12 mx-auto aspect-square object-contain"
      />
      <p class="text-center text-[#00246d] font-semibold tracking-wide">
        {{ committee.name }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["committee", "i", "width"],
};
</script>

<style></style>
