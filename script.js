var header = document.getElementById("header");
var menuButton = document.getElementById("menu-button");
var menuBox = document.getElementById("menu-box");
var logoImage = document.getElementById("logo-image");
var sliderContainer = document.getElementById("slider-container");
var slides = sliderContainer.getElementsByClassName("slide");

menuButton.addEventListener("mouseenter", function () {
  menuBox.classList.add("show");
});

menuBox.addEventListener("mouseleave", function () {
  menuBox.classList.remove("show");
});

window.addEventListener("scroll", function () {
  var headerHeight = header.offsetHeight;
  var sliderContainerOffset = 0;

  var sliderContainerOffset =
    sliderContainer.offsetTop + sliderContainer.offsetHeight;

  if (window.pageYOffset >= sliderContainerOffset - headerHeight) {
    header.classList.add("scrolled");
    menuButton.classList.add("scrolled");
    menuBox.classList.add("scrolled");
    logoImage.src = "04.png";
  } else {
    header.classList.remove("scrolled");
    menuButton.classList.remove("scrolled");
    menuBox.classList.remove("scrolled");
    logoImage.src = "03.png";
  }
});
