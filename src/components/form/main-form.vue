<template>
  <div class="w-full flex flex-col items-center">
    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
      <label for="name">Name : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="text"
        id="name"
        name="name"
        placeholder="Ahmed Hossam Mido"
        v-model="name"
      />
      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.name"
      >
        Enter a valid name
      </p>
    </div>

    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
      <label for="email">Email : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="email"
        id="email"
        name="email"
        placeholder="AnaAslanWadMo4kela@hotmail.com"
        v-model="email"
      />
      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.email"
      >
        Enter a valid Email
      </p>
    </div>

    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
      <label for="id">National ID : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="number"
        id="id"
        name="id"
        v-model="id"
        placeholder="12345678901234"
      />
      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.id"
      >
        Enter a valid ID
      </p>
    </div>
    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
      <label for="tel">Phone Number : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="tel"
        id="tel"
        name="tel"
        v-model="tel"
        placeholder="+201234567890"
      />
      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.tel"
      >
        Enter a valid Number
      </p>
    </div>
    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
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
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-px tracking-wide rounded-md w-11/12 mx-auto"
        type="text"
        placeholder="في حضن بابا و ماما"
        v-if="university === 'other'"
        v-model="otherUni"
      />

      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.university"
      >
        Enter a University
      </p>
    </div>

    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
      <label for="faculty">Faculty : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="text"
        id="faculty"
        name="faculty"
        v-model="faculty"
        placeholder="كلية الشعب"
      />
      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.faculty"
      >
        Enter a valid Faculty
      </p>
    </div>

    <div class="flex flex-col gap-3 w-full pt-0 pb-7 relative">
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
      <p
        class="text-red-500 absolute right-0 bottom-0 font-semibold w-full tracking-widest text-center"
        v-if="!validation.year"
      >
        Enter an Academic year
      </p>
    </div>

    <div class="flex flex-col justify-center items-center gap-2">
      <button
        type="button"
        @click="move"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-2 border-white transition-all duration-300 font-semibold tracking-wide hover:bg-white hover:text-blue-700 hover:tracking-widest"
      >
        Move to next section
      </button>
      <router-link
        to="/"
        class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-2 border-white transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:bg-white hover:tracking-widest"
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
      otherUni: null,

      validation: {
        name: true,
        email: true,
        id: true,
        tel: true,
        university: true,
        faculty: true,
        year: true,
      },
    };
  },
  computed: {
    validate() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex =
        /^(\+2011|2011|011|\+2012|2012|012|\+2010|2010|010|\+2015|2015|015)\d{8}$/;

      this.validation.name = this.name ? true : false;
      this.validation.email = emailRegex.test(this.email);
      this.validation.id = this.id ? true : false;
      this.validation.tel = phoneRegex.test(this.tel);
      if (this.university === "other") {
        this.validation.university = this.otherUni ? true : false;
      } else if (this.university) {
        this.validation.university = this.university ? true : false;
      } else {
        this.validation.university = false;
      }
      this.validation.faculty = this.faculty ? true : false;
      this.validation.year = this.year ? true : false;
      for (let i in this.validation) {
        if (!this.validation[i]) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    move() {
      if (this.validate) this.$emit("forward");
    },
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
    otherUni(newValue) {
      useRegisterStore().user.otherUni = newValue;
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
    this.otherUni = useRegisterStore().user.otherUni;
    this.faculty = useRegisterStore().user.faculty;
    this.year = useRegisterStore().user.year;
  },
};
</script>
