document.querySelector("#signup").addEventListener("click", function () {
    let userName = document.querySelector("#username").value.trim();
    let userEmail = document.querySelector("#useremail").value.trim();
    let userPass = document.querySelector("#userpass").value.trim();

    if (userName && userEmail && userPass) {
        let userDetails = { name: userName, email: userEmail, password: userPass };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        alert("Sign up successful! Please login.");
        window.location.href = "login.html";
    } else {
        alert("Please enter all the details.");
    }
});

document.querySelector("#login").addEventListener("click", function () {
    let loginEmail = document.querySelector('#loginemail').value.trim();
    let loginPassword = document.querySelector('#loginpass').value.trim();

    if (loginEmail && loginPassword) {
        let localStorageData = JSON.parse(localStorage.getItem("userDetails"));

        if (localStorageData && loginEmail === localStorageData.email && loginPassword === localStorageData.password) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Email or password is incorrect.");
        }
    } else {
        alert("Please enter all the details.");
    }
});
