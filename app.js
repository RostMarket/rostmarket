function doLogin() {
  const login = document.getElementById("userLogin").value;
  const password = document.getElementById("userPassword").value;
  const error = document.getElementById("error");

  error.textContent = "";

  if (login === "admin" && password === "1234") {
    alert("Добро пожаловать, администратор!");
  } else {
    error.textContent = "Неверный логин или пароль";
  }
}
