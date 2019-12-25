const wrappBlockLeft = document.querySelectorAll('.wrapp-block-left');

const leftSidebar = document.querySelector('.left-sidebar');

wrappBlockLeft.forEach(function (div) {
	const btn = div.querySelector('.btn-sidebar');
	btn.onclick = function () {
		sectionLength(rightSidebar, leftSidebar, roulSection);
		leftSidebar.classList.toggle('show-sidebar');

	};
});

const chatScroll = document.querySelector(".right-wrapp");
const shadowHide = document.querySelector(".gradient-block");


chatScroll.addEventListener('scroll', function () {
	if (chatScroll.scrollTop !== 0) {

		shadowHide.classList.add("activ-shadows");
	} else {
		shadowHide.classList.remove("activ-shadows");
	}

});
const massageWrapp = document.querySelector('.massage-btn_mobile');
const massageBtn = document.querySelector('.massage-btn');
const roulSection = document.querySelector('.roulette-section');
const rightSidebar = document.querySelector('.right-sidebar-section');

const showDesk = document.querySelector('.show-desk-chat');
let widthSections = '';


function active(a, b) {
	a.classList.toggle(b);
}

// function widthSection(q, w, e, r) {
// 	let list = w.classList.contains(e)
// 	if (list) {
// // 		r.style.left = '7%';
// // 		r.style.transform = 'translateX(-50 %)';

// // 	} else {
// // 		r.style.left = '';
// // 		r.style.transform = '';

// // 	}

// // }





function onFlip(event) {
	const block = event.target;
	active(rightSidebar, 'show-chat');
	// widthSection(massageBtn, rightSidebar, 'show-chat', roulSection);
}

function deskSidebar(event) {
	const block = event.target;
	active(rightSidebar, 'show-desk-chat');
	// widthSection(massageBtn, rightSidebar, 'show-desk-chat', roulSection);
	// sectionLength(rightSidebar, leftSidebar, roulSection);
}

// function sectionLength(a, b, c) {
// 	let chatRight = a.classList.contains('show-desk-chat');
// 	let chatLeft = b.classList.contains('show-sidebar');
// 	if (chatLeft && chatRight) {
// 		c.classList.add('show-sidebar');
// 	} else {
// 		c.classList.remove('show-sidebar');
// 	}
// }
// sectionLength(rightSidebar, leftSidebar, roulSection);






const butFilter = document.querySelectorAll('.filter');

function classActive(block) {
	block.classList.add('filter-active');
}

function resetBtn() {
	butFilter.forEach(function (button) {
		const isActive = button.classList.contains('filter-active');
		if (isActive) {
			button.classList.remove('filter-active');
		}
	});
}

function onFilter(event) {
	const block = event.target;
	resetBtn();
	classActive(block);

}


const buttons = document.querySelectorAll('.button-radio');

function setActive(block) {
	block.classList.add('button-active')
}

function resetAllButtons() {
	buttons.forEach(function (button) {

		const isActive = button.classList.contains('button-active')
		if (isActive) {
			button.classList.remove('button-active')
		}
	})
}

function onClick(event) {
	const block = event.target

	resetAllButtons();
	setActive(block)
}



const hide = document.querySelectorAll('.hide-block');


hide.forEach(function (div) {
	let btn = div.querySelector('.hide-paragraph');

	let span = div.querySelector('span');
	let slow = div.querySelector('.slow-block');

	btn.onclick = function () {
		slow.classList.toggle('active-block');
		span.classList.toggle('arrow');
	}
});


const smileBtn = document.querySelector('.chat-write-smile');
const smileBlock = document.querySelector('.smile-block-wrapp');

smileBtn.onclick = function () {
	smileBlock.classList.toggle('smileShow');
};




const shopWrap = document.querySelector('.shop-wrap');

const shopWrapMobil = document.querySelector('.shop-wrap-mobil');


const shopBtn = document.querySelectorAll('.currency-btn');
shopBtn.forEach(function (btn) {
	btn.onclick = function () {
		shopWrap.classList.toggle('shop-active');
	};


});
let round = document.querySelector('.round');

if (round) {
	let deadline = '2020-1-22';
	initializeClock('countdown', deadline);
	console.log(deadline);

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.now();
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));


		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function initializeClock(id, endtime) {
		let clock = document.getElementById(id);
		let daysSpan = clock.querySelector('.days');
		let hoursSpan = clock.querySelector('.hours');
		let minutesSpan = clock.querySelector('.minutes');
		let secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		let timeinterval = setInterval(updateClock, 1000);
	}

} else {

}

let criptoBlock = document.querySelectorAll('.cripto-block__form');

let x = 'x';

criptoBlock.forEach(function (div) {

	let btnPlus = div.querySelector('.cripto-block__dateplus');

	let btnMin = div.querySelector('.cripto-block__datemin');

	let input = div.querySelector('.cripto-block__input');

	input.onkeypress = function (event) {
		event = event || window.event;
		if (event.charCode && (event.charCode < 48 || event.charCode > 57))
			return false;
	}

	btnPlus.addEventListener('click', function () {
		if (input.value > 0) {
			input.value--;
		} else {
			return;
		}

	})
	btnMin.addEventListener('click', function () {
		input.value++;


	})
});
