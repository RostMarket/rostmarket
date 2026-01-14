function login() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (login === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Неверный логин или пароль";
  }
}
