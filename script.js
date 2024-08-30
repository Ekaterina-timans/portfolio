const navLinks = document.querySelectorAll('.header__navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));

        link.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cardsSwiperElement = document.querySelector('.project__cards');
    const modalImagesSwiperElement = document.querySelector('.project__modal-images.images');

    if (cardsSwiperElement) {
        new Swiper('.project__cards', {
            effect: "cards",
            cardsEffect: {
                perSlideOffset: 15,
                perSlideRotate: 3,
                rotate: true,
                slideShadows: true,
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

// Функция для показа модального окна
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Обработчик нажатия на карточку
cards.forEach(card => {
    card.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        showModal(modalId);
    });
});

// Обработчик нажатия на кнопку закрытия
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