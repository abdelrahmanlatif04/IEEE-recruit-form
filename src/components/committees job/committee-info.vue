<template>
  <h1 class="text-center font-bold tracking-wide text-2xl">
    Committee job description
  </h1>
  <div class="flex flex-col gap-5 px-1">
    <img
      src="https://placehold.co/400x400"
      class="mx-auto w-1/2 mt-5 mb-2 max-w-96"
    />

    <p class="text-center font-bold tracking-wide text-xl">
      {{ committee.name }}
    </p>

    <p class="text-center">
      {{ committee.description }}
    </p>

    <div>
      <p
        class="bg-blue-500 px-3 py-1 w-fit rounded-r-full font-semibold text-white tracking-wide"
      >
        Responsibilities :
      </p>
      <div
        class="my-1 flex items-start gap-2"
        v-for="(item, i) in committee.responsibilities"
        :key="i"
      >
        <span class="bg-blue-500 px-1 rounded-md text-white">
          0{{ i + 1 }}
        </span>
        <p>{{ item }}</p>
      </div>
    </div>

    <div>
      <p
        class="bg-blue-500 px-3 py-1 w-fit rounded-r-full font-semibold text-white tracking-wide"
      >
        Requirements :
      </p>

      <div
        class="my-1 flex items-start gap-2"
        v-for="(item, i) in committee.requirements"
        :key="i"
      >
        <span class="bg-blue-500 px-1 rounded-md text-white">
          0{{ i + 1 }}
        </span>
        <p>
          {{ item }}
        </p>
      </div>
    </div>

    <router-link to="/" class="mx-auto">Main menu</router-link>
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
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.committee = res["committees"][this.id];
        if (!this.committee) this.$router.push("/");
      });
  },
  props: ["id"],
};
</script>
