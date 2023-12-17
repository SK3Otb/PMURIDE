function toggleForm(formId) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (formId === "loginForm") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else if (formId === "registerForm") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    alert(`Logged in as ${username}`);
}

function register() {
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const userId = document.getElementById("userId").value;
    const registerPassword = document.getElementById("registerPassword").value;

   
    alert(`Registered with Email: ${email}, Full Name: ${fullName}, User ID: ${userId}`);
}
