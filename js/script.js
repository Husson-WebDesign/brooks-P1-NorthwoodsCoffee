// JavaScript will be developed in a later phase.

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

});