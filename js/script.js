let menuBtn = document.querySelector('.menu-btn');
let header_nav = document.querySelector('.header_nav');
let header_logo = document.querySelector('.header_logo');
let hidden_menu = document.querySelector('.hidden_menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	header_nav.classList.toggle('active');
	header_logo.classList.toggle('active');
	hidden_menu.classList.toggle('active');
})
