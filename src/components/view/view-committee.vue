<template>
	<div>
		<p class="text-center text-white text-2xl font-bold py-4">
			NO. applicant : {{ committeeApplicants?.length }}
		</p>
		<div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<view-applicant
				v-for="i in committeeApplicants"
				:key="i"
				:applicant="i"
			/>
		</div>

		<button
			class="bg-blue-900 border-[3px] border-blue-900 text-white px-2 py-1 rounded-lg hover:bg-white hover:text-blue-900 tracking-wide hover:tracking-widest transition-all duration-300 fixed right-2 bottom-12 z-10 font-bold"
			@click="$router.push('/view')"
		>
			Main menu
		</button>
	</div>
</template>

<script>
import axios from "axios";
import viewApplicant from "./view-applicant.vue";

export default {
	data() {
		return {
			committeeApplicants: null,
		};
	},

	methods: {
		getData() {
			const apiKey = "your_MangaMan_APIKEY_Wherever_You_Keep_It";
			const url = `https://ieee-recruitment-production.up.railway.app/api/v1/boody/${this.committee}`;
			// const url = `http://localhost:9000/api/v1/boody/${this.committee}`;
			axios
				.get(url, {
					headers: {
						"x-api-key": apiKey,
					},
				})
				.then((response) => {
					if (response["data"]["applicaitons"]) {
						this.committeeApplicants = response["data"]["applicaitons"];
					} else {
						this.$router.push("/view");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
	mounted() {
		this.getData();
	},

	components: {
		viewApplicant,
	},
	props: ["committee"],
};
</script>

<style></style>
