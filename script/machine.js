
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



// API's LEBEL DESING WITH ICON:
const labelStyle = (label) =>{

   if(label === "bug")
    return{
        style: "bg-red-100 text-red-500 border-red-200",
        icon: `<i class="fa-solid fa-bug"></i>`
    };

   if(label === "help wanted")
    return{
        style: "bg-yellow-100 text-yellow-500 border-yellow-200",
        icon: `<i class="fa-solid fa-hand-holding-hand"></i>`
    };

   if(label === "enhancement")
    return{
        style: "bg-green-100 text-green-500 border-green-200",
        icon: `<i class="fa-solid fa-arrow-up-right-dots"></i>`
    };

   if(label === "documentation")
    return{
        style: "bg-green-100 text-green-500 border-green-200",
        icon: `<i class="fa-solid fa-file"></i>`
    };

    return { 
        style: "bg-green-100 text-green-500 border-green-200", 
        icon: `<i class="fa-solid fa-file"></i>` 
    };
};


