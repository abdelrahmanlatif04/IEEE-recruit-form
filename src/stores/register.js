import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    user: {
      name: null,
      email: null,
      id: null,
      tel: null,
      university: null,
      subUni: null,
      faculty: null,

      year: null,
      howDidUHear: null,
      experience: null,
      committee: null,

      committeeAnswers: null,
      space: null,

      createdAt: null,
    },
  }),
  actions: {
    emptyUser() {
      for (let i in this.user) {
        this.user[i] = null;
      }
    },

    submitForm() {
      let date = new Date();
      this.user.createdAt = date;
      console.log(this.user);
    },
  },
});
