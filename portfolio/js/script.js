const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      pageUp =  document.querySelector('.pageup'),
      promo = document.querySelector('.promo'),
      hamburgerSpan = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.progress__item-percent'),
      lines = document.querySelectorAll('.progress__item-line span');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const menulink = document.querySelectorAll('.menu__link');

menulink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});


//Scroll up
const promoHeight = promo.offsetHeight;

document.addEventListener('scroll', () => {
    if(window.scrollY > 1600) {
        pageUp.style.display = 'block';
    } else {
        pageUp.style.display = 'none';
    }
    if(window.scrollY > promoHeight - 20) {
        hamburgerSpan.forEach(item => {
            item.style.background = '#000';
        });
    } else {
        hamburgerSpan.forEach(item => {
            item.style.background = '#FFF';
        });
    }
})

pageUp.addEventListener('click', () => {
    window.scrollTo(0,0);
});
