<template>
  <div class="w-full flex flex-col items-center gap-5">
    <div class="flex flex-col gap-3 w-full">
      <label for="name">Name : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="text"
        id="name"
        name="name"
        placeholder="Ahmed Hossam Mido"
        v-model="name"
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="email">Email : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="email"
        id="email"
        name="email"
        placeholder="AnaAslanWadMo4kela@hotmail.com"
        v-model="email"
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="id">National ID : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="number"
        id="id"
        name="id"
        v-model="id"
        placeholder="12345678901234"
      />
    </div>
    <div class="flex flex-col gap-3 w-full">
      <label for="tel">Phone Number : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="tel"
        id="tel"
        name="tel"
        v-model="tel"
        placeholder="+201234567890"
      />
    </div>
    <div class="flex flex-col gap-3 w-full">
      <label for="uni">University : </label>
      <select
        class="cursor-pointer shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name="uni"
        id="uni"
        v-model="university"
      >
        <option value="Aswan">Aswan</option>
        <option value="AASTMT">AASTMT</option>
        <option value="EELU">EELU</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="faculty">Faculty : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="text"
        id="faculty"
        name="faculty"
        v-model="faculty"
        placeholder="كلية الشعب"
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="year">Academic Year : </label>
      <select
        class="cursor-pointer shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name=""
        id="year"
        v-model="year"
      >
        <option value="prep">prep</option>
        <option v-for="n in 5" :value="n" :key="n">{{ n }}</option>
      </select>
    </div>

    <div class="flex flex-col justify-center items-center gap-2">
      <button
        type="button"
        @click="this.$emit('forward')"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        Move to next section
      </button>
      <router-link
        to="/"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
      >
        main menu
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRegisterStore } from "../../stores/register";
export default {
  data() {
    return {
      name: null,
      email: null,
      id: null,
      tel: null,
      university: null,
      faculty: null,
      year: null,
    };
  },

  watch: {
    name(newValue) {
      useRegisterStore().user.name = newValue;
    },
    email(newValue) {
      useRegisterStore().user.email = newValue;
    },
    id(newValue) {
      useRegisterStore().user.id = newValue;
    },
    tel(newValue) {
      useRegisterStore().user.tel = newValue;
    },
    university(newValue) {
      useRegisterStore().user.university = newValue;
    },
    faculty(newValue) {
      useRegisterStore().user.faculty = newValue;
    },
    year(newValue) {
      useRegisterStore().user.year = newValue;
    },
  },
  mounted() {
    this.name = useRegisterStore().user.name;
    this.email = useRegisterStore().user.email;
    this.id = useRegisterStore().user.id;
    this.tel = useRegisterStore().user.tel;
    this.university = useRegisterStore().user.university;
    this.faculty = useRegisterStore().user.faculty;
    this.year = useRegisterStore().user.year;
  },
};
</script>
