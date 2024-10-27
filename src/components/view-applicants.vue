<template>
  <div>
    <view-password
      v-if="!authorized"
      @openCommittee="authorized = !authorized"
    />

    <div v-else-if="!committee">
      <p class="text-center text-white text-2xl font-bold py-4">
        NO. applicants : {{ applicants.length }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <button
          class="text-[#00246d] hover:opacity-60 transition-opacity duration-300 bg-blue-300 flex flex-col gap-2 items-center rounded-lg"
          v-for="(com, i) in committees"
          :key="com"
          @click="$router.push('/view/' + i)"
        >
          <img
            :src="'/committees/' + i + '.png'"
            class="w-1/2 aspect-square object-contain mx-auto"
          />
          <p>
            {{ com.name }}
          </p>
        </button>
      </div>
    </div>
    <view-committee :committee="committee" v-else />
  </div>
</template>

<script>
import viewPassword from "./view/viewPassword.vue";
import viewCommittee from "./view/view-committee.vue";
import axios from "axios";
export default {
  data() {
    return {
      authorized: false,
      committees: null,
      applicants: [],
    };
  },
  created() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => (this.committees = res["committees"]));
    this.getAllApplicants();
  },
  methods: {
    getAllApplicants() {
      const apiKey = "your_MangaMan_APIKEY_Wherever_You_Keep_It";
      const url =
        "https://ieee-recruitment-production.up.railway.app/api/v1/boody";

      axios
        .get(url, {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.applicants = response['data']['applications'];
        })
        .catch((error) => {
          console.error("There was a problem with the axios operation:", error);
        });
    },
  },
  components: {
    viewPassword,
    viewCommittee,
  },
  props: ["committee"],
};
</script>

<style></style>
