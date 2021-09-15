const slider = new Swiper('.slider__body', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	speed: 800,
	loop: true,
	pagination: {
		el: '.slider__pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: "auto",
			spaceBetween: 20,
		},
	},
});

let menuSlider = new Swiper('.menu__body', {
	observer: true,
	observeParents: true,
	spaceBetween: 0,
	centeredSlides: true,
	autoHeight: false,
	speed: 800,
	slidesPerView: "auto",
	initialSlide: 1,
});
const mediaQuerySize = 768;
const sliderMenu = document.querySelector('.menu__body');

if (sliderMenu) {
	function menuSliderInit () {
		if (!menuSlider) {
			menuSlider = new Swiper('.menu__body', {
				observer: true,
				observeParents: true,
				spaceBetween: 0,
				centeredSlides: true,
				autoHeight: false,
				speed: 800,
				slidesPerView: "auto",
				initialSlide: 1,
			});
		}
	}
	
	function menuSliderDestroy () {
		if (menuSlider) {
			menuSlider.destroy();
			menuSlider = null;
		}
	}

	if (window.innerWidth >= mediaQuerySize) {
		menuSliderDestroy();
	} else {
		menuSliderInit();
	}

	window.addEventListener('resize', function() {
		if (window.innerWidth >= mediaQuerySize) {
			menuSliderDestroy();
		} else {
			menuSliderInit();
		}
	});
}

//Menu
let unlock = true;
const iconMenu = document.querySelector(".header__burger");
if (iconMenu != null) {
	let delay = 500;
	const menuBody = document.querySelector(".menu-header");
	const menuLogo = document.querySelector(".header__logo");
	const menuLang = document.querySelector(".lang_c");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			menuLogo.classList.toggle("_active");
			menuLang.classList.toggle("_active");
		}
	});
};
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}