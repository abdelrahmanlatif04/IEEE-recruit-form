import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    user: {
      name: null,
      email: null,
      id: null,
      tel: null,
      university: null,
      faculty: null,
      //   ***************
      year: null,
      howDidUHear: null,
      experience: null,
      committee: null,
      //   ***************

      // committee answers
    },
  }),
  actions: {
    submitForm() {
      console.log(this.user);
    },
  },
});
