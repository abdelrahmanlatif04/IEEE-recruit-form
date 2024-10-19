<template>
  <div class="flex flex-col md:flex-row justify-around items-center h-screen">
    <div
      class="flex justify-center absolute opacity-25 -z-10 items-center"
    >
      <img src="/logo.png" class="w-3/5 max-w-[600px]" />
    </div>
    <router-link
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      :to="{ name: 'about team' }"
      >Who are we ?</router-link
    >
    <router-link
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      :to="{ name: 'committees info' }"
      >About committees
    </router-link>
    <router-link
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      :to="{ name: 'register' }"
      >Join us !</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  animation: float 1.5s linear infinite;
}
</style>
