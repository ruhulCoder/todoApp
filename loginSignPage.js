// HTML elements
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Registration
document.getElementById("signUp").addEventListener("click", (event) => {
  event.preventDefault();

  // Get registration inputs
  const signUpName = document.getElementById("sign-up-user").value;
  const signUpPass = document.getElementById("sign-up-pass").value;
  const signUpConPass = document.getElementById("sign-up-ConPass").value;

  // Validation
  if (!signUpName || !signUpPass || !signUpConPass) {
    alert('Please fill in all fields.');
    return;
  };

  if (signUpPass !== signUpConPass) {
    alert('Passwords do not match.');
    return;
  };

  // Save user to localStorage
  const user = {signUpName, signUpPass};
  localStorage.setItem("user", JSON.stringify(user));
  alert('Registration successful! You can now log in.');

  // Clear Fields
  document.getElementById("sign-up-user").value = "";
  document.getElementById("sign-up-pass").value = "";
  document.getElementById("sign-up-ConPass").value = "";
});

// Login
document.getElementById("signIn").addEventListener("click", (event) => {
  event.preventDefault();

  // Get login inputs
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Validation
  if (!userName || !password) {
    alert('Please enter your username and password.');
    return;
  };

  // Check if the user exists in localStorage
  const userData = localStorage.getItem("user");
  if (!userData) {
    alert('User not found. Please sign up.');
    return;
  };

  // Parse the user data and validate credentials
  const user = JSON.parse(userData);
  if (user.signUpPass === password) {
    alert('Login successful!');

    // Redirect to another page or perform other actions
    window.location.href = 'home.html';

    // Clear Fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    alert('Incorrect password. Please try again.');
  };
});
