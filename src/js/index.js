"use strict";

const shareBtn = document.getElementById("share");
const socialMedia = document.querySelector("#social-media");

shareBtn.addEventListener("click", (event) => {
    socialMedia.classList.toggle("show");
    event.currentTarget.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (
        !socialMedia.contains(event.target) &&
        !shareBtn.contains(event.target)
    ) {
        shareBtn.classList.remove("active");
        socialMedia.classList.remove("show");
    }
});
