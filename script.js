const navLinks = document.querySelectorAll('.header__navbar a');
const navLinksMin = document.querySelectorAll('.header__nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));

        link.classList.add('active');
    });
});

navLinksMin.forEach(link => {
    link.addEventListener('click', () => {
        navLinksMin.forEach(link => link.classList.remove('active'));

        link.classList.add('active');
    });
});

function changeActiveLink() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector('.header__navbar a[href="#' + section.id + '"]');
            console.log(activeLink)
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}
window.addEventListener('scroll', changeActiveLink);

const menu = document.querySelector('.header__menu-min');
menu.addEventListener('click', () =>  {
    document.querySelector('.header__menu-bar').classList.toggle('change');
    document.querySelector('.header__nav').classList.toggle('change');
    document.querySelector('.header__menu-bg').classList.toggle('change-bg');
});

document.addEventListener('DOMContentLoaded', function () {
    const cardsSwiperElement = document.querySelector('.project__cards');
    const modalImagesSwiperElement = document.querySelector('.project__modal-images.images');

    if (cardsSwiperElement) {
        new Swiper('.project__cards', {
            effect: "cards",
            cardsEffect: {
                slideShadows: true
            },
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }

    if (modalImagesSwiperElement) {
        new Swiper('.project__modal-images.images', {
            effect: "carousel",
            slidesPerView: 'auto',
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
});

const modals = document.querySelectorAll('.project__modal');
const cards = document.querySelectorAll('.project__card');
const closeButtons = document.querySelectorAll('.project__modal-close');
const overlay = document.querySelector('.window-background');

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
}

cards.forEach(card => {
    card.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        showModal(modalId);
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        var modal = this.closest('.project__modal');
        if (modal) {
            closeModal(modal.id);
        }
    });
});

overlay.addEventListener('click', function() {
    modals.forEach(modal => {
        closeModal(modal.id);
    });
});