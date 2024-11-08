// Global variable to store interval ID for image movement
var moveInterval;

// Function to start the movement of the image
function startMovement() {
    // Access the Start and Stop buttons and the meme image
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var memeImage = document.getElementById("memeImage");

    // Check if Start button is enabled; if so, proceed with starting the movement
    startButton.disabled ? null : (
        // Disable the Start button and enable the Stop button
        startButton.disabled = true,
        stopButton.disabled = false,

        // Start moving the image by calling moveImage()
        moveImage(memeImage),

        // Set an interval to move the image every second
        moveInterval = setInterval(function() { moveImage(memeImage); }, 1000)
    );
}

// Function to stop the movement of the image
function stopMovement() {
    // Access the Start and Stop buttons
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");

    // Check if Stop button is enabled; if so, proceed with stopping the movement
    stopButton.disabled ? null : (
        // Enable the Start button and disable the Stop button
        startButton.disabled = false,
        stopButton.disabled = true,

        // Stop moving the image by clearing the interval
        clearInterval(moveInterval)
    );
}

// Function to randomly move the image to a new position
function moveImage(memeImage) {
    // Generate random values for top and left positions within the viewport
    var randomTop = Math.floor(Math.random() * (window.innerHeight - 150));
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - 150));

    // Update the position of the image with new random coordinates
    memeImage.style.top = randomTop + "px";
    memeImage.style.left = randomLeft + "px";
}
