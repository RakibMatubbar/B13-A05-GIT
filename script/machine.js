
// HEADER BTN FUNC | DISPLY SHOW:

function showOnly(id) {

    // Set Containers as Card Status for Counting Status Card Length:
    if (id === "all-container") {
        currentTab = "all";
    } else if (id === "open-container") {
        currentTab = "open";
    } else if (id === "closed-container") {
        currentTab = "closed";
    }

    // Auto Load Data After Clicking any BTN:
    loadAllIssues();

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
    selected.classList.remove('hidden');
};



// TO CHANGE HEADER BTN COLORS:

const headerBtnContaienr = document.getElementById("header-btn-container");

// Event Delegation to Add Colors:
headerBtnContaienr.addEventListener("click", (event) => {
    const btnContainer = event.target.closest("button");

    if (!btnContainer) {
        return;
    }

    // To remove Colors by using for...of:
    const allButtons = headerBtnContaienr.querySelectorAll("button");

    for (const button of allButtons) {
        button.classList.remove('bg-blue-600', 'bg-green-600', 'bg-purple-600', 'text-white');
    }

    // Add Colors After Clicking:
    if (btnContainer.id === "all-btn") {
        btnContainer.classList.add('bg-blue-600', 'text-white');
    }
    else if (btnContainer.id === "open-btn") {
        btnContainer.classList.add('bg-green-600', 'text-white');
    }
    else if (btnContainer.id === "closed-btn") {
        btnContainer.classList.add('bg-purple-600', 'text-white');
    }
});


// SPINNER | LOADING FUNCTION:
const manageSpinner = (status) => {

    // Get Spinner id From HTML to Exicute:
    const spinner = document.getElementById("spinner");

    // Get Data Store's Parant Container to Hidden When its Loading:
    const allContainer = document.getElementById("all-container");
    const openContainer = document.getElementById("open-container");
    const closedContainer = document.getElementById("closed-container");

    // Conditional Statement to add or remove hidden class:
    if (status === true) {
        spinner.classList.remove("hidden");
        allContainer.classList.add("hidden");
        openContainer.classList.add("hidden");
        closedContainer.classList.add("hidden");
    } else {
        // Hidden Spinner:
        spinner.classList.add("hidden");

        // Show Container According to currentTab:
        if (currentTab === "all") {
            allContainer.classList.remove("hidden");
        } else if (currentTab === "open") {
            openContainer.classList.remove("hidden");
        } else if (currentTab === "closed") {
            closedContainer.classList.remove("hidden");
        };
    };
};



// API's LEBEL DESING WITH ICON:
const labelStyle = (label) => {

    if (label === "bug")
        return {
            style: "bg-red-100 text-red-500 border-red-200",
            icon: `<i class="fa-solid fa-bug"></i>`
        };

    if (label === "help wanted")
        return {
            style: "bg-yellow-100 text-yellow-500 border-yellow-200",
            icon: `<i class="fa-solid fa-hand-holding-hand"></i>`
        };

    if (label === "enhancement")
        return {
            style: "bg-green-100 text-green-500 border-green-200",
            icon: `<i class="fa-solid fa-arrow-up-right-dots"></i>`
        };

    if (label === "documentation")
        return {
            style: "bg-green-100 text-green-500 border-green-200",
            icon: `<i class="fa-solid fa-file"></i>`
        };

    return {
        style: "bg-green-100 text-green-500 border-green-200",
        icon: `<i class="fa-solid fa-file"></i>`
    };
};



// GET ALL THE CONTAINER TO SET MODAL: 
document.getElementById("all-container-data").addEventListener("click", (event) => {
    const card = event.target.closest("[data-id]");

    if (card) {
        openIssueModal(card.dataset.id);
    };
});

document.getElementById("open-container-data").addEventListener("click", (event) => {
    const card = event.target.closest("[data-id]");

    if (card) {
        openIssueModal(card.dataset.id);
    };
});

document.getElementById("closed-container-data").addEventListener("click", (event) => {
    const card = event.target.closest("[data-id]");

    if (card) {
        openIssueModal(card.dataset.id);
    };
});



// DATA FETCH FROM API & CHANGE DYNAMICALLY: TEMPLATE STRING URL:
const openIssueModal = (issueId) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueId}`;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {

        // Get API's Data:
        const issue = json.data;

        // Same as Card Desing for Modal: Status:
        const statusStyle = issue.status === "open"
            ? "bg-green-500 text-white"
            : "bg-purple-500 text-white";

        // Same as Card Desing for Modal: Priority:
        const priorityStyle = issue.priority === "high"
            ? "bg-red-500 text-white"
            : issue.priority === "medium"
            ? "bg-yellow-500 text-white"
            : "bg-gray-500 text-white";

        // Get id to Set Card's Data into Modal:
        modalContent = document.getElementById("modal-content");

        // Set innerHTML: Diffrent from Card Design:
        modalContent.innerHTML = `

        <h3 class="text-xl font-bold text-gray-800 mb-3">${issue.title}</h3>

            <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span class="font-bold px-2 py-1 rounded-full capitalize ${statusStyle}">${issue.status}</span>
                <span> - Opened by ${issue.author}</span>
                <span> - ${new Date(issue.updatedAt).toLocaleDateString()}</span>
            </div>

            <div class="flex gap-2 flex-wrap mb-4">
                ${issue.labels.map(label => {
                const { style, icon } = labelStyle(label);
                return `<span class="text-[10px] font-bold border px-2 py-1 rounded-full uppercase ${style}">
                        ${icon} ${label}
                    </span>`;
            }).join('')}
            </div>

            <p class="text-gray-500 text-sm mb-4">${issue.description}</p>

            <div class="flex justify-evenly bg-gray-200 p-2 rounded-md gap-10">
                <div>
                    <p class="text-gray-500 text-sm">Assignee:</p>
                    <p class="font-bold text-black">${issue.author}</p>
                </div>
                <div>
                    <p class="text-gray-500 text-sm">Priority:</p>
                    <span class="font-bold px-3 py-1 rounded-full uppercase text-sm ${priorityStyle}">${issue.priority}</span>
                </div>
            </div>
        `;

        // Call showModal() to Show this(Which is Clicked) within The Modal Card:
        document.getElementById("issue-modal").showModal();
    });
};


