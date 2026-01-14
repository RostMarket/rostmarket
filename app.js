console.log("RostMarket started");

function login() {
  const loginInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (loginInput === "admin" && passwordInput === "admin") {
    alert("Добро пожаловать, администратор!");
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Неверный логин или пароль";
  }
}
