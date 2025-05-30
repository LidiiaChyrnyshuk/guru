const swiper1 = new Swiper(".swiper-1", {
	speed: 1000,
	loop: true,
	spaceBetween: 10,
	freeMode: true,
	slidesPerView: 4.5,
	freeModeMomentum: false,
	allowTouchMove: false,
	simulateTouch: false,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 8.5,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 10.5,
			spaceBetween: 20,
		},
	},
});

const swiper2 = new Swiper(".swiper-2", {
	speed: 1000,
	loop: true,
	spaceBetween: 8,
	slidesPerView: 1.3,
	centeredSlides: false,
	grabCursor: true, 
});

const swiper3 = new Swiper(".swiper-3", {
	speed: 1000,
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1.5,
	centeredSlides: false,
	grabCursor: true, 
});

const swiper4 = new Swiper(".swiper-4", {
	speed: 2000,
	loop: true,
	spaceBetween: 20,
	slidesPerView: 3,
	allowTouchMove: false,
	simulateTouch: false,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
	},
});
