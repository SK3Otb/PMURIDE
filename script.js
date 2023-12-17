let isLoginFormVisible = true;
let isVerificationFormVisible = false; 
const simulatedVerificationCode = Math.floor(1000 + Math.random() * 9000);

function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const switchButton = document.querySelector(".switch-button");
    const loginButton = document.querySelector(".login-button");
    const registerButton = document.querySelector(".register-button");
    const verifyButton = document.querySelector(".verify-button");

    if (loginForm.style.display === "block") {
     
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        switchButton.textContent = "Switch to Login";
        loginButton.style.display = "none";
        registerButton.style.display = "block";
        verifyButton.style.display = "none"; 
    } else {
        
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        switchButton.textContent = "Switch to Register";
        loginButton.style.display = "block";
        registerButton.style.display = "none";
        verifyButton.style.display = "none"; // Hide verification button
    }
}


function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginForm = document.getElementById("loginForm");
    const verificationForm = document.getElementById("verificationForm");
    const loginButton = document.querySelector(".login-button");
    const registerButton = document.querySelector(".register-button");
    const verifyButton = document.querySelector(".verify-button");

   
    if (username === "SK3" && password === "123") {
        alert('Login successful! Check your email for the verification code.');
        
        
        loginForm.style.display = "none";
        verificationForm.style.display = "block";
        loginButton.style.display = "none";
        registerButton.style.display = "none";
        verifyButton.style.display = "block";
        
        document.getElementById("verificationCode").value = ""; 
    } else {
        alert("Authentication failed. Please check your credentials.");
    }
}


function register() {
    const email = document.getElementById("email").value;
    const fullName = document.getElementById("fullName").value;
    const userId = document.getElementById("userId").value;
    const registerPassword = document.getElementById("registerPassword").value;


    alert(`Registered with Email: ${email}, Full Name: ${fullName}, User ID: ${userId}`);
}

function verify() {
    const verificationCode = document.getElementById('verificationCode').value;

    if (verificationCode == simulatedVerificationCode) {
        alert('Verification successful! You are now logged in.');
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Invalid verification code. Please try again.');
    }
}
