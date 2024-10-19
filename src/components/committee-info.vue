<template>
  <h1 class="text-center font-bold tracking-wide text-2xl">
    Committee job description
  </h1>
  <div class="flex flex-col gap-2 items-center">
    <p class="text-center font-bold tracking-wide text-xl">
      {{ committee.name }}
    </p>

    <p>
      {{ committee.description }}
    </p>

    <div>
      <p>Responsibilities :</p>
      <div v-for="(item, i) in committee.responsibilities" :key="i">
        0{{ i + 1 }} {{ item }}
      </div>
    </div>

    <div>
      <p>Requirements :</p>
      <div v-for="(item, i) in committee.requirements" :key="i">
        0{{ i + 1 }} {{ item }}
      </div>
    </div>
  
  
  <router-link to="/register">Join us now!!</router-link>
  </div>



</template>

<script>
export default {
  data() {
    return {
      committee: null,
    };
  },

  created() {
    let arr = ["fr", "sm", "pr", "hr", "web", "campus", "multimedia"];

    if (arr.includes(this.id)) {
      fetch("/data.json")
        .then((res) => res.json())
        .then((res) => (this.committee = res["committees"][this.id]));
    } else {
      this.$router.push("/");
    }
  },
  props: ["id"],
};
</script>

<style></style>
