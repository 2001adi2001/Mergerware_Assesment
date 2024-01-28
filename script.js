document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");

  loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  signupLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle login functionality here
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Login with:", email, password);
    // You can add AJAX request or any other logic to handle login
  });

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle signup functionality here
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    console.log("Signup with:", email, password);
    // You can add AJAX request or any other logic to handle signup
  });
});
