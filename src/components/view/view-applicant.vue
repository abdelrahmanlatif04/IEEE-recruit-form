<template>
  <div
    class="max-w-sm w-[450px] p-6 mx-auto my-auto relative bg-white shadow-lg rounded-lg overflow-hidden"
  >
    <h2 class="text-xl font-semibold text-gray-800 text-center">
      {{ applicant.name }}
    </h2>
    <p v-if="applicant.email" class="text-gray-600 mt-2">
      <strong>Email:</strong> {{ applicant.email }}
    </p>
    <p v-if="applicant.id" class="text-gray-600 mt-2">
      <strong>ID:</strong> {{ applicant.id }}
    </p>
    <p v-if="applicant.tel" class="text-gray-600 mt-2">
      <strong>Phone:</strong> {{ applicant.tel }}
    </p>
    <p v-if="applicant.university" class="text-gray-600 mt-2">
      <strong>University:</strong> {{ applicant.university }}
    </p>
    <p v-if="applicant.otherUni" class="text-gray-600 mt-2">
      <strong>Other University:</strong> {{ applicant.otherUni }}
    </p>
    <p v-if="applicant.faculty" class="text-gray-600 mt-2">
      <strong>Faculty:</strong> {{ applicant.faculty }}
    </p>
    <p v-if="applicant.year" class="text-gray-600 mt-2">
      <strong>Year:</strong> {{ applicant.year }}
    </p>
    <p v-if="applicant.howDidUHear" class="text-gray-600 mt-2">
      <strong>How Did You Hear:</strong> {{ applicant.howDidUHear }}
    </p>
    <p v-if="applicant.experience" class="text-gray-600 mt-2">
      <strong>Experience:</strong> {{ applicant.experience }}
    </p>
    <p v-if="applicant.committee" class="text-gray-600 mt-2">
      <strong>Committee:</strong> {{ applicant.committee }}
    </p>
    <div v-if="applicant.committeeAnswers" class="text-gray-600 mt-2">
      <strong>Committee Answers:</strong>
      <div v-for="(answer, i) in applicant.committeeAnswers" :key="answer">
        <div v-if="answer">
          <span class="font-semibold">{{ i }}:</span>
          <span>{{ answer }}</span>
        </div>
      </div>
    </div>
    <p v-if="applicant.space" class="text-gray-600 mt-2">
      <strong>Space:</strong> {{ applicant.space }}
    </p>
    <p
      class="text-gray-600 absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap"
    >
      {{ applicant.createdAt }}
    </p>
    <div class="w-full flex flex-col justify-center items-center mt-4 gap-2">
      <p class="text-2xl font-bold   text-[#1e40af]">
        {{ applicant.willMoveToPersonalInterview ? "Accepted" : "Rejected" }}
      </p>
      <div class="flex w-full justify-around">
        <button
          title="approve"
          class="p-2 w-10 h-10 text-white rounded-full bg-green-500 flex justify-center items-center"
          @click="SentResponse(applicant._id, true)"
        >
          <i class="pi pi-check"></i>
        </button>
        <button
          title="reject"
          class="p-2 w-10 h-10 text-white rounded-full bg-red-500 flex justify-center items-center"
          @click="SentResponse(applicant._id, false)"
        >
          <i class="pi pi-times"></i>
        </button>
      </div>
    </div>
    <a
      :href="`tel:` + applicant.tel"
      class="p-2 mt-2 rounded-md bg-[#1e40af] text-white flex justify-center items-center gap-2"
    >
      <span>Call</span>
      <i class="pi pi-phone"></i>
    </a>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import axios from "axios";

export default {
  data() {
    return {
      headChosen: false,
      data() {
        return {};
      },
    };
  },

  methods: {
    SentResponse(id, bool) {
      const apiKey = "your_MangaMan_APIKEY_Wherever_You_Keep_It";
      const url = `https://ieee-recruitment-production.up.railway.app/api/v1/boody/${id}`;
      // const url = `http://localhost:9000/api/v1/boody/${id}`;
      axios
        .post(
          url,
          { willMove: bool },
          {
            headers: {
              "x-api-key": apiKey,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.headChosen = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  props: ["applicant"],
  computed: {
    isHeadChosen() {
      return this.applicant.willMoveToPersonalInterview;
    },
  },
};
</script>

<style></style>
