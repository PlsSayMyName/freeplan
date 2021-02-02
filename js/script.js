"use strict";

const clickButtonForm = document.querySelectorAll('.click-button-form');
const form1 = document.querySelector('.form-1');
const form2 = document.querySelector('.form-2');
const form3 = document.querySelector('.form-3');
const form4 = document.querySelector('.form-4');
const inputRadio = document.querySelectorAll('input[name="form-check"]');
const nextBtn = document.querySelector('.next-button');
const inputText = document.querySelector('input[type="text"]');
const prevBtn = document.querySelectorAll('.previous-button');

const buttonArray = [].forEach.call(clickButtonForm, function(el){
	el.addEventListener('click', function (e) {
		form1.style.display = 'flex';
	})
});

const inputCheck = [].forEach.call(inputRadio, function(el){
	el.addEventListener('click', function (e) {
		nextBtn.removeAttribute('disabled');
	})
});


form1.querySelector('.form-bottom button').onclick = function () {
	form1.style.display = 'none';
	form2.style.display = 'flex';
}
form2.querySelector('.form-bottom .button-box button:last-child').onclick = function () {
	form2.style.display = 'none';
	form3.style.display = 'flex';
}
form2.querySelector('.form-bottom .button-box button:first-child').onclick = function () {
	form2.style.display = 'none';
	form1.style.display = 'flex';
}
form3.querySelector('.form-bottom button').onclick = function () {
	form3.style.display = 'none';
	form2.style.display = 'flex';
}
form3.querySelector('.form-button-main-box .success-button').onclick = function () {
	form3.style.display = 'none';
	form4.style.display = 'flex';
}
