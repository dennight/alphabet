var menu = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        796: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
