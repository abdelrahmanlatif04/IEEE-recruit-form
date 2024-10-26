<template>
  <div class="flex flex-col gap-1">
    <div v-for="i in committeeApplicants" :key="i">
      <p>
        Name :
        {{ i.name }}
      </p>

      <p>
        Email :
        {{ i.email }}
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
