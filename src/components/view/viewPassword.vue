<template>
  <div
    class="text-black grid place-content-center w-full h-screen fixed top-0 left-0 bg-black bg-opacity-60"
  >
    <form
      @submit.prevent="submit"
      class="flex flex-col justify-around items-center rounded-lg bg-white text-black w-96 aspect-square shadow relative"
    >
      <label class="text-black text-3xl" for="password">EnterPassword</label>
      <input
        class="text-black px-2 py-1 w-4/5 tracking-widest focus:outline-none shadow-md rounded-xl border"
        type="password"
        v-model="asd"
      />
      <button
        class="border-[3px] rounded-lg w-1/2 text-xl px-4 border-blue-600 text-white bg-blue-600 py-1 hover:text-blue-500 hover:bg-white font-semibold transition-all duration-300"
        type="submit"
      >
        Enter
      </button>
      <p class="absolute bottom-2 text-red-500 font-semibold tracking-wider">
        {{ state }}
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asd: null,
      state: null,
    };
  },
  methods: {
    submit() {
      if (this.asd == "IeeE@ppliCants!V1ew#2024") {
        this.$emit("openCommittee");
      } else {
        this.state = "Wrong password";
      }
    },
  },
};
</script>

<style></style>
