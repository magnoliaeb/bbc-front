<template>
	<div class="py-16 contact-form">
		<v-row>
			<v-col cols="12">
				<h2 class="mb-2">Envíanos un mensaje</h2>
				<p>
					Un asesor se pondrá en contacto contigo lo más pronto
					posible
				</p>
			</v-col>
		</v-row>
		<v-row class="justify-center">
			<v-col cols="12" lg="10" xl="9">
				<validation-observer ref="form" v-slot="{ invalid }">
					<v-form @submit.prevent="sendForm" class="mt-10">
						<v-row class="">
							<v-col class="py-0" cols="12" md="12" lg="6">
								<validation-provider
									v-slot="{ errors }"
									name="El nombre"
									rules="required"
								>
									<v-text-field
										placeholder="Nombre"
										required
										id="name"
										ref="name"
										type="text"
										v-model.trim="form.name"
										solo
										height="70px"
										flat
										outlined
										:error-messages="errors"
									/>
								</validation-provider>
							</v-col>
							<v-col class="py-0" cols="12" md="12" lg="6">
								<validation-provider
									v-slot="{ errors }"
									name="El teléfono"
									:rules="{
										required: true,
									}"
								>
									<v-text-field
										required
										placeholder="Teléfono"
										id="phone"
										ref="phone"
										type="text"
										v-model.trim="form.phone"
										solo
										flat
										height="70px"
										outlined
										:error-messages="errors"
									/>
								</validation-provider>
							</v-col>
							<v-col class="py-0" cols="12" md="12" lg="12">
								<validation-provider
									v-slot="{ errors }"
									name="El correo"
									rules="required|email"
								>
									<v-text-field
										required
										placeholder="Correo"
										id="email"
										ref="email"
										type="email"
										v-model.trim="form.email"
										solo
										flat
										height="70px"
										outlined
										:error-messages="errors"
									/>
								</validation-provider>
							</v-col>

							<v-col cols="12" class="py-0">
								<validation-provider
									v-slot="{ errors }"
									name="El mensaje"
									rules="required"
								>
									<v-textarea
										requierd
										placeholder="Mensaje"
										outlined
										ref="body"
										v-model.trim="form.body"
										id="body"
										auto-grow
										flat
										:row-height="35"
										solo
										:error-messages="errors"
									></v-textarea>
								</validation-provider>
							</v-col>

							<v-col class="" cols="12">
								<v-btn
									color="primary"
									:loading="isLoading"
									:disabled="isDisabled && invalid"
									type="submit"
									block
									depressed
									>Enviar</v-btn
								>
							</v-col>
						</v-row>
					</v-form>
				</validation-observer>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
	name: 'RegisterForm',
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	data() {
		return {
			isDisabled: false,
			isLoading: false,
			showAlert: false,
			form: {
				name: null,
				phone: null,
				email: null,
				whatsapp: null,
				body: null,
			},
		};
	},
	methods: {
		async sendForm() {
			this.isDisabled = true;
			if (await this.$refs.form.validate()) {
				this.isLoading = true;
				await this.recaptcha();
				const data = {
					...this.form,
				};
				try {
					await this.$axios.post('/contact-form', data);
					this.$nuxt.$emit('success-notify', 'Enviado con éxito');
					this.clear();
				} catch (error) {
					console.log(error);
					this.$nuxt.$emit(
						'error-notify',
						'Error al enviar el formulario'
					);
				}

				this.isDisabled = false;
				this.isLoading = false;
			} else {
				// console.log("here");
				const inputForm = Object.keys(this.form);
				for (let i = 0; i < inputForm.length; i++) {
					const element = inputForm[i];
					if (this.$refs[element].hasError) {
						this.$refs[element].focus();
						return;
					}
				}
			}
		},
		async recaptcha() {
			// (optional) Wait until recaptcha has been loaded.
			await this.$recaptchaLoaded();

			// Execute reCAPTCHA with action "login".
			const recaptcha = await this.$recaptcha('contactForm');
			this.form.token = recaptcha;

			// Do stuff with the received token.
		},
		clear() {
			this.form = {
				name: null,
				phone: null,
				email: null,
				body: null,
			};
			this.$refs.form.reset();
		},
	},
	template: '<button @click="recaptcha">Execute recaptcha</button>',
};
</script>

<style lang="scss" scoped>
section {
	background: #f7f7f7;
}
button {
	height: 61px !important;
	background: $primary !important;
	border-radius: 59px !important;
	font-weight: 700 !important;
	font-size: 19px !important;
	line-height: 22px !important;
	letter-spacing: 0.025em !important;
	text-transform: initial !important;
}
h2 {
	font-weight: 700;
	font-size: 25px;
	line-height: 29px;
	text-align: center;
	letter-spacing: 0.025em;
	color: $black;
}

p {
	font-weight: 300;
	font-size: 18px;
	line-height: 174.69%;
	/* or 31px */

	text-align: center;
	letter-spacing: 0.025em;

	color: $black;
}

@media screen and (min-width: $sm) {
	// button {
	// 	// width: 267px !important;
	// 	height: 60px !important;
	// 	font-size: 17px !important;
	// }
}
</style>
