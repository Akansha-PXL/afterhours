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
const typingBtn = document.getElementById("typing-toggle");
const cafeBtn = document.getElementById("cafe-toggle");
const typingAudio = document.getElementById("typing-audio");
const cafeAudio = document.getElementById("cafe-audio");


const vibes = [
    {
        name: "sunset",
        video: "assets/videos/sunset.mp4",
        playlist: "placeholder-1"
    },
    {
        name: "rainy city",
        video: "assets/videos/rain.mp4",
        playlist: "placeholder-2"
    },
    {
        name: "night drive",
        video: "assets/videos/city.mp4",
        playlist: "placeholder-3"
    }
];

let currentVibe = 0;

function applyVibe(vibe) {
    video.src = vibe.video;
    video.play();

    // placeholder for future music logic
    console.log("Current playlist:", vibe.playlist);
}


changeBtn.addEventListener("click", () => {
    currentVibe = (currentVibe + 1) % vibes.length;
    applyVibe(vibes[currentVibe]);
});


aboutBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeAbout.addEventListener("click", () => modal.classList.add("hidden"));


let raining = false;

rainBtn.addEventListener("click", () => {
    if (!raining) {
        rainAudio.volume = 0.7;
        rainAudio.currentTime = 0;
        rainAudio.muted = false;
        rainAudio.play().catch(err => console.log(err));
    } else {
        rainAudio.pause();
    }
    raining = !raining;
});

let typingOn = false;
typingBtn.addEventListener("click", () => {
    if (!typingOn) {
        typingAudio.volume = 0.7;
        typingAudio.currentTime = 0;
        typingAudio.play().catch(err => console.log(err));
    } else {
        typingAudio.pause();
    }
    typingOn = !typingOn;
});


let cafeOn = false;
cafeBtn.addEventListener("click", () => {
    if (!cafeOn) {
        cafeAudio.volume = 0.7;
        cafeAudio.currentTime = 0;
        cafeAudio.play().catch(err => console.log(err));
    } else {
        cafeAudio.pause();
    }
    cafeOn = !cafeOn;
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

applyVibe(vibes[currentVibe]);
