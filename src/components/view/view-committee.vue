<template>
  <p class="text-center text-white text-2xl font-bold">
    NO. applicant :<span class="font-bold tracking-wide">{{
      committeeApplicants.length
    }}</span>
  </p>
  <div class="flex flex-col gap-px">
    <div
      class="border-y text-white flex flex-col gap-1 p-2 w-full"
      v-for="i in committeeApplicants"
      :key="i"
    >
      <p>
        createdAt :
        <span class="font-bold tracking-wide">{{ i.createdAt }}</span>
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

      <div>
        <div
          v-for="(answer, question, index) in i.committeeAnswers"
          :key="question"
        >
          <p>
            0<span class="font-bold tracking-wide">{{ index }}</span
            >-{{ question }} :{{ answer }}
          </p>
        </div>
      </div>
    </div>
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
        this.committeeApplicants = response["data"]["applicaitons"];
      })
      .catch((error) => {
        console.error(error);
      });
  },
  props: ["committee"],
};
</script>

<style></style>
