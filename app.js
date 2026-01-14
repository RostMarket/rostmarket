function login() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (login === "admin" && password === "1234") {
    alert("Добро пожаловать, администратор!");
  } else {
    error.textContent = "Неверный логин или пароль";
  }
}
