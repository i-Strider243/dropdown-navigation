/* Menu Button */
const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", function() {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// For Drop Down List Items

const listItem1 = document.querySelector(".drop-down-list-1");
const listItem2 = document.querySelector(".drop-down-list-2");
const listToggle1 = document.querySelector("#list-toggle-1");
const listToggle2 = document.querySelector("#list-toggle-2");


listToggle1.addEventListener("click", function () {
    const expanded = listItem1.getAttribute("data-visible");

    if (expanded === "false") {
        listItem1.setAttribute("data-visible", true);
        listToggle1.setAttribute("aria-expanded", true);
    } else if (expanded === "true") {
        listItem1.setAttribute("data-visible", false);
        listToggle1.setAttribute("aria-expanded", false);
    }
})

listToggle2.addEventListener("click", function (e) {
    const expanded = listItem2.getAttribute("data-visible");

    if (expanded === "false") {
        listItem2.setAttribute("data-visible", true);
        listToggle2.setAttribute("aria-expanded", true);
    } else if (expanded === "true" || (e.target !== listItem2 && e.target !== listToggle2)) {
        listItem2.setAttribute("data-visible", false);
        listToggle2.setAttribute("aria-expanded", false);
    }
})

/* Function to close drop-menu on click outside them */
window.addEventListener('click', function(e) {
    if (e.target !== listItem1 && e.target !== listToggle1) {
        listItem1.setAttribute("data-visible", false);
        listToggle1.setAttribute("aria-expanded", false);
    }
})

window.addEventListener('click', function(e) {
    if (e.target !== listItem2 && e.target !== listToggle2) {
        listItem2.setAttribute("data-visible", false);
        listToggle2.setAttribute("aria-expanded", false);
    }
})
