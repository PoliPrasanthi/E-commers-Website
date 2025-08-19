function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = (input.type === "password") ? "text" : "password";
}
  // LOGIN FUNCTION
  let loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let loginEmail = document.getElementById("loginemail").value.trim();
    let loginPassword = document.getElementById("loginpassword").value;

    let storedUser = JSON.parse(localStorage.getItem("easkartUser"));

    // Find user
    let matchedUser = storedUser.find(val => val.email === loginEmail);

    if (matchedUser.email === loginEmail && matchedUser.password === loginPassword) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      window.location.href = "home.html";
    }
     else {
      alert("Incorrect email or password.");
    }
  });
}
