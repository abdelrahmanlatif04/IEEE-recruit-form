<template>
  <p class="text-center text-white text-2xl font-bold">
    NO. applicant : {{ committeeApplicants.length }}
  </p>
  <div class="flex flex-col gap-px">
    <div
      class="border text-white flex flex-col gap-1 p-2 w-fit whitespace-nowrap"
      v-for="i in committeeApplicants"
      :key="i"
    >
      <p>
        createdAt :
        {{ i.createdAt }}
      </p>
      <p>
        Name :
        {{ i.name }}
      </p>
      <p>
        Email :
        {{ i.email }}
      </p>
      <p>
        ID :
        {{ i.id }}
      </p>
      <p>
        Phone :
        {{ i.tel }}
      </p>
      <p>
        University :
        {{ i.university }}
      </p>
      <p>
        Faculty :
        {{ i.faculty }}
      </p>

      <p>
        Grade :
        {{ i.year }}
      </p>

      <p>
        How did u hear about us :
        {{ i.howDidUHear }}
      </p>

      <p>
        experience :
        {{ i.experience }}
      </p>

      <div>
        <div v-for="(question, answer) in i.committeeAnswers" :key="question">
          <p>{{ question }} : {{ answer }}</p>
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
