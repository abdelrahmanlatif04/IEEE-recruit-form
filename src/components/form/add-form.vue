<template>
  <div class="w-full flex flex-col items-center gap-5">
    <div class="flex flex-col gap-3 w-full">
      <label for="howDidUHear">How did you hear about us? : </label>
      <select
        class="cursor-pointer shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        v-model="howDidUHear"
      >
        <option value="friend">Friend</option>
        <option value="social media">Social Media</option>
        <option value="event">Event</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="experience">Mention your previous experience :</label>
      <textarea
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        id="experience"
        type="text"
        rows="1"
        v-model="experience"
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="committee"
        >Select the committee you would like to join :
      </label>
      <select
        class="cursor-pointer shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name="committee"
        id="committee"
        v-model="committee"
      >
        <option v-for="(com, i) in committees" :key="i" :value="i">
          {{ com.name }}
        </option>
      </select>
      <router-link
        to="/committees-job"
        href="_blank"
        class="text-white tracking-wide font-semibold underline text-center text-lg underline-offset-1 hover:underline-offset-4 transition-all duration-300"
        >See committees job description here</router-link
      >
    </div>

    <div class="flex flex-col justify-center items-center gap-2">
      <button
        type="button"
        @click="this.$emit('forward')"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        Move to next section
      </button>
      <button
        type="button"
        @click="this.$emit('back')"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        back
      </button>
    </div>
  </div>
</template>

<script>
import { useRegisterStore } from "../../stores/register";

export default {
  data() {
    return {
      howDidUHear: null,
      experience: null,
      committee: null,
      other: null,
      committees: null,
    };
  },

  mounted() {
    this.howDidUHear = useRegisterStore().user.howDidUHear;
    this.experience = useRegisterStore().user.experience;
    this.committee = useRegisterStore().user.committee;
  },
  watch: {
    howDidUHear(newValue) {
      useRegisterStore().user.howDidUHear = newValue;
    },
    experience(newValue) {
      useRegisterStore().user.experience = newValue;
    },
    committee(newValue) {
      useRegisterStore().user.committee = newValue;
    },
    other(newValue) {
      useRegisterStore().user.other = newValue;
    },
  },
  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.committees = res["committees"]));
  },
};
</script>

<style></style>
