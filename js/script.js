// ***************** ПЛАВНЫЙ СКРОЛЛ ДО БЛОКА ***************** //


// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}

// ***************** ЗАДАВАНИЕ КЛАССА ШАПКЕ ***************** //

//Записываем, сколько проскроллено по вертикали
let scrollpos = window.scrollY

const header = document.querySelector("header")

//Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
const scrollChange = 5

//Функция, которая будет добавлять класс
const add_class_on_scroll = () => header.classList.add("header__scroll")
const remove_class_on_scroll = () => header.classList.remove("header__scroll")

//Отслеживаем событие "скролл"
window.addEventListener('scroll', function () {
   scrollpos = window.scrollY;

   //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
   if (scrollpos >= scrollChange) { add_class_on_scroll() }
   else { remove_class_on_scroll() }
})

// ***************** SWIPER ***************** //
// иницилизируется swiper
const swiper = new Swiper('.swiper-about', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },

   spaceBetween: 20,
   slidesPerView: 1.5,
});

const swiper__testimonials = new Swiper('.swiper-testimonials', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-testimonials__swiper-button-next',
      prevEl: '.swiper-testimonials__swiper-button-prev',
   },

   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },

   breakpoints: {
      768: {
         spaceBetween: 100,
         slidesPerView: 2,
      },
      528: {
         spaceBetween: 60,
         slidesPerView: 1.5,
      },
      320: {
         spaceBetween: 40,
         slidesPerView: 1,
      }
   },
});