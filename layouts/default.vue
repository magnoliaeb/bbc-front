<template>
	<v-app dark>
		<TheHeader />

		<v-main class="pa-0">
			<v-container fluid class="pa-0">
				<Nuxt class="animate__animated animate__fadeIn" />
			</v-container>
		</v-main>
		<AlertSweet />

		<TheFooter />
	</v-app>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import AlertSweet from '../components/AlertSweet.vue';
export default {
	components: { TheFooter, AlertSweet, TheHeader },
};
</script>

<style lang="scss" scoped></style>
