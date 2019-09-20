'use strict';


const hoverLink = document.querySelector('#hover');
const hoverPopup = document.querySelector('.hover');
const closeButton = document.querySelector('.hover__close');
const escCode = 27;

const onEscPress = function (evt) {
	if (evt.keyCode === escCode) {
		closePopup();
	}
}

const openPopup = function () {
	hoverPopup.classList.remove('hidden');
	document.addEventListener('keydown', onEscPress)
};

const closePopup = function () {
	hoverPopup.classList.add('hidden');
	document.removeEventListener('keydown', onEscPress)
};

closePopup();

hoverLink.addEventListener('click', function (evt) {
	evt.preventDefault();

	openPopup();
});

closeButton.addEventListener('click', function (evt) {
	evt.preventDefault();

	closePopup();
});
