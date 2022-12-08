//убрать скролл на странице
const noScroll = function() {
  document.body.classList.toggle('noscroll');
}
//функция для смены класса у блока
const changeActiveBlock = function(block, nameClass) {
  block.classList.toggle(`${nameClass}`)
}
//анимация бургер-меню
const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => {
  changeActiveBlock(headerBurger, 'active');
})

// открытие и закрытие навигации в мобильной версии
const mobilePopup = document.querySelector(".mobile-popup");
const menu = document.querySelector(".header__nav-list").cloneNode(1);

headerBurger.addEventListener('click', openPopup);

function openPopup(e) {
  e.preventDefault();
  changeActiveBlock(mobilePopup,'open');
  renderPopup();
  noScroll();
}

function renderPopup() {
  mobilePopup.appendChild(menu);
}

menu.addEventListener('click', function() {
  changeActiveBlock(mobilePopup,'open');
  noScroll();
  changeActiveBlock(headerBurger,'active');
})

//движение стир.машинки
document.addEventListener("DOMContentLoaded", function () {
    
    let layer = document.querySelector('.washer');
    document.addEventListener('mousemove', (event) => {
            layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 6) + 'px,' + ((event.clientY * 0.1) / 6) + 'px,0px)';
    });
    
});

//закрытие popup в main 

const popupMain = document.querySelector('.popup');
const popupMainClose = document.querySelector('.popup-close');

popupMainClose.addEventListener('click', () => {
    popupMain.style.display ='none';
})

//показать все цены

const shoAllPrice = document.querySelector('#price-btn');
const hiddenPrices = document.querySelectorAll('.more-items');
const priceIcon = document.querySelector('.price-icon');

shoAllPrice.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenPrices.forEach(price => price.classList.add('active'));
    shoAllPrice.innerText = '';
})
priceIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if(shoAllPrice.innerText == '') {
        hiddenPrices.forEach(price => price.classList.remove('active'));
        shoAllPrice.innerText = 'Показать все цены';
    }
})
//слайдеры
new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
    speed: 500,
});

new Swiper('.review-swiper', {
    navigation: {
		nextEl: '.next2',
		prevEl: '.prev2'
	},
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1010: {
          slidesPerView: 2,
          spaceBetween: 40
        }
    }
});

// раскрывающийся список вопросов

const questionButtons = document.querySelectorAll('.question__btn');

questionButtons.forEach(btn => btn.addEventListener('click', function() {
    changeActiveBlock(btn, 'active-content');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
}))

// скролл к форме обратного звонка

const forColl = document.querySelectorAll('.forCall');
const callForm = document.querySelector('.callback');

forColl.forEach(item => item.onclick = function() {
    callForm.scrollIntoView({block: 'center',  behavior: 'smooth'});
})

// появление скрытого блока онлайн диагностики
const hiddenDiagnosticBlock = document.querySelector('.hidden-diagnosticBlock');
const problems = document.querySelectorAll('.grid-item');
const closeDiagnosticBlock = document.querySelector('.hidden-diagnosticBlock__back');

problems.forEach(problem => problem.addEventListener('click', function() {
    changeActiveBlock(hiddenDiagnosticBlock, 'close');
    noScroll();
}))

closeDiagnosticBlock.addEventListener('click', function() {
    changeActiveBlock(hiddenDiagnosticBlock, 'close');
    noScroll();
})


// появление блока проблем на мобилке 

const btnDiagnostic = document.querySelector('.diagnostics__body-btn');
const blockProblems = document.querySelector('.grid-container');
btnDiagnostic.addEventListener('click', function() {
  changeActiveBlock(blockProblems, 'flex-container');
})
