<template>
  <div
    class="flex w-full justify-between shadow-black shadow-2xl bg-gray-200 px-2 py-1 fixed bottom-0 left-1/2 -translate-x-1/2"
  >
    <a
      v-for="i in data"
      :key="i"
      target="_blank"
      class="hover:opacity-60 transition-all duration-300 flex gap-2 items-center justify-between"
      :href="i.link"
    >
      <img
        class="w-7 p-1 object-contain"
        :src="'/' + i.title.toLowerCase() + '.png'"
      />
      <p class="hidden sm:block font-semibold tracking-widest">{{ i.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    let s = "asdaf";
    s.t;
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.data = res["social-media"]));
  },
};
</script>

<style></style>
