let menuBtn = document.querySelector('.menu-btn');
let header_nav = document.querySelector('.header_nav');
let header_logo = document.querySelector('.header_logo');
let logo_button2 = document.querySelector('.logo_button2');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	header_nav.classList.toggle('active');
	header_logo.classList.toggle('active');
	logo_button2.classList.toggle('active');
})
