"use strict";

// Component 1: Change Background Color
document.getElementById('changeColorButton').addEventListener('click', function() {
    const color = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = color; // Changes the whole page's background color
});