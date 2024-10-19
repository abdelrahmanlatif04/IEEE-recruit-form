<template>
  <div class="border">
    <div>
      <label for="name">Name : </label>
      <input
        class="border shadow-md focus:outline-none"
        type="text"
        id="name"
      />
    </div>
    <div>
      <div>
        <label for="email">Email : </label>
        <input
          class="border shadow-md focus:outline-none"
          type="email"
          id="email"
        />
      </div>
      <div>
        <label for="tel">Phone Number : </label>
        <input
          class="border shadow-md focus:outline-none"
          type="tel"
          id="tel"
        />
      </div>
      <div>
        <label>University : </label>
        <select name="uni" v-model="university">
          <option value="AASTMT">AASTMT</option>
          <option value="Aswan">Aswan</option>
          <option value="EELU">EELU</option>
          <option value="other">Other</option>
        </select>
        <input
          v-if="university == 'other'"
          type="text"
          placeholder="enter your university"
        />
      </div>

      <div>
        <label for="faculty">Faculty : </label>
        <input
          class="border shadow-md focus:outline-none"
          type="text"
          id="faculty"
        />
      </div>

      <div>
        <label for="year">Academic Year : </label>
        <select name="" id="" v-model="university">
          <option value="prep">prep</option>
          <option v-for="n in 5" :value="n" :key="n">{{ n }}</option>
        </select>
        <input
          v-if="university == 'other'"
          type="text"
          placeholder="enter your university"
        />
      </div>
    </div>
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
};
</script>

<style></style>
