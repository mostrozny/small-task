import Swiper from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
    //SWIPER
        const mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            flipEffect: {
                rotate: 30,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        });
});
