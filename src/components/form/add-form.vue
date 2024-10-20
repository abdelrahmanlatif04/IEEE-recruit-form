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

      <input
        v-if="howDidUHear == 'other'"
        v-model="other"
        type="text"
        placeholder="How did you hear about us? : "
        required
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="experience">Mention your previous experience :</label>
      <textarea
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        id="experience"
        type="text"
        rows="1"
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
      >
        <option v-for="(com, i) in committees" :key="i" :value="i">
          {{ com.name }}
        </option>
      </select>
      <router-link
        to="/committees-job"
        class="text-white tracking-wide font-semibold underline text-center text-lg underline-offset-1 hover:underline-offset-4 transition-all duration-300"
        >See committees job description here</router-link
      >
    </div>

    <button
      type="button"
      @click="move()"
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
    >
      Move to next section
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    move() {
      this.$emit("move");
    },
  },
  data() {
    return {
      howDidUHear: null,
      experience: null,
      committee: null,
      other: null,
      committees: null,
    };
  },
  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.committees = res["committees"]));
  },
};
</script>

<style></style>
