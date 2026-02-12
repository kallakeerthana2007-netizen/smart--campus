function login() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("loginMessage");

    if (!role || !username || !password) {
        msg.innerHTML = "<p class='error'>Please fill all fields!</p>";
        return;
    }

    if (
        (role === "student" && username === "student" && password === "1234") ||
        (role === "admin" && username === "admin" && password === "1234")
    ) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        msg.innerHTML = "<p class='error'>Invalid Credentials</p>";
    }
}

function logout() {
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("loginSection").style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("role").value = "";
    document.getElementById("loginMessage").innerHTML = 
    document.getElementById("message").innerHTML = "";
}

function submitComplaint(event) {
    event.preventDefault();

    const message = document.getElementById("message");

    message.innerHTML = "Complaint Submitted Successfully!";
    message.className = "success";

    document.querySelector("form").reset();
}