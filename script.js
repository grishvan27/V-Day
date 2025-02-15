// script.js

// Add these at the top of script.js
const CORRECT_PASSWORD = "theoffice"; // Change this to your desired password

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() { 
            document.getElementById('question').style.display = 'none'; // Hide the question
            display2Hearts(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var dogImage = new Image();
    // Set the source (file path) for the cat image
    dogImage.src = 'Oscar.gif'; // Assuming the cat image is named "Oscar.gif"
    // Set alternative text for the image (for accessibility)
    dogImage.alt = 'Oscar';
    // When the cat image is fully loaded, add it to the image container
    dogImage.onload = function() {
        imageContainer.appendChild(dogImage);
    };
}

// Function to display the cat-heart.gif
function display2Hearts() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the two hearts
    var twoHeartsImage = new Image();
    // Set the source (file path) for the two hearts image
    twoHeartsImage.src = '2hearts.gif';
    // Set alternative text for the image (for accessibility)
    twoHeartsImage.alt = '2hearts';
    // When the two hearts image is fully loaded, add it to the image container
    twoHeartsImage.onload = function() {
        imageContainer.appendChild(twoHeartsImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
        // Show the valentine message
        document.getElementById('valentine-message').style.display = 'block';
    };
}

function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const passwordError = document.getElementById('password-error');
    const mainContent = document.getElementById('container');
    const passwordOverlay = document.getElementById('password-overlay');

    if (passwordInput.value === CORRECT_PASSWORD) {
        passwordOverlay.style.display = 'none';
        mainContent.style.display = 'flex';
        displayCat(); // Start the valentine's page
    } else {
        passwordError.style.display = 'block';
        passwordInput.value = ''; // Clear the input
    }
}

// Add event listener for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
});

// Display the cat.gif initially
displayCat();
