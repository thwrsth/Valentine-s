// Initial font size for the "No" button
let noSize = 1.5;

// Function for "Yes" button click
function sayYes() {
    showPopup("Yayyyy! I love you! ❤️🥰", showMenu);
    launchConfetti();
}

// Function to move and shrink "No" button (Works on Mobile & Desktop)
function moveNoButton() {
    let noButton = document.getElementById("noButton");

    let maxX = window.innerWidth - noButton.clientWidth - 20;
    let maxY = window.innerHeight - noButton.clientHeight - 20;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    noSize *= 0.9;
    noButton.style.transform = `scale(${noSize})`;

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

// Function to show a popup notification, then show the menu
function showPopup(message, callback) {
    let popup = document.createElement("div");
    popup.className = "popup";
    popup.innerText = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => {
            popup.remove();
            if (callback) callback();
        }, 500);
    }, 2000);
}

// Function to show the Love Menu
function showMenu() {
    let menu = document.createElement("div");
    menu.className = "love-menu";
    menu.innerHTML = `
        <h2>Now, choose something special! ❤️</h2>
        <button onclick="showPoem()">📜 Read a Love Poem</button>
        <button onclick="playMusic()">🎶 Choose a Love Song</button>
    `;
    document.body.appendChild(menu);
}

// Function to show a romantic poem
function showPoem() {
    alert("You are the melody in my heart, the light in my sky, and the love of my life. ❤️");
}

// Function to suggest a romantic song
function playMusic() {
    alert("How about 'Perfect' by Ed Sheeran? 🎶 Or choose your own favorite love song!");
}
