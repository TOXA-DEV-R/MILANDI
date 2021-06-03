let swiper_01 = new Swiper(".swiper-01", {
  pagination: {
    el: ".swiper-pagination",
  },
});
let swiper_02 = new Swiper(".swiper-02", {});
let swiper_03 = new Swiper(".swiper-03", {});
let swiper_04 = new Swiper(".swiper-04", {});
let swiper_05 = new Swiper(".swiper-05", {});

// navbar
window.addEventListener("resize", navbarFunc);
navbarFunc();
function navbarFunc() {
  let navbarNav = document.querySelector(".navbar nav");
  let headerHat = document.querySelector(".header-hat");
  if (window.document.body.offsetWidth < 992) {
    navbarNav.innerHTML = "";
    navbarNav.innerHTML = `<div class="navbar-mobil-left">
    <button class="btn-bars">
      <i class="ic ic_bars"></i>
    </button>
    <a href="/" class="logo"><img src="./images/logo.svg" alt="logo"></a>
  </div>
  <div class="navbar-mobil-right">
            <button class="btn-cart">
              <i class="ic ic_cart"></i>
            </button>
          </div>
  `;
  } else {
    navbarNav.innerHTML = "";
    navbarNav.innerHTML = `<div class="col-auto navbar-left">
    <a href="/" class="logo"><img src="./images/icons/MILANDI.svg" alt="logo"></a>
    <ul class="navbar-items">
      <li class="navbar-item">
        <a href="/" class="navbar-link">Главная</a>
      </li>
      <li class="navbar-item">
        <a href="/" class="navbar-link">О нас</a>
      </li>
      <li class="navbar-item">
        <a href="/" class="navbar-link">Категории</a>
      </li>
      <li class="navbar-item">
        <a href="/" class="navbar-link">Сотрудничество</a>
      </li>
    </ul>
  </div>
  <div class="col-auto navbar-right">
            <button class="btn-exit">Войти</button>
            <a href="/" class="registration">Зарегистрироваться</a>
            <button class="btn-carts"><i class="ic ic_cart"></i><span></span>
            </button>
          </div>
  `;
  }
  if (window.document.body.offsetWidth < 576) {
    headerHat.innerHTML = "";
  } else {
    headerHat.innerHTML = `<div class="container">
    <div class="translate">
      <span>RU</span>
      <span class="active">UZB</span>
    </div>
  </div>`;
  }
}
// / navbar
