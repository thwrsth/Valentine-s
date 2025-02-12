// Initial font size for the "No" button
let noSize = 1.5; 

// Function for "Yes" button click
function sayYes() {
    showPopup("Yay! I love you! ❤️🥰");
    launchConfetti();
}

// Function to make "No" button move randomly when hovered
function moveNoButton() {
    let noButton = document.getElementById("noButton");
    let maxX = window.innerWidth - noButton.clientWidth - 20; // Prevents out of bounds
    let maxY = window.innerHeight - noButton.clientHeight - 20;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Shrink button a little every time it moves
    noSize *= 0.9;
    noButton.style.fontSize = noSize + "em";

    if (noSize < 0.5) {
        noButton.style.display = "none"; // Hide when too small
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
