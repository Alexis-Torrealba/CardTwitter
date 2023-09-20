const box = document.querySelector('#button');
const img = document.querySelector('#heart');
const text = document.querySelector('#text-red');

let active = false;

const activeImg = () => {
	if (!active) {
		active = true;
		img.src = 'HeartAfter.svg';
		text.innerHTML = '251';
		text.classList.add('redd');
	} else {
		active = false;
		img.src = 'Heart.svg';
		text.innerHTML = '250';
		text.classList.remove('redd');
		img.classList.remove('shadowActive');
	}
};

img.addEventListener('click', activeImg);
