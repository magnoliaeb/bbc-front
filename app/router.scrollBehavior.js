import goTo from 'vuetify/lib/services/goto';

const options = {
	number: 0,
	duration: 4000,
	offset: 10,
	easing: 'easeInOutCubic',
};

export default function (to, from, savedPosition) {
	let scrollTo = 0;

	if (to.hash) {
		scrollTo = to.hash;
	} else if (savedPosition) {
		scrollTo = savedPosition.y;
	}

	return goTo(scrollTo, options);
}
