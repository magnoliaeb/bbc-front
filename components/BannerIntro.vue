<template>
	<div class="banner">
		<img
			:src="
				require(`../assets/imgs/${path}/${
					$vuetify.breakpoint.smAndDown ? bgSm : bg
				}.png`)
			"
			:alt="bg"
			class="grey lighten-3"
		/>
		<div class="overline d-flex justify-center">
			<div class="content fill-height banner-box">
				<v-row
					class="
						align-end
						pb-10 pb-md-0
						pt-md-10
						align-md-center
						fill-height
					"
				>
					<v-col cols="12">
						<h2 class="text-center" v-html="title"></h2>
					</v-col>
				</v-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'title',
		},
		bg: {
			type: String,
			default: 'title',
			required: true,
		},
		path: {
			type: String,
			default: 'path',
			required: true,
		},
		bgSm: {
			type: String,
			default: 'title',
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.banner {
	height: 197px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	background-color: $gray;
}

.overline {
	height: 100%;
	width: 100%;
	// opacity: 0.6188227;
	// background: rgba(13, 59, 124, 0.61);
	position: absolute;
}

img {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
}

.banner-box {
	position: absolute;
}
h2 {
	color: $white;
	text-transform: uppercase;

	font-weight: 300;
	font-size: 20px;
	line-height: 27px;

	/* identical to box height */
	letter-spacing: 0.195em;
}

@media screen and (min-width: $sm) {
	h2 {
		font-size: 23px;
	}
}
@media screen and (min-width: $md) {
	.banner {
		height: 273px;
	}
}
</style>
