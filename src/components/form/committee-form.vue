<template>
  <div class="w-full flex flex-col items-center gap-5">
    <div class="flex flex-col gap-3 w-full">
      <label for="space">More space : </label>
      <textarea
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name="space"
        id="space"
      ></textarea>
    </div>

    <button
      type="button"
      @click="submit"
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
    >
      Move to next section
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      console.log("asd");
      this.$emit("submit");
    },
  },
};
</script>
