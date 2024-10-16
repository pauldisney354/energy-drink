"use strict"

// Dynamic background color change
function changeBackgroundColor(){
    let color = prompt("What's your favorite color?");
    document.body.style.background = color;
}
document.getElementById('color-button').addEventListener('click', changeBackgroundColor);

// Greeting based on time of day
function getGreetingMessage() {
    let now = new Date();
    let hour = now.getHours();

    if (hour < 12) {
        return "Good morning!";
    } else if (hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

// Set the greeting message in the DOM
document.getElementById('greeting').textContent = getGreetingMessage();

// Interactive counter
let count = 0;
function updateCounter() {
    count++;
    document.getElementById('counter').textContent = "Count: " + count;
}

document.getElementById('counter-button').addEventListener('click', updateCounter);

// Energy Level Display
function getEnergyLevel() {
    let numOfEnergy = prompt('What is your energy level?')

    for (let i = 0; i < numOfEnergy; i++){
        document.write("<img='loop-img' src=images/")
    }
}