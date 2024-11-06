<template>
  <form
    class="max-w-[500px] w-full mx-auto flex justify-center items-center p-4 min-h-screen px-2 shadow-xl bg-blue-900 shadow-slate-800"
    @submit.prevent="handleSubmit()"
  >
    <form-closed v-if="isFormClosed" />
    <div class="w-full" v-else>
      <main-info v-if="state == 1" @forward="state++" />
      <add-info v-else-if="state == 2" @forward="state++" @back="state--" />
      <committee-form
        :committee="committee"
        v-else
        @submit="handleSubmit"
        @back="state--"
      />
    </div>
  </form>
</template>

<script>
import addInfo from "./form/add-form.vue";
import mainInfo from "./form/main-form.vue";
import committeeForm from "./form/committee-form.vue";
import FormClosed from "./form/form-closed.vue";
export default {
  data() {
    return {
<<<<<<< HEAD
      isFormClosed: !false,
=======
      isFormClosed:true,
>>>>>>> 5be899a87287737ef0db4d89d661159fa4c4431c
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
    FormClosed,
  },
};
</script>

<style>
label {
  @apply text-xl text-white font-semibold tracking-widest cursor-pointer;
}
</style>
