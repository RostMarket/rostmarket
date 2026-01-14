// ===== ВХОД =====
function login() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (login === "admin" && password === "1234") {
        localStorage.setItem("auth", "true");
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Неверный логин или пароль";
    }
}

// ===== ЗАЩИТА СТРАНИЦ =====
function checkAuth() {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "index.html";
    }
}

// ===== НАВИГАЦИЯ =====
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}

function goProducts() {
    window.location.href = "products.html";
}

function back() {
    window.location.href = "dashboard.html";
}

// ===== АВТОПРОВЕРКА =====
if (
    location.pathname.includes("dashboard.html") ||
    location.pathname.includes("products.html")
) {
    checkAuth();
}
