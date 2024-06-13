"use strict";
// Helper functions
function enableDarkMode() {
    // 1. Add class ".dark-mode" to body
    body.classList.add("dark-mode");
    // 2. Set local storage "theme" to "dark"
    localStorage.setItem("theme", "dark");
}
function disableDarkMode() {
    // 1. Remove class ".dark-mode" from body
    body.classList.remove("dark-mode");
    // 2. Set local storage "theme" to "light"
    localStorage.setItem("theme", "light");
}
function switchStyle(new_style) {
    // We attach the class name of the style to the different style buttons using individual click event listeners
    let current_style = localStorage.getItem("style");
    if (current_style) { // If we have a value in localStorage
        if (current_style == new_style) { // If the new style matches localStorage then only add it to the body, doesnt matter if its already there
            body.classList.add(style);
        }
        else { // Replace old style in both the body & localStorage
            body.classList.replace(current_style, new_style);
            localStorage.setItem("style", new_style);
        }
    }
    else {
        body.classList.add(new_style);
        localStorage.setItem("style", new_style);
    }
}
// DOM Elements
const body = document.body;
const toggleStyleSwitcher = document.getElementById("toggle-style-switcher");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const pinkButton = document.getElementById("style-pink");
const blueButton = document.getElementById("style-blue");
const orangeButton = document.getElementById("style-orange");
const yellowButton = document.getElementById("style-yellow");
const greenButton = document.getElementById("style-green");
// Get cached theme & style from local storage, these are only referenced on refresh
const theme = localStorage.getItem("theme");
const style = localStorage.getItem("style");
// Apply the cached theme & style on reload
if (theme === "dark") {
    enableDarkMode();
}
if (style) {
    switchStyle(style);
}
// Theme Event Listeners
darkModeToggle.addEventListener("click", () => {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme !== "dark") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});
// Style Event Listeners
pinkButton.onclick = () => {
    switchStyle("style-pink");
};
blueButton.onclick = () => {
    switchStyle("style-blue");
};
orangeButton.onclick = () => {
    switchStyle("style-orange");
};
yellowButton.onclick = () => {
    switchStyle("style-yellow");
};
greenButton.onclick = () => {
    switchStyle("style-green");
};
// Style Switcher Popup
toggleStyleSwitcher.onclick = () => {
    document.querySelector(".style-switcher").classList.toggle("open");
};