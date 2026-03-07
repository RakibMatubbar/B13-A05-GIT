
// Event after Clicking Sign Btn / Press Enter Key:
document.getElementById("sign-in-btn").addEventListener("click", ()=>{

    // Get Value From Username Input Field:
    const usernameInput = document.getElementById("sign-in-username");
    const usernameValue = usernameInput.value;
    
    // Get Value From Password Input Field:
    const passwordInput = document.getElementById("sign-in-password");
    const passwordValue = passwordInput.value;

    // Conditional Statment to Go "home.html" using window:
    if(usernameValue === "admin" && passwordValue === "admin123"){
        window.location.assign("home.html");
    }else{
        alert("Username: admin | Password: admin123");
        return;
    };
});

// Press Enter to Sign in:
document.getElementById("sign-in-password").addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        document.getElementById("sign-in-btn").click();
    };
});


