"use strict";


const video = document.getElementById("bg-video");
const changeBtn = document.getElementById("change-bg");
const aboutBtn = document.getElementById("about-btn");
const closeAbout = document.getElementById("close-about");
const modal = document.getElementById("about-modal");
const rainBtn = document.getElementById("rain-toggle");
const rainAudio = document.getElementById("rain-audio");
const rainLabel = rainBtn.querySelector(".btn-label");
const typedText = document.getElementById("typed-text");


const videos = [
    "assets/videos/sunset.mp4",
    "assets/videos/rain.mp4",
    "assets/videos/city.mp4"
];

let currentVideo = 0;

changeBtn.addEventListener("click", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    video.src = videos[currentVideo];
    video.play();
});


aboutBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeAbout.addEventListener("click", () => modal.classList.add("hidden"));


let raining = false;

rainBtn.addEventListener("click", () => {
    if (!raining) {
        rainAudio.volume = 0.6;
        rainAudio.currentTime = 0;
        rainAudio.muted = false;
        rainAudio.play().catch(err => console.log(err));
    } else {
        rainAudio.pause();
    }
    raining = !raining;
});



const text = "afterhours";
let charIndex = 0;

function typeEffect() {
    if (charIndex < text.length) {
        typedText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();
