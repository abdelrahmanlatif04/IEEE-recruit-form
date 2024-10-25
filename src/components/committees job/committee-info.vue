<template>
  <h1 class="text-center pt-5 text-white font-bold tracking-wide text-2xl">
    {{ committee.name }} job description
  </h1>
  <div class="flex flex-col gap-5 px-1 text-white">
    <img
      :src="`/committees/${id}.png`"
      class="mx-auto w-1/2 max-w-72 mt-5 mb-2 invert"
    />

    <p class="text-center font-bold tracking-wide md:text-lg">
      {{ committee.description }}
    </p>

    <div class="font-bold tracking-wide md:text-lg">
      <p
        class="bg-blue-500 px-3 py-1 w-fit mb-5 rounded-r-full font-semibold text-white tracking-wide"
      >
        Responsibilities :
      </p>
      <div
        class="my-4 flex items-start gap-2"
        v-for="(item, i) in committee.responsibilities"
        :key="i"
      >
        <span class="bg-blue-500 px-1 rounded-md text-white">
          0{{ i + 1 }}
        </span>
        <p>{{ item }}</p>
      </div>
    </div>

    <div class="font-bold tracking-wide md:text-lg">
      <p
        class="bg-blue-500 px-3 py-1 w-fit rounded-r-full font-semibold text-white tracking-wide"
      >
        Requirements :
      </p>

      <div
        class="my-4 flex items-start gap-2"
        v-for="(item, i) in committee.requirements"
        :key="i"
      >
        <span class="bg-blue-500 px-1 rounded-md text-white">
          0{{ i + 1 }}
        </span>
        <p>
          {{ item }}
        </p>
      </div>
    </div>

    <div class="mx-auto flex flex-col gap-2">
      <button
        @click="chooseCommittee()"
        class="bg-blue-700 hover:bg-white border-white text-white mx-auto px-2 py-1 rounded-lg text-lg border-[3px] transition-all duration-300 font-semibold hover:bg-transparent hover:text-blue-700 hover:tracking-wide"
      >
        join {{ committee.name }} committee
      </button>

      <router-link
        class="bg-blue-700 hover:bg-white border-white text-white mx-auto px-2 py-1 rounded-lg text-2xl border-[3px] transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
        to="/"
        >Main menu</router-link
      >
    </div>
  </div>
</template>

<script>
import { useRegisterStore } from "../../stores/register";
export default {
  data() {
    return {
      committee: null,
    };
  },
  methods: {
    chooseCommittee() {
      console.log("asd");
      useRegisterStore().user.committee = this.id;
      this.$router.push("/register");
    },
  },
  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.committee = res["committees"][this.id];
        if (!this.committee) this.$router.push("/");
      });
  },
  props: ["id"],
};
</script>
