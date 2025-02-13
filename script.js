// Initial font size for the "No" button
let noSize = 1.5;

// Function for "Yes" button click
function sayYes() {
    showPopup("YAYYYY! I LOVE YOU!!! ❤️🥰", showMenu);
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
        <button onclick="playMusic()">🎶 Play Our Song</button>
        <button onclick="closeMenu()">❌ Close</button>
    `;
    document.body.appendChild(menu);
}

// Function to show a custom poem
function showPoem() {
    let poem = `
      when i first saw you, I knew u're the one,
      the most beautiful, and unique among thousand,
      i think about you all the time,
      and all the seasons,
      i reread every text you send,
      and remember what you said,
      
      i allways here for you,
      been here for days waiting you,
      if you down, i'm here for you,
      you like the air i breathe,
      u're my sunsine on a cloudy day,
      
      love, love, love, and love for you,
      just you, you, and you in my mind,
      i just want to live with you,
      spend my time with you,
      and do all things with you,
      YOU AND ONLY YOU
    `;

    let poemBox = document.createElement("div");
    poemBox.className = "poem-box";
    poemBox.innerHTML = `<p>${poem.replace(/\n/g, "<br>")}</p> <button onclick="closePoem()">❌ Close</button>`;
    document.body.appendChild(poemBox);
}

// Function to play a custom MP3 song
function playMusic() {
    let audio = document.getElementById("loveSong");
    audio.play();
}

// Function to close the Love Menu
function closeMenu() {
    document.querySelector(".love-menu").remove();
}

// Function to close the Poem Box
function closePoem() {
    document.querySelector(".poem-box").remove();
}
