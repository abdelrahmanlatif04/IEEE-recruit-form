<template>
  <div class="border">
    <div>
      <label for="howDidUHear">How did you hear about us? : </label>
      <select v-model="howDidUHear">
        <option value="friend">Friend</option>
        <option value="social media">Social Media</option>
        <option value="event">Event</option>
        <option value="other">Other</option>
      </select>

      <input
        v-if="howDidUHear == 'event'"
        type="text"
        v-model="event"
        placeholder="enter the event you knew us from"
        required
      />
      <input
        v-if="howDidUHear == 'other'"
        v-model="other"
        type="text"
        placeholder="How did you hear about us? : "
        required
      />
    </div>

    <div>
      <label for="experience">Mention your previous experience :</label>
      <textarea id="experience" type="text" />
    </div>

    <div>
      <label for="committee"
        >Select the committee you would like to join :
      </label>
      <select name="committee" id="committee">
        <option v-for="com in committees" :key="com" :value="com.ref">
          {{ com.name }}
        </option>
      </select>

      <!-- router link to committees job description -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      howDidUHear: null,
      experience: null,
      committee: null,
      event: null,
      other: null,
      committees: [
        {
          ref: "pr",
          name: "Public Relations",
        },
        {
          ref: "fr",
          name: "Fundraising",
        },
        {
          ref: "hr",
          name: "Human Resources",
        },
        {
          ref: "multimedia",
          name: "Multimedia",
        },
        {
          ref: "sm",
          name: "Social Media & Marketing",
        },
        {
          ref: "campus",
          name: "Campus",
        },
        {
          ref: "web",
          name: "Relations",
        },
      ],
    };
  },
};
</script>

<style></style>
