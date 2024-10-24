<template>
  <div class="w-full flex flex-col items-center gap-5">
    <div
      v-for="question in questions"
      :key="question"
      class="flex flex-col gap-3 w-full"
    >
      <label for="space">{{ question["state"] }}</label>
      <textarea
        v-if="question['type'] == 'text-area'"
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name="space"
        id="space"
      ></textarea>
      <div class="flex flex-col gap-2" v-else>
        <div
          class="flex gap-4 items-center pl-4"
          v-for="i in question['choices']"
          :key="i"
        >
          <input
            class="w-6 h-6 text-blue-500 border-gray-300 rounded cursor-pointer"
            type="radio"
            name="question"
            :value="i"
          />

          <label class="text-lg tracking-widest" :for="i">{{ i }}</label>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 w-full">
      <label for="space">More space : </label>
      <textarea
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name="space"
        id="space"
      ></textarea>
    </div>

    <div class="flex flex-col justify-center items-center gap-2">
      <button
        type="button"
        @click="submit"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        Submit Form
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
      questions: null,
    };
  },
  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.questions =
          res["committees"][useRegisterStore().user.committee]["questions"];
      });
  },
  methods: {
    submit() {
      // useRegisterStore().user.committeeAnswers = answers;
      console.log(useRegisterStore().user.committeeAnswers);
      // useRegisterStore().submitForm();
    },
  },
};
</script>
