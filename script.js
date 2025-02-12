// Initial font size for the "No" button
let noSize = 1.5; 

// Function for "Yes" button click
function sayYes() {
    showPopup("Yay! I love you! ❤️🥰");
    launchConfetti();
}

// Function to shrink "No" button on hover
function shrinkNo() {
    let noButton = document.getElementById("noButton");
    noSize *= 0.8; // Reduce size by 20%
    noButton.style.fontSize = noSize + "em";

    if (noSize < 0.5) {
        noButton.style.display = "none"; // Hide button if too small
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
