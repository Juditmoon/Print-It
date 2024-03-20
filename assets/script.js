const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


let i = 0;

function updateBanner() {
	const image = "./assets/images/slideshow/" + slides[i].image;
	const tagLine = slides[i].tagLine;

	document.querySelector('.banner-img').src = image;
	document.querySelector('.tagLine').innerHTML = tagLine;

	// remove dot selected
	document.querySelector('.dots > .dot_selected').classList.remove('dot_selected');

	// add class to current dot
	const newSelectedDot = document.querySelector(`.dots :nth-child(${i + 1})`);

	newSelectedDot.classList.add('dot_selected');
}

function previousHandler() {
	i--;
	if (i < 0) {
		i = slides.length - 1;
	}
	updateBanner();
}

function nextHandler() {
	i++;
	if (i > slides.length - 1) {
		i = 0;
	}
	updateBanner();
}

function carousel(banner) {
	banner.querySelector(".arrow_left").addEventListener("click", () => previousHandler());
	banner.querySelector(".arrow_right").addEventListener("click", () => nextHandler());
}

document.addEventListener("DOMContentLoaded", () => {
	let banner = document.getElementById("banner");

	carousel(banner);
});
