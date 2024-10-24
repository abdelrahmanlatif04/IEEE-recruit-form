<template>
  <form
    class="max-w-[500px] w-full mx-auto flex justify-center items-center pt-4 min-h-screen px-2 border shadow bg-gray-500"
    @submit.prevent="handleSubmit()"
  >
    <main-info v-if="state == 1" @forward="state++" />
    <add-info v-else-if="state == 2" @forward="state++" @back="state--" />
    <committee-form
      :committee="committee"
      v-else
      @submit="handleSubmit"
      @back="state--"
    />
  </form>
</template>

<script>
import addInfo from "./form/add-form.vue";
import mainInfo from "./form/main-form.vue";
import committeeForm from "./form/committee-form.vue";
export default {
  data() {
    return {
      state: 1,
      data: [],
      committee: null,
    };
  },

  methods: {
    handleSubmit() {
      console.log("done");
    },
  },
  components: {
    addInfo,
    mainInfo,
    committeeForm,
  },
};
</script>

<style>
label {
  @apply text-xl text-white font-semibold tracking-widest cursor-pointer;
}
</style>
