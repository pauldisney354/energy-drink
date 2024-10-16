'use strict';

// Function to handle personalized greeting
function handleGreeting() {
    const userName = document.getElementById('userName').value.trim();
    const greetingMessage = document.getElementById('greetingMessage');
    if (userName) {
        greetingMessage.textContent = `Hello, ${userName}! Welcome to The Energy Machine!`;
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
}

// Function to handle favorite energy drink selection
function handleDrinkSelection() {
    const selectedDrink = document.getElementById('drinkSelect').value;
    const drinkMessage = document.getElementById('drinkMessage');

    switch (selectedDrink) {
        case "AMP":
            drinkMessage.textContent = "You chose AMP! It's a great choice!";
            break;
        case "C4":
            drinkMessage.textContent = "You chose C4! Ignite your fire!";
            break;
        case "Prime":
            drinkMessage.textContent = "You chose Prime! Unleash your prime!";
            break;
        default:
            drinkMessage.textContent = "Please select a drink.";
            break;
    }
}

// Function to change background color
function changeBackgroundColor() {
    const color = prompt("Enter a color (name or hex code) for the background:");
    if (color) {
        document.body.style.backgroundColor = color;
    }
}

// Function to show images based on user input
function showImages() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images

    let numberOfImages;
    
    // Validate user input for number of images
    while (true) {
        numberOfImages = prompt("How many times do you want to see the energy drink image? (Enter a number between 1 and 10)");
        numberOfImages = parseInt(numberOfImages, 10);
        if (numberOfImages >= 1 && numberOfImages <= 10) {
            break; // Exit loop if input is valid
        } else {
            alert("Please enter a valid number between 1 and 10.");
        }
    }

    // Loop to display the image the specified number of times
    for (let i = 1; i <= numberOfImages; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmIB2ax_a_-CQplmKX1_TPlPaCuzW3BO51Q&s"; // Replace with your desired image URL
        imgElement.alt = "Energy Drink";
        imgElement.height = 100; // Set a height for the images
        imgElement.width = 100; // Set a width for the images

        const counterText = document.createElement('p');
        counterText.textContent = `Image ${i}`;

        imageContainer.appendChild(counterText);
        imageContainer.appendChild(imgElement);
    }
}

// Event listeners
document.getElementById('greetButton').addEventListener('click', handleGreeting);
document.getElementById('drinkButton').addEventListener('click', handleDrinkSelection);
document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
document.getElementById('loopButton').addEventListener('click', showImages);