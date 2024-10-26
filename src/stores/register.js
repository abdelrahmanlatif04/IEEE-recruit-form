import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    user: {
      name: null,
      email: null,
      id: null,
      tel: null,
      university: null,
      otherUni: null,
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

      fetch("https://ieee-recruitment-production.up.railway.app/api/v1/boody", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    },
  },
});
