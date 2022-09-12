"use strict";

const shareBtn = document.getElementById("share");
console.log(shareBtn);
const footer = document.querySelector("#footer");
console.log(footer);

shareBtn.addEventListener("click", () => {
    footer.classList.toggle("show");
});
