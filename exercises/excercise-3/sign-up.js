const signUpBtnElement = document.getElementById("sign-up");
const emailInputElement = document.getElementById("email");
const usernameInputElement = document.getElementById("username");
const passwordInputElement = document.getElementById("password");
const confirmPasswordInputElement = document.getElementById("confirm-password");
const resetBtnElemnt = document.getElementById("reset-form");

const formElement = document.querySelector(".subscribe-form");
const messageElement = document.querySelector(".error-message");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const message =
    email.trim() === ""
      ? "Email address cannot be empty."
      : !emailRegex.test(email)
      ? "Invalid email address format."
      : "";
  return {
    valid: message === "",
    message,
  };
};

const validateUsername = (username) => {
  const message =
    username.trim() !== username
      ? "Username should not have leading or trailing spaces."
      : "";
  return {
    valid: message === "",
    message,
  };
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[^a-zA-Z]).{8,}$/;
  const message = !passwordRegex.test(password)
    ? "Password should have at least 8 characters and at least one non-letter character."
    : "";
  return {
    valid: message === "",
    message,
  };
};

const displayErrorMessage = (message) => {
  messageElement.textContent = message;
  messageElement.style.display = message ? "block" : "none";
};

emailInputElement.addEventListener("input", () => {
  const validationResult = validateEmail(emailInputElement.value);
  displayErrorMessage(validationResult.message);
});

usernameInputElement.addEventListener("input", () => {
  const validationResult = validateUsername(usernameInputElement.value);
  displayErrorMessage(validationResult.message);
});

passwordInputElement.addEventListener("input", () => {
  const validationResult = validatePassword(passwordInputElement.value);
  displayErrorMessage(validationResult.message);
});

signUpBtnElement.addEventListener("click", () => {
  const email = emailInputElement.value.trim();
  const username = usernameInputElement.value.trim();
  const password = passwordInputElement.value.trim();
  const confirmPassword = confirmPasswordInputElement.value.trim();

  const emailValidationResult = validateEmail(email);
  const usernameValidationResult = validateUsername(username);
  const passwordValidationResult = validatePassword(password);

  const isValid =
    emailValidationResult.valid &&
    usernameValidationResult.valid &&
    passwordValidationResult.valid &&
    password === confirmPassword;

  displayErrorMessage(
    isValid ? "" : "Make sure password and confirm password match."
  );

  if (isValid) {
    const infoElement = document.createElement("div");
    infoElement.innerHTML = `Email: ${email}<br>Username: ${username}<br>Password: ${password}<br>Confirm password: ${confirmPassword}`;

    const signUpContainer = document.getElementById("sign-up-container");
    signUpContainer.appendChild(infoElement);

    formElement.reset();
  }
});

resetBtnElemnt.addEventListener("click", () => {
  formElement.reset();
  displayErrorMessage("");
});
