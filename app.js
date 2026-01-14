function login() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (login === "admin" && password === "1234") {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Неверный логин или пароль";
  }
}

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

if (
  location.pathname.includes("dashboard") ||
  location.pathname.includes("products")
) {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}
