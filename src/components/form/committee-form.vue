<template>
  <div class="w-full flex flex-col items-center gap-5">
    <div
      class="flex flex-col gap-3 w-full pt-0 pb-7 relative"
      v-for="question in questions"
      :key="question"
    >
      <label :for="question['state']">{{ question["state"] }}</label>

      <textarea
        v-if="question['type'] == 'text-area'"
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        :name="question['state']"
        :id="question['state']"
      ></textarea>

      <select
        class="cursor-pointer shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        v-model="opt"
        v-else
      >
        <option :value="i" v-for="i in question['options']" :key="i">
          {{ i }}
        </option>
      </select>

      <div class="flex flex-col gap-2">
        <div
          class="flex gap-4 items-center pl-4"
          v-for="i in question['']"
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
    <div class="flex flex-col gap-3 w-full relative">
      <label for="space">More space : </label>
      <textarea
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name="space"
        id="space"
        v-model="space"
      ></textarea>
    </div>
    <p
      class="font-bold tracking-wider"
      :class="
        msg == 'Application submitted successfully'
          ? 'text-green-500'
          : 'text-red-500'
      "
    >
      {{ msg }}
    </p>
    <div class="flex flex-col justify-center items-center gap-2">
      <button
        :disabled="isDisabled"
        type="button"
        @click="submit"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-2 border-white hover:bg-white transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        Submit Form
      </button>
      <button
        type="button"
        @click="this.$emit('back')"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-2 border-white hover:bg-white transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        back
      </button>
    </div>
  </div>
</template>

<script>
import { useRegisterStore } from "../../stores/register";
import axios from "axios";

export default {
  data() {
    return {
      questions: null,
      space: null,
      opt: null,
      msg: null,
      isDisabled: false,
    };
  },
  watch: {
    space(newValue) {
      useRegisterStore().user.space = newValue;
    },
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
    isThereAnswer(i) {
      return document.forms[0][i] ? true : false;
    },
    saveAnswers() {
      let answers = {};
      for (let i = 0; i < this.questions.length; i++) {
        answers[this.questions[i].state] =
          !i && this.opt ? this.opt : document.forms[0][i].value;
      }
      useRegisterStore().user.committeeAnswers = answers;
    },
    submit() {
      this.saveAnswers();

      let date = new Date();
      useRegisterStore().user.createdAt = date;
      this.isDisabled = !this.isDisabled;
      const url =
        "https://ieee-recruitment-production.up.railway.app/api/v1/boody";
      const apiKey = "your_MangaMan_APIKEY_Wherever_You_Keep_It";
      
      axios
        .post(url, useRegisterStore().user, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.msg = response.data.message;
          setTimeout(() => {
            location.reload();
          }, 1250);
        })
        .catch((error) => {
          console.error(error);
          this.msg = error.response.data.message;
          this.isDisabled = !this.isDisabled;
        });
    },
  },
};
</script>
