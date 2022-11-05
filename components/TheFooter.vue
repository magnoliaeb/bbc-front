<template>
	<v-footer padless class="footer">
		<div class="content mb-lg-10">
			<v-row
				class="
					justify-center justify-md-space-between
					mt-10
					pb-2 pb-lg-0
				"
			>
				<!-- logo -->
				<v-col
					cols="auto"
					md="12"
					lg="auto"
					class="d-flex justify-center align-center"
				>
					<nuxt-link to="/" class="">
						<img
							class="logo"
							src="../assets/imgs/logo-blanco.png"
							alt="logo"
						/>
					</nuxt-link>
				</v-col>

				<!-- address -->
				<v-col
					cols="10"
					sm="8"
					md="4"
					lg="3"
					class="pb-8 pb-lg-0"
					tag="address"
				>
					<h3 class="mb-2 text-center">Dirección</h3>
					<p class="text-center">
						Camino a san isidro km 0+400. Interior servidumbre de
						paso circuito novo tech II No. 26 de ejido san isidro
						silao de la victoria Gto. CP. 36294
					</p>
				</v-col>

				<!-- contacto -->
				<v-col
					cols="10"
					sm="8"
					md="3"
					lg="auto"
					class="pb-8 pb-lg-0"
					tag="address"
				>
					<h3 class="mb-2 text-center">Contáctanos</h3>
					<ul class="text-center">
						<li class="">
							<a href="tel:+5214772439292">(477) 243 92 92</a>
						</li>

						<li class="">
							<a href="mailto:info@bbcleon.com"
								>info@bbcleon.com</a
							>
						</li>
					</ul>
				</v-col>
				<v-col
					cols="10"
					sm="8"
					md="3"
					lg="auto"
					class="pb-8 pb-lg-0"
					tag="address"
				>
					<h3 class="mb-2 text-center">Atencion a clientes</h3>
					<ul class="text-center">
						<li class="">
							<p>24 horas</p>
						</li>

						<li class="">
							<p>7 días de la semana</p>
						</li>
					</ul>
				</v-col>
			</v-row>
		</div>
		<v-row class="justify-center bottom d-flex align-center mb-3">
			<v-col cols="12">
				<div class="content">
					<small
						class="
							text-center
							d-flex
							flex-column flex-sm-row
							align-center
						"
						><nuxt-link
							:to="{ name: 'aviso-de-privacidad' }"
							class="mb-2 mb-sm-0"
							>Aviso de privacidad
						</nuxt-link>
						<span class="text-decoration-none"
							>© Copyright bbc
						</span></small
					>
				</div>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
	background: $primary !important;
	position: relative !important;
	overflow: hidden !important;
	color: $white;
	flex-direction: column;
}
* {
	font-style: normal;
}
.img-brand {
	object-fit: contain;
	max-height: 140px;
}
.img-brand-min {
	max-height: 90px;
	object-fit: contain;
}

h3 {
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 0.025em;

	color: #ffffff;
}

a,
p {
	font-weight: 300;
	font-size: 12px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 0.025em;

	color: #ffffff;
}

a {
	&:hover {
		// color: $primary;
		// opacity: 0.6;
		text-decoration: underline;
	}
}

.logo {
	width: 236px;
	height: 153px;
}

.bottom {
	height: 66px;
	background: #1c4122;
	border-radius: 14px;
	width: 95%;
	margin: 0;
	small {
		color: $white;
	}
	a,
	span {
		line-height: 11px;
		font-size: 13px;
		font-style: italic;
		font-weight: 600;
		color: $white !important;
		&:hover {
			text-decoration: underline;
		}
	}
}

@media screen and (min-width: $md) {
	// a,
	// p {
	// 	font-size: 15px;
	// }

	// .bottom {
	// 	height: 43px;
	// 	a,
	// 	span {
	// 		font-size: 15px;
	// 	}
	// }
}
</style>
