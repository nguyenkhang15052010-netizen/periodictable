const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${window.AuthState.apiBase}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            window.AuthState.saveAuthSession(data.token, data.user);
            alert("Dang nhap thanh cong!");
            window.location.href = "../index.html";
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.error(err);
        alert("Khong the ket noi toi server.");
    }
});
