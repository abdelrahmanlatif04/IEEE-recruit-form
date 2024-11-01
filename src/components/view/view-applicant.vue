<template>
  <div
    class="max-w-sm min-w- p-6 mx-auto my-auto relative bg-white shadow-lg rounded-lg overflow-hidden"
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
    <p class="text-gray-600 absolute left-1/2 -translate-x-1/2 top-0">
      {{ applicant.createdAt }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data() {
        return {};
      },
    };
  },
  props: ["applicant"],
};
</script>

<style></style>
