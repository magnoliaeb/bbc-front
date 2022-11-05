<template>
	<div>
		<BannerIntro
			:title="'contáctanos'"
			:path="'unidades'"
			:bg="'banner'"
			:bgSm="'banner'"
		/>
		<div class="content">
			<ContactInfo />
		</div>
		<ContactMap />
		<div class="content">
			<ContactForm />
		</div>
	</div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import ContactInfo from '../components/ContactInfo.vue';
import ContactMap from '../components/ContactMap.vue';
export default {
	components: { ContactMap, ContactForm, ContactInfo },
	head: {
		title: 'Contácto',
	},
};
</script>

<style lang="scss" scoped></style>
