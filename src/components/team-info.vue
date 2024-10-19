<template>{{ data }}</template>

<script>
import { data } from "autoprefixer";

export default {
  data() {
    return {
      data: null,
    };
  },

  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.data = res["IEEE"]));
  },
};
</script>

<style></style>
