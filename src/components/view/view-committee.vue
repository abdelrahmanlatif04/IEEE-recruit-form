<template>{{ committeeApplicants }}</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      committeeApplicants: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://ieee-recruitment-production.up.railway.app/api/v1/boody/" +
          this.committee,
        {
          headers: {
            "x-api-key": "your_MangaMan_APIKEY_Wherever_You_Keep_It",
          },
        }
      )
      .then((response) => {
        this.committeeApplicants = response;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  props: ["committee"],
};
</script>

<style></style>
