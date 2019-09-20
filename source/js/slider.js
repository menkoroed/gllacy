'use script';

const buttons = document.querySelectorAll('.banner__input');
const body = document.body;
const bannerImg = document.querySelector('.banner__img');
const bannerTitle = document.querySelector('.banner__title');

buttons.forEach(function (button) {
	button.addEventListener('click', function() {
		switch (button.id) {
			case 'first':
				body.classList.replace(body.className, 'frog');
				bannerImg.src = 'img/ice_cream.png';
				bannerImg.alt = 'Крем-брюле и пломбир с малиновым джемом';
				bannerTitle.textContent = 'Крем-брюле и пломбир с малиновым джемом';
				break;
			case 'second':
				body.classList.replace(body.className, 'manatee');
				bannerImg.src = 'img/ice_cream2.png';
				bannerImg.alt = 'Шоколадный пломбир и лимонный сорбет';
				bannerTitle.textContent = 'Шоколадный пломбир и лимонный сорбет';
				break;
			case 'third':
				body.classList.replace(body.className, 'craiola');
				bannerImg.src = 'img/ice_cream3.png';
				bannerImg.alt = 'Пломбир с помадкой и клубничный щербет';
				bannerTitle.textContent = 'Пломбир с помадкой и клубничный щербет';
				break;
			}
	})
});
