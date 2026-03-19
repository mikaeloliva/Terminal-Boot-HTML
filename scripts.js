const terminal = document.getElementById("terminal");
const loginCard = document.getElementById("loginCard");

const bootLines = [
    "Initializing system...",
    "Loading kernel modules...",
    "Checking memory...",
    "Establishing secure connection...",
    "Decrypting UI layer...",
    "Boot sequence complete.",
    "",
    "Launching interface..."
];

let index = 0;

function typeLine() {
    if (index < bootLines.length) {
        terminal.innerHTML += bootLines[index] + "\n";
        index++;
        setTimeout(typeLine, 500);
    } else {
        // Fade out terminal and show login
        setTimeout(() => {
            terminal.style.transition = "0.8s ease";
            terminal.style.opacity = "0";
        }, 500);

        setTimeout(() => {
            terminal.style.display = "none";
            loginCard.classList.remove("hidden");
            loginCard.classList.add("show");
        }, 1300);
    }
}

typeLine();
