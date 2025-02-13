// Function to show the game after a delay
setTimeout(function() {
    document.getElementById("videoContainer").style.opacity = "0"; // Fade out video
    setTimeout(function() {
        document.getElementById("videoContainer").style.display = "none"; // Hide video completely
        document.getElementById("game").style.display = "block"; // Show game
    }, 1000); // Wait 1s after fade out
}, 5000); // Wait 5 seconds before showing game

// Game logic: Increase score when clicking hearts
let score = 0;
function increaseScore() {
    score++;
    document.getElementById("score").innerText = score;
}

// Toggle hidden message when button is clicked
document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("hiddenMessage").classList.toggle("hidden");
});

// Nextpage//
function goToNextPage() {
    setTimeout(function() {
        window.location.href = "valentines.html";
    }, 3000); // 3000ms = 3 seconds
}
