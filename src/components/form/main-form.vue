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
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="id">National ID : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="number"
        id="id"
        name="id"
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
      <input
        v-if="university == 'other'"
        class="shadow-md focus:outline-none text-sm px-2 py-1 tracking-wider rounded-md w-4/5 mx-auto"
        type="text"
        placeholder="في حضن بابا و ماما"
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="faculty">Faculty : </label>
      <input
        class="shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        type="text"
        id="faculty"
        name="faculty"
        placeholder="كلية الشعب"
      />
    </div>

    <div class="flex flex-col gap-3 w-full">
      <label for="year">Academic Year : </label>
      <select
        class="cursor-pointer shadow-md focus:outline-none text-lg px-2 py-1 tracking-wider rounded-md"
        name=""
        id="year"
        v-model="university"
      >
        <option value="prep">prep</option>
        <option v-for="n in 5" :value="n" :key="n">{{ n }}</option>
      </select>
    </div>

    <button
      type="button"
      @click="move()"
      class="bg-blue-700 text-white px-2 py-1 rounded-lg text-2xl border-[3px] border-blue-700 transition-all duration-300 font-semibold tracking-wide hover:bg-transparent hover:text-blue-700 hover:tracking-widest"
    >
      Move to next section
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      phoneNumber: null,
      university: null,
      faculty: null,
      academicYear: null,
    };
  },
  methods: {
    move() {
      this.$emit("move");
    },
  },
};
</script>
