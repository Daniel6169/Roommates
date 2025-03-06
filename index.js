let usernames = [];
let passwords = [];
function displayLogin() {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    loginForm.innerHTML = `
        <h1>Login</h1>
        <form id="login-form">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-primary" onclick="loginUser">Login</button>
            <button type="button" class="btn btn-secondary" onclick="displayRegister()">Register</button>
        </form>
        `
        
        ; 
        
}
window.onload = displayLogin;

function displayRegister() {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    registerForm.innerHTML = `
        <h1>Register</h1>
        <form id="register-form">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <div class="mb-3">
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm-password" required>
            </div>
            <button type="submit" class="btn btn-primary" onclick="registerUser()">Register</button>
            <buttom type="button" class="btn btn-secondary" onclick="displayLogin()">Login</button>
        </form>
        `;
}
function registerUser() {
    const registerForm = document.getElementById("register-form");
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm["confirm-password"].value;
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    usernames.push(username);
    passwords.push(password);
    displayLogin();
}
function loginUser() {
    const loginForm = document.getElementById("login-form");
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const index = usernames.indexOf(username);
    if (index === -1) {
        alert("Username not found");
        return;
    }
    if (passwords[index] !== password) {
        alert("Incorrect password");
        return;
    }
    alert("Login successful");
}