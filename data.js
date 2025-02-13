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
            window.location.href = "valentines.html"; // Redirects to second page
        }

document.getElementById("showMessage").addEventListener("click", function() {
    var hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.style.display = "block";
    this.style.display = "none"; // Hide the button after clicking
});

const image = document.getElementById("specialImage");
const poem = document.getElementById("poemMessage");

let timer;

image.addEventListener("touchstart", function() {
    timer = setTimeout(() => {
        poem.style.display = "block";
    }, 2000); // 2 seconds hold to show the poem
});

image.addEventListener("touchend", function() {
    clearTimeout(timer);
});
