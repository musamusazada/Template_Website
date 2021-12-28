"use strict";

//Vanilla
window.onload = () => {
  //Navigation Menu Handling
  handleNavMenu();
  handleSubMenu();
  //Handling Main Slider Background
  handleMainSlider();
  function handleMainSlider() {
    const sliderItems = document.querySelectorAll(".swiper-slide");
    const mainSlider = document.querySelector(".main-slider");
    sliderItems.forEach((el) => {
      el.addEventListener("mouseover", () => {
        sliderItems.forEach((el) => el.classList.remove("swiper-slide-active"));
        el.classList.add("swiper-slide-active");
        const imgIndex = el.getAttribute("data-swiper-slide-index");
        mainSlider.style.backgroundImage = `url('./assets/img/main-slider-imgs/slider-img-${imgIndex}.jpg')`;
      });
    });
  }
  function handleNavMenu() {
    const navLinks = document.querySelectorAll(".menu-act");
    const menus = document.querySelectorAll(".menu");
    navLinks.forEach((el) => {
      el.addEventListener("mouseover", () => {
        menus.forEach((el) => {
          el.style.height = "";
          el.style.overflow = "hidden";
        });
        el.nextElementSibling.style.height =
          el.nextElementSibling.scrollHeight + "px";
        el.nextElementSibling.style.overflow = "visible";
        el.nextElementSibling.firstElementChild.nextElementSibling.classList.remove(
          "d-none"
        );
      });
      menus.forEach((el) =>
        el.addEventListener("mouseleave", () => {
          el.style.height = "";
          el.style.overflow = "hidden";
        })
      );
    });
  }
  function handleSubMenu() {
    const subActs = document.querySelectorAll(".sub-act");
    const allMenus = document.querySelectorAll(".sub-menu");

    subActs.forEach((el) =>
      el.addEventListener("mouseover", () => {
        const tgl = el.getAttribute("data-toggle");
        const menu = document.querySelector(`.${tgl}`);
        console.log(menu);
        allMenus.forEach((el) => el.classList.add("d-none"));
        menu.classList.remove("d-none");
      })
    );
  }
};

$(document).ready(function () {
  let swiper = new Swiper(".main-slider", {
    slidesPerView: 4,
    spaceBetween: 3,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  });
});
