"use strict";

/* ELEMENTS */
const video = document.getElementById("bg-video");

const aboutBtn = document.getElementById("about-btn");
const closeAbout = document.getElementById("close-about");
const modal = document.getElementById("about-modal");

const rainBtn = document.getElementById("rain-toggle");
const typingBtn = document.getElementById("typing-toggle");
const cafeBtn = document.getElementById("cafe-toggle");

const rainAudio = document.getElementById("rain-audio");
const typingAudio = document.getElementById("typing-audio");
const cafeAudio = document.getElementById("cafe-audio");

const stationName = document.getElementById("station-name");
const nowPlaying = document.getElementById("now-playing");
const nextStationBtn = document.getElementById("next-station");

const typedText = document.getElementById("typed-text");

/* VIBES */
const vibes = [
    { name: "sunset", video: "assets/videos/sunset.mp4" },
    { name: "rainy city", video: "assets/videos/rain.mp4" },
    { name: "night drive", video: "assets/videos/city.mp4" }
];

let currentVibe = 0;

function applyVibe(vibe) {
    video.pause();
    video.src = vibe.video;
    video.load();
    video.play();

    stationName.textContent = vibe.name;
    nowPlaying.textContent = "lofi • placeholder";
}

nextStationBtn.addEventListener("click", () => {
    currentVibe = (currentVibe + 1) % vibes.length;
    applyVibe(vibes[currentVibe]);
});

/* MODAL */
aboutBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeAbout.addEventListener("click", () => modal.classList.add("hidden"));

/* AMBIENT AUDIO */
function toggleAudio(audio, state) {
    if (!state.on) {
        audio.volume = 0.7;
        audio.currentTime = 0;
        audio.play().catch(() => {});
    } else {
        audio.pause();
    }
    state.on = !state.on;
}

const rain = { on: false };
const typing = { on: false };
const cafe = { on: false };

rainBtn.addEventListener("click", () => toggleAudio(rainAudio, rain));
typingBtn.addEventListener("click", () => toggleAudio(typingAudio, typing));
cafeBtn.addEventListener("click", () => toggleAudio(cafeAudio, cafe));

/* TITLE TYPE */
const text = "afterhours";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typedText.textContent += text[index++];
        setTimeout(typeEffect, 200);
    }
}

typeEffect();

/* INIT */
applyVibe(vibes[currentVibe]);
// ========================
// AFTERHOURS WINDOW CAT
// ========================

const catToggleBtn = document.getElementById("cat-toggle");
const catContainer = document.getElementById("cat-container");
const cat = document.getElementById("cat");
const catHeart = document.getElementById("cat-heart");

let catVisible = false;
let catState = "idle"; // "idle" | "sleeping" | "happy"
let lastInteraction = Date.now();
const sleepDelay = 12000; // 12 seconds

// --- Toggle cat on/off ---
catToggleBtn.addEventListener("click", () => {
    catVisible = !catVisible;
    if (catVisible) {
        catContainer.classList.remove("hidden");
        lastInteraction = Date.now();
        catState = "idle";
        cat.src = "assets/images/cat-idle.png";
    } else {
        catContainer.classList.add("hidden");
    }
});

// --- Click cat ---
cat.addEventListener("click", () => {
    lastInteraction = Date.now();

    if (catState === "sleeping") {
        // Wake up
        catState = "idle";
        cat.src = "assets/images/cat-idle.png";
    }

    // Show heart pop
    catHeart.classList.remove("hidden");
    setTimeout(() => {
        catHeart.classList.add("hidden");
    }, 800);

    // Optional: small happy animation
    catState = "happy";
    setTimeout(() => {
        if (catState === "happy") catState = "idle"; // return to idle after animation
    }, 800);
});

// --- Idle timer to sleep ---
setInterval(() => {
    if (!catVisible) return; // do nothing if cat is hidden

    const now = Date.now();
    if (catState !== "sleeping" && now - lastInteraction > sleepDelay) {
        catState = "sleeping";
        cat.src = "assets/images/cat-sleep.png";
    }
}, 1000);

