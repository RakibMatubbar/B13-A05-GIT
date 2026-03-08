
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



// TO CHANGE HEADER BTN COLORS:

const headerBtnContaienr = document.getElementById("header-btn-container");

// Event Delegation to Add Colors:
headerBtnContaienr.addEventListener("click", (event) => {
    const btnContainer = event.target.closest("button");

    if(!btnContainer) {
        return;
    }

    // To remove Colors by using for...of:
    const allButtons = headerBtnContaienr.querySelectorAll("button");

    for(const button of allButtons){
        button.classList.remove('bg-blue-600', 'bg-green-600', 'bg-purple-600', 'text-white');
    }

    // Add Colors After Clicking:
    if(btnContainer.id === "all-btn") {
        btnContainer.classList.add('bg-blue-600', 'text-white');
    }
    else if(btnContainer.id === "open-btn") {
        btnContainer.classList.add('bg-green-600', 'text-white');
    }
    else if(btnContainer.id === "closed-btn") {
        btnContainer.classList.add('bg-purple-600', 'text-white');
    }

});



