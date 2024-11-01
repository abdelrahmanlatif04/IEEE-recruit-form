<template>
  <div class="flex-col md:flex-row justify-around items-center h-[93vh]">
    <router-link
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-white border-[3px] transition-all duration-300 font-semibold tracking-wide hover:bg-white hover:text-blue-700 hover:tracking-widest text-nowrap"
      :to="{ name: 'about team' }"
      >Who are we ?</router-link
    >
    <router-link
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-white border-[3px] transition-all duration-300 font-semibold tracking-wide hover:bg-white hover:text-blue-700 hover:tracking-widest text-nowrap"
      :to="{ name: 'committees info' }"
      >About committees
    </router-link>

    <router-link
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-white border-[3px] transition-all duration-300 font-semibold tracking-wide hover:bg-white hover:text-blue-700 hover:tracking-widest text-nowrap"
      :to="{ name: 'register' }"
      >Join us !</router-link
    >
  </div>
</template>

<script>
export default {};
</script>
