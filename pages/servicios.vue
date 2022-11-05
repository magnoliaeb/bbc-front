<template>
	<div>
		<BannerIntro
			:title="'nuestros servicios'"
			:path="'unidades'"
			:bg="'banner'"
			:bgSm="'banner'"
		/>
		<div class="content">
			<OurServices />
		</div>
	</div>
</template>

<script>
import OurServices from '../components/OurServices.vue';
export default {
	components: { OurServices },
	head: {
		title: 'Nuestros servicios',
	},
};
</script>

<style lang="scss" scoped></style>
