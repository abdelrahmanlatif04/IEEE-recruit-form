<template>
  <div
    class="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <ul
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
        class="w-full flex-shrink-0"
      />
    </ul>
    <div class="relative top-0 left-1/2">
      <button class="left-0 z-10 p-2 bg-gray-500 text-white" @click="slideLeft">
        Left
      </button>
      <button
        class="right-0 z-10 p-2 bg-gray-500 text-white"
        @click="slideRight"
      >
        Right
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
    };
  },
  methods: {
    slideLeft() {
      if (this.currentSlide != -3) {
        this.currentSlide--;
        return;
      }
      this.currentSlide = 3;
    },
    slideRight() {
      if (this.currentSlide != 3) {
        this.currentSlide++;
        return;
      }
      this.currentSlide = -3;
    },
  },
  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.committees = res["committees"]));
  },
  components: { committeeInfo, committeeLink },
};
</script>

<style></style>
