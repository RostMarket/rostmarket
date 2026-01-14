function doLogin() {
  const loginValue = document.getElementById("login").value;
  const passwordValue = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (loginValue === "admin" && passwordValue === "1234") {
    alert("Добро пожаловать, администратор!");
  } else {
    error.textContent = "Неверный логин или пароль";
  }
}
