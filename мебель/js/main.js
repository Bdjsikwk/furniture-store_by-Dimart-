// код выпадашки
const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for(let btn of infoBtns) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();

        for (let hint of infoHints) {
            hint.classList.add('none');
        }

        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
}
// закрытие при клике по любом месте страницы
document.addEventListener('click', closeHints);

function closeHints () {
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
}

for (let hint of infoHints) {
    hint.addEventListener('click', (e) =>e.stopPropagation());
}

// слайдер

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // freeMode: true,
    // Navigation arrows
    slidesPerView: 1,
    spaceBetween: 42,

     breakpoints: {
         320: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         640: {
           slidesPerView: 2,
           spaceBetween: 40,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
         1440: {
           slidesPerView: 4,
           spaceBetween: 50,
         }
     },

    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
});

// табы 

const tabBtns = document.querySelectorAll('[data-tab]');

const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabBtns) {

    btn.addEventListener('click', function () {

    for (let btn of tabBtns) {
        btn.classList.remove('tab-control-btn--active')
    }

    this.classList.add('tab-control-btn--active');

    for (let product of tabsProducts) {

        if(product.dataset.tabValue === this.dataset.tab) {
            product.classList.remove('none');
        } else {
            product.classList.add('none');
        }

    }

    swiper.update()

    })
}

const mobNavOpenBtn = document.querySelector('#open-mob-nav-btn');
const mobNavCloseBtn = document.querySelector('#close-mob-nav-btn');
const mobNav = document.querySelector('#mob-nav');

mobNavOpenBtn.onclick = function () {
    mobNav.classList.add('mob-nav-wrapper--open');
};
mobNavCloseBtn.onclick = function () {
    mobNav.classList.remove('mob-nav-wrapper--open');
};