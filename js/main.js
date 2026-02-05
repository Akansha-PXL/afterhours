"use strict";

const video = document.getElementById("bg-video");
const changeBtn = document.getElementById("change-bg");
const aboutBtn = document.getElementById("about-btn");
const closeAbout = document.getElementById("close-about");
const modal = document.getElementById("about-modal");

const videos = [
    "assets/videos/cafe.mp4",
    "assets/videos/rain.mp4",
    "assets/videos/city.mp4"
];

let current = 0;

// Change background video
changeBtn.addEventListener("click", () => {
    current = (current + 1) % videos.length;
    video.src = videos[current];
    video.play();
});

// About modal
aboutBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeAbout.addEventListener("click", () => {
    modal.classList.add("hidden");
});
const rainBtn = document.getElementById("rain-toggle");
const rainAudio = document.getElementById("rain-audio");

console.log("rain button:", rainBtn);
console.log("rain audio:", rainAudio);

let raining = false;

rainBtn.addEventListener("click", () => {
    console.log("rain button clicked");

    if (!raining) {
        rainAudio.volume = 0.4;
        rainAudio.currentTime = 0;
        rainAudio.muted = false;
        rainAudio.play().catch(err => console.log(err));
        rainBtn.textContent = "rain: on";
    } else {
        rainAudio.pause();
        rainBtn.textContent = "rain: off";
    }

    raining = !raining;
});

