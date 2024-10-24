<template>
  <div
    class="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div class="mx-auto w-[316px] overflow-hidden relative">
      <div
        class="flex transition-transform duration-300"
        :style="{
          transform:
            currentSlide > 0
              ? `translateX(-${currentSlide * 316}px)`
              : `translateX(${-currentSlide * 316}px)`,
        }"
      >
        <committee-link
          v-for="(committee, i, index) in committees"
          :key="i"
          :i="i"
          :index="index"
          :committee="committee"
          class="flex-shrink-0"
        />
      </div>

      <button
        class="p-2 absolute rounded-l-xl bottom-0 bg-blue-800 border h-4/5 hover:opacity-40 transition-all duration-300"
        @click="slideLeft"
      >
        <img src="/arrow.png" class="invert rotate-180 w-5" />
      </button>
      <button
        class="p-2 absolute right-0 rounded-r-xl bottom-0 bg-blue-800 border h-4/5 hover:opacity-40 transition-all duration-300"
        @click="slideRight"
      >
        <img src="/arrow.png" class="invert w-5" />
      </button>
    </div>

    <router-link
      class="bg-blue-700 text-white mx-auto px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      to="/"
      >Main menu</router-link
    >
  </div>
</template>

<script>
import committeeInfo from "./committees job/committee-info.vue";
import committeeLink from "./committees job/committee-link.vue";

export default {
  data() {
    return {
      committees: null,
      currentSlide: 0,
      int: null,
    };
  },

  methods: {
    slideLeft() {
      clearInterval(this.int);
      if (this.currentSlide) {
        this.currentSlide--;
      } else {
        this.currentSlide = 6;
      }
    },
    slideRight() {
      clearInterval(this.int);
      if (this.currentSlide == 6) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
  },
  created() {
    this.int = setInterval(() => {
      if (this.currentSlide == 6) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 2000);
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.committees = res["committees"]));
  },
  components: { committeeInfo, committeeLink },
};
</script>

<style></style>
