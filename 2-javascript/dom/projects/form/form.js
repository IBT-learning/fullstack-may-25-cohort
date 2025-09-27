const toggles = document.querySelectorAll(".toggle");
const forms = document.querySelectorAll(".form");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    forms.forEach((form) => {
      form.classList.remove("active");
    });
    document
      .getElementById(`${toggle.dataset.form}Form`)
      .classList.add("active");
  });
});

// Registration Form Logic
document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const registerData = {name, email, password}

    localStorage.setItem("userInfo", JSON.stringify(registerData));

    document.querySelector('[data-form="login"]').click();

    // console.log(registerData)

});

// Login Form
document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user && user.email === email && user.password === password){
        alert(`Welcome back, ${user.name}!`)
    } else {
        alert("Invalid email or password")
    }
})
