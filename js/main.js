"use strict";

// =====================
// DOM ELEMENTS
// =====================
const video = document.getElementById("bg-video");
const changeBtn = document.getElementById("change-bg");
const aboutBtn = document.getElementById("about-btn");
const closeAbout = document.getElementById("close-about");
const modal = document.getElementById("about-modal");
const rainBtn = document.getElementById("rain-toggle");
const rainAudio = document.getElementById("rain-audio");
const typedText = document.getElementById("typed-text");

// =====================
// VIDEO BACKGROUNDS
// =====================
const videos = [
    "assets/videos/cafe.mp4",
    "assets/videos/rain.mp4",
    "assets/videos/city.mp4"
];

let currentVideo = 0;

changeBtn.addEventListener("click", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    video.src = videos[currentVideo];
    video.play();
});

// =====================
// ABOUT MODAL
// =====================
aboutBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeAbout.addEventListener("click", () => modal.classList.add("hidden"));

// =====================
// RAIN AUDIO TOGGLE
// =====================
let raining = false;

rainBtn.addEventListener("click", () => {
    if (!raining) {
        rainAudio.volume = 0.4;
        rainAudio.currentTime = 0;
        rainAudio.muted = false;
        rainAudio.play().catch(err => console.log("Audio play error:", err));
        rainBtn.textContent = "rain: on";
    } else {
        rainAudio.pause();
        rainBtn.textContent = "rain: off";
    }

    raining = !raining;
});

// =====================
// TYPING EFFECT
// =====================
const text = "afterhours";
let charIndex = 0;

function typeEffect() {
    if (charIndex < text.length) {
        typedText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 200);
    }
}

// Start typing effect
typeEffect();
