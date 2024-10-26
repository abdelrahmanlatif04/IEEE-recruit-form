import { defineStore } from "pinia";
import axios from "axios";
export const useRegisterStore = defineStore("register", {
  state: () => ({
    msg: null,
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
      axios
        .post(
          "https://ieee-recruitment-production.up.railway.app/api/v1/boody",
          this.user,
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "your_MangaMan_APIKEY_Wherever_You_Keep_It",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.msg = response.data.message;
          console.log(this.msg);
        })
        .catch((error) => {
          console.error(error);
          this.msg = error.response.data.message;
          console.log(this.msg);
        });
    },
  },
});
