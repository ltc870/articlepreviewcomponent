"use strict";

const shareBtn = document.getElementById("share");
console.log(shareBtn);
const footer = document.querySelector("#footer");
console.log(footer);
const socialMedia = document.querySelector("#social-media");
console.log(socialMedia);
const socialMediaShare = document.querySelector("#social-media-share");
console.log(socialMediaShare);

shareBtn.addEventListener("click", (event) => {
    socialMedia.classList.toggle("show");
    event.currentTarget.classList.toggle("active");
});
