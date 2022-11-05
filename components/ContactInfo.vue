<template>
	<section class="py-16">
		<v-row class="justify-center">
			<v-col cols="auto" class="">
				<div
					class="
						card-item
						px-4
						text-center
						d-flex
						justify-center
						align-center
					"
				>
					<div class="">
						<div class="icon mb-6">
							<img
								src="../assets/imgs/contacto/icono-tel.svg"
								alt="icono-tel"
							/>
						</div>
						<p>
							<a href="tel:+5214772439292">(477) 243 92 92</a>
							Servicio 24/7
						</p>
					</div>
				</div>
			</v-col>
			<v-col cols="auto" class="">
				<div
					class="
						card-item
						px-4
						text-center
						d-flex
						justify-center
						align-center
					"
				>
					<div class="">
						<div class="icon mb-6">
							<img
								src="../assets/imgs/contacto/icono-sobre.svg"
								alt="icono-sobre"
							/>
						</div>
						<p>
							<a href="mailto:info@bbcleon.com"
								>info@bbcleon.com</a
							>
						</p>
					</div>
				</div>
			</v-col>
			<v-col cols="auto" class="">
				<div
					class="
						card-item
						px-4
						text-center
						d-flex
						justify-center
						align-center
					"
				>
					<div class="">
						<div class="icon mb-6">
							<img
								src="../assets/imgs/contacto/icono-pin.svg"
								alt="icono-pin"
							/>
						</div>
						<p>
							Camino a san isidro km 0+400. Interior servidumbre
							de paso circuito novo tech II No. 26 de ejido san
							isidro silao de la victoria Gto. CP. 36294
						</p>
					</div>
				</div>
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
	data() {
		return {
			facebookLink: process.env.FACEBOOK,
			instagramLink: process.env.INSTAGRAM,
		};
	},
};
</script>

<style lang="scss" scoped>
p,
a {
	font-weight: 300;
	font-size: 12px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 0.025em;
	color: #000000;
}
p {
	min-height: 100px;
	// background-color: orange;
}

a:hover {
	color: $primary;
	text-decoration: underline;
}
.card-item {
	width: 273px;
	height: 273px;
	border: 2px solid $primary;
	border-radius: 16px;
}

.icon {
	height: 48px;
	width: 48px;
	display: block;
	margin: 0 auto;
	img {
		height: 100%;
		width: 100%;
	}
}

@media screen and (min-width: $sm) {
	.icon {
		height: 58px;
		width: 58px;
	}
}
</style>
