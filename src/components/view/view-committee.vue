<template>
  <div>
    <p class="text-center text-white text-2xl font-bold py-4">
      NO. applicant : {{ committeeApplicants.length }}
    </p>
    <div class="flex flex-col gap-2">
      <div
        class="border-b relative text-white flex flex-col gap-1 p-2 w-full"
        v-for="i in committeeApplicants"
        :key="i"
      >
        <p class="tracking-wider absolute right-0 top-0">
          {{ i.createdAt.slice(0, -5) }}
        </p>
        <p>
          Name :
          <span class="font-bold tracking-wide">{{ i.name }}</span>
        </p>
        <p>
          Email :
          <span class="font-bold tracking-wide">{{ i.email }}</span>
        </p>
        <p>
          ID :
          <span class="font-bold tracking-wide">{{ i.id }}</span>
        </p>
        <p>
          Phone :
          <span class="font-bold tracking-wide">{{ i.tel }}</span>
        </p>
        <p>
          University :
          <span class="font-bold tracking-wide">{{ i.university }}</span>
        </p>
        <p>
          Faculty :
          <span class="font-bold tracking-wide">{{ i.faculty }}</span>
        </p>

        <p>
          Grade :
          <span class="font-bold tracking-wide">{{ i.year }}</span>
        </p>

        <p>
          How did u hear about us :
          <span class="font-bold tracking-wide">{{ i.howDidUHear }}</span>
        </p>

        <p>
          experience :
          <span class="font-bold tracking-wide">{{ i.experience }}</span>
        </p>

        <div class="flex flex-col gap-2">
          <div
            v-for="(answer, question, index) in i.committeeAnswers"
            :key="question"
          >
            <p>{{ index + 1 }} {{ question }}</p>
            <p class="font-bold tracking-wide">
              {{ answer }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="bg-blue-900 border-[3px] border-blue-900 text-white px-2 py-1 rounded-lg hover:bg-white hover:text-blue-900 tracking-wide hover:tracking-widest transition-all duration-300 fixed right-2 bottom-12 z-10 font-bold"
      @click="$router.push('/view')"
    >
      Main menu
    </button>
  </div>
</template>

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
        if (response["data"]["applicaitons"]) {
          this.committeeApplicants = response["data"]["applicaitons"];
        } else {
          this.$router.push("/view");
        }
      })
      .then.catch((error) => {
        console.error(error);
      });
  },
  props: ["committee"],
};
</script>

<style></style>
