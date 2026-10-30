const settingsButton = document.getElementById("settings-button");
const settingsMenu = document.getElementById("settings-menu");

settingsButton.addEventListener("click", function() {
    settingsMenu.hidden = !settingsMenu.hidden;
});

const luckyButton = document.getElementById("lucky-button");
const luckyPhrases = document.querySelector(".lucky-phrases");

let randomIndex = 0;

function rotatePhrase() {
    randomIndex = Math.floor(Math.random () * 4);
    const offset = randomIndex * 20;

    luckyPhrases.style.transform = `translateY(-${offset}px)`;
}

function resetPhrase() {
    luckyPhrases.style.transform = "translateY(0)";
    randomIndex = 0;
}

luckyButton.addEventListener("mouseenter", () => {
    rotatePhrase();
});

luckyButton.addEventListener("mouseleave", () => {
    resetPhrase();
});

luckyButton.addEventListener("click", () => {
    const searches = [
        "fun facts",
        "interesting discoveries",
        "adventure destinations",
        "food near me"
    ];

    const selectedSearch = searches[randomIndex];

    window.location.href = 
        "https://www.google.com/search?q=" +
        encodeURIComponent(selectedSearch);
});

luckyButton.addEventListener("focus", () => {
    rotatePhrase();
});

luckyButton.addEventListener("blur", () => {
    resetPhrase();
});