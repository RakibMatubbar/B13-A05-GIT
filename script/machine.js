
// HEADER BTN FUNC | DISPLY SHOW:

function showOnly(id) {

    //  Select all Data Store's containers:
    const allCards = document.getElementById("all-container");
    const openCards = document.getElementById("open-container");
    const closedCards = document.getElementById("closed-container");

    // Hide all to Show Requested One:
    allCards.classList.add("hidden");
    openCards.classList.add("hidden");
    closedCards.classList.add("hidden");

    // Show Only Which is Clicked:
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
};



