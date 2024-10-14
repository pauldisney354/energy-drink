"use strict";
// Dynamic background color change
document.getElementById('color-button').addEventListener('click', function() {
    let color = prompt("What's your favorite color?");
    document.body.style.backgroundColor = color;
});

// Greeting based on time of day
let now = new Date();
let hour = now.getHours();
let greetingMessage;

if (hour < 12) {
    greetingMessage = "Good morning!";
} else if (hour < 18) {
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}

document.getElementById('greeting').textContent = greetingMessage;

// Interactive counter
let count = 0;
document.getElementById('counter-button').addEventListener('click', function() {
    count++;
    document.getElementById('counter').textContent = "Count: " + count;
});