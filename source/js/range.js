'use strict';

let lowerSlider = document.querySelector('#lower');
let upperSlider = document.querySelector('#upper');
let lowerValue = +lowerSlider.value;
let upperValue = +upperSlider.value;
let num = 4;

upperSlider.addEventListener('input', function () {
	lowerValue = +lowerSlider.value;
	upperValue = +upperSlider.value;

	if (lowerValue < upperValue + num) {
		upperSlider.value = lowerValue - num;

		if (upperValue == upperSlider.min) {
			lowerSlider.value = num;
		}
	}
});

lowerSlider.addEventListener('input', function () {
	lowerValue = +lowerSlider.value;
	upperValue = +upperSlider.value;

	if (lowerValue > upperValue - num) {
		upperSlider.value = lowerValue + num;

		if (upperValue == upperSlider.max) {
			lowerSlider.value = +upperSlider.max - num;
		}
	}
});
