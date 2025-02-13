// Initial font size for the "No" button
let noSize = 1.5;

// Function for "Yes" button click
function sayYes() {
    showPopup("Yayyyy! I love you! ❤️🥰");
    launchConfetti();
}

// Function to move and shrink "No" button (Works on Mobile & Desktop)
function moveNoButton() {
    let noButton = document.getElementById("noButton");

    // Get screen width and height for movement limits
    let maxX = window.innerWidth - noButton.clientWidth - 20;
    let maxY = window.innerHeight - noButton.clientHeight - 20;

    // Generate random positions
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Move button smoothly
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Shrink button slightly
    noSize *= 0.9;
    noButton.style.transform = `scale(${noSize})`;

    // If it becomes too small, fade it out and remove
    if (noSize < 0.5) {
        noButton.style.opacity = "0";
        setTimeout(() => noButton.remove(), 500);
    }
}

// Function to launch confetti
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Function to show a custom popup notification
function showPopup(message) {
    let popup = document.createElement("div");
    popup.className = "popup";
    popup.innerText = message;
    document.body.appendChild(popup);

    // Remove the popup after 3 seconds
    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}
