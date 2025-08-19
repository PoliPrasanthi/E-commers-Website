function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = (input.type === "password") ? "text" : "password";
}

let arr = JSON.parse(localStorage.getItem("easkartUser")) ||  []
  let signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e){
      e.preventDefault();
      let username = document.getElementById("username").value;
      let useremail = document.getElementById("useremail").value;
      let userphono = document.getElementById("userphono").value;
      let userpassword = document.getElementById("userpassword").value;
        let user = {
        name: username,
        email: useremail,
        phone: userphono,
        password: userpassword
      };
      arr.push(user)
        localStorage.setItem("easkartUser", JSON.stringify(arr));
         alert("Account created successfully! Please login.");
         window.location.href = "index.html";
    });
  }

