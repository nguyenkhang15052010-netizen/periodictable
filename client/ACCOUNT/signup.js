const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Mat khau xac nhan khong khop!");
        return;
    }

    try {
        const response = await fetch(`${window.AuthState.apiBase}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            window.AuthState.saveAuthSession(data.token, data.user);
            alert("Dang ky thanh cong!");
            window.location.href = "../index.html";
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.error(err);
        alert("Khong the ket noi toi server.");
    }
});
