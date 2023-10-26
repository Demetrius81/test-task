"use strict";

const btnEls = Array.from(document.querySelectorAll("button"));
const logoEl = document.querySelector(".logo");

btnEls.forEach(btn =>
    btn.addEventListener("click", () =>
        alert("This is a test page")));

logoEl.addEventListener("click", () =>
    window.location.href = 'index.html', true);