// 🔐 ПРОВЕРКА АВТОРИЗАЦИИ
if (location.pathname.includes("dashboard") || location.pathname.includes("products")) {
  if (localStorage.getItem("auth") !== "true") {
    location.href = "index.html";
  }
}

// 🔑 ВХОД
function login() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if (login === "admin" && password === "1234") {
    localStorage.setItem("auth", "true");
    location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Неверный логин или пароль";
  }
}

// 🚪 ВЫХОД
function logout() {
  localStorage.removeItem("auth");
  location.href = "index.html";
}

// ➡️ ТОВАРЫ
function goProducts() {
  location.href = "products.html";
}

// ⬅️ НАЗАД
function back() {
  location.href = "dashboard.html";
}

// 📦 ТОВАРЫ (LOCALSTORAGE)
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  const list = document.getElementById("productList");
  if (!list) return;

  list.innerHTML = "";
  products.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${p} <button onclick="removeProduct(${i})">✖</button>`;
    list.appendChild(li);
  });
}

function addProduct() {
  const input = document.getElementById("productName");
  if (input.value.trim() === "") return;

  products.push(input.value);
  localStorage.setItem("products", JSON.stringify(products));
  input.value = "";
  renderProducts();
}

function removeProduct(i) {
  products.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

renderProducts();
