

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
            <button type="submit" class="btn btn-primary">Login</button>
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
            <button type="submit" class="btn btn-primary">Register</button>
            <buttom type="button" class="btn btn-secondary" onclick="displayLogin()">Login</button>
        </form>
        `;
}
