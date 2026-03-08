
// Declare Func to Load All Data From API:
const loadAllIssues = () => {

    // Get Data by Using fetch():
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
        .then((res) => res.json())
        .then((json) => displayAllIssues(json.data));
};

// Declare Func to Display API's Data;
const displayAllIssues = (issues) => {

    // Get All Container to Store Data:
    const allContainer = document.getElementById("all-container-data");
    const openContainer = document.getElementById("open-container-data");
    const closedContainer = document.getElementById("closed-container-data");

    // Remove Container's Data if Already Exist:
    allContainer.innerHTML = "";
    openContainer.innerHTML = "";
    closedContainer.innerHTML = "";

    // Looping on API's Data to Set Data within Container:
    issues.forEach(issue => {

        // Create Element to append():
        const dynamicCard = document.createElement("div");
        
        // Change Top Border's Color Accorting to Status:
        const topBorder = issue.status === "open" ? "border-t-green-500" : "border-t-purple-500";

        // Priority Based Data's Style:
        const priorityStyle = issue.priority === "high" ? "bg-red-100 text-red-500" : issue.priority === "medium" ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-600";

        // Priority Based Set Icon:
        const priorityIcon = issue.status === "closed" 
            ? `<div class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-purple-100 text-purple-500"> <i class="fa-regular fa-circle-check"></i> </div>`

            : `<div class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-green-100 text-green-500"> <i class="fa-regular fa-circle-dot"></i> </div>`;

        // Dynamic Card Design According to Figma:
        dynamicCard.classList = `flex flex-col gap-3 bg-white border border-t-4 ${topBorder} rounded-xl p-4 shadow-sm`;

        // Dynamic Card's Data fetch from API:
        dynamicCard.innerHTML = `
            
            <div class="flex justify-between items-start">
                <div>${priorityIcon}</div>

                <span class="font-bold px-2 py-1 rounded-full uppercase ${priorityStyle}">${issue.priority}</span>
            </div>
            
            <h3 class="font-bold text-gray-800 text-lg">${issue.title}</h3>

            <p class="text-sm text-gray-500">${issue.description}</p>

            <div class="flex gap-2 flex-wrap">
    
            </div>

            <hr class="border-gray-100 my-2">

            <div class="flex flex-col text-gray-400">
                <span>#${issue.id} by ${issue.author}</span>
                <span>${new Date(issue.createdAt).toLocaleDateString()}</span>
            </div>
        `;

        // append allContainer to dynamicCard to Show:
        allContainer.append(dynamicCard.cloneNode(true));

        // Conditional Statment With cloneNode Based on Status:
        if (issue.status === "open") {
            openContainer.append(dynamicCard.cloneNode(true));
        } else if (issue.status === "closed") {
            closedContainer.append(dynamicCard.cloneNode(true));
        };
    });
};
loadAllIssues();


