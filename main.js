// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryHeader = document.getElementById('primary-header');

const form = document.getElementById('form');
const email = document.getElementById('email');

navToggle.addEventListener('click', (e) => {
  console.log(e.target);
  const visible = primaryNav.getAttribute('data-visible');

  console.log(visible);

  if (visible === 'false') {
    navToggle.setAttribute('aria-expanded', true);
    primaryNav.setAttribute('data-visible', true);
    primaryHeader.setAttribute('data-overlay', true);
  } else {
    navToggle.setAttribute('aria-expanded', false);
    primaryNav.setAttribute('data-visible', false);
    primaryHeader.setAttribute('data-overlay', false);
  }
});

// Check email
function checkEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value === '' || !checkEmail(email.value)) {
    console.log(e.target);
    const formControl = e.target.parentElement;
    const small = formControl.querySelector('small');
    small.style.visibility = 'visible';
    small.textContent = 'Please enter a valid email';
  } else {
    const formControl = e.target.parentElement;
    const small = formControl.querySelector('small');
    small.style.visibility = 'hidden';
  }

  email.value = '';
});

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    autoHeight: true,
    loop: true,
    grabCursor: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      pagination: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1020: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

initSwiper();
