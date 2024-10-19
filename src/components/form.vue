<template>
  <form
    class="bg-red-600 max-w-[500px] w-full mx-auto flex justify-center items-center h-screen px-2"
    @submit.prevent="handleSubmit()"
  >
    <main-info v-if="state == 1" @move="state++" />
    <add-info v-else-if="state == 2" @move="state++" />
    <committee-info :committee="committee" v-else @submit="handleSubmit" />
  </form>
</template>

<script>
import addInfo from "./form/add-form.vue";
import mainInfo from "./form/main-form.vue";
import committeeInfo from "./form/committee-form.vue";
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
    committeeInfo,
  },
};
</script>
