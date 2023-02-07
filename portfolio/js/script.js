const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      pageup =  document.querySelector('.pageup');

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
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});
pageup.addEventListener('click', () => {
    window.scrollTo(0,0);
});