let hamburger = document.getElementById("hamburger");
let menuHam = document.getElementById("menu-hamburger");
let menuProduct = document.getElementById("productsMenu");

let navHam = document.getElementById("nav-hamburger");
let menu = document.getElementById("menu");
let body = document.body;

function openMenu() {
    navHam?.classList.remove("flex");
    navHam?.classList.add("hidden");
    menu?.classList.remove("hidden");
    menu?.classList.add("flex");
    body?.classList.add("overflow-y-hidden");
    console.log("Clicked Open");
}

function closeMenu() {
    navHam?.classList.remove("hidden");
    navHam?.classList.add("flex");
    menu?.classList.remove("flex");
    menu?.classList.add("hidden");
    body?.classList.remove("overflow-y-hidden");
    console.log("Clicked Close");
}

hamburger?.addEventListener("click", openMenu);
menuHam?.addEventListener("click", closeMenu);
menuProduct?.addEventListener("click", closeMenu);