function formatNumber(value) {
    return Number(value || 0).toLocaleString("vi-VN");
}

function setText(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = value;
    }
}

function getFallbackAvatar(user) {
    const source = user.username || user.email || "U";
    const firstLetter = source.trim().charAt(0);

    return firstLetter ? firstLetter.toUpperCase() : "U";
}

function isImageAvatar(value) {
    return /\.(png|jpe?g|webp|gif|svg)$/i.test(value) || value.startsWith("http") || value.startsWith("../") || value.startsWith("./") || value.startsWith("/");
}

function getAvatarSrc(value) {
    if (value.startsWith("http") || value.startsWith("../") || value.startsWith("./") || value.startsWith("/")) {
        return value;
    }

    return `../assets/avatars/${value}`;
}

function renderAvatar(user) {
    const avatar = document.querySelector(".avatar");

    if (!avatar) {
        return;
    }

    const avatarValue = String(user.avatar || "").trim();
    const fallback = getFallbackAvatar(user);

    avatar.innerHTML = "";

    if (!avatarValue || avatarValue === "default.png") {
        avatar.innerHTML = `<span class="avatar-fallback">${fallback}</span>`;
        return;
    }

    if (!isImageAvatar(avatarValue)) {
        avatar.textContent = avatarValue;
        return;
    }

    const image = document.createElement("img");
    image.src = getAvatarSrc(avatarValue);
    image.alt = `Avatar cua ${user.username || "nguoi dung"}`;
    image.loading = "lazy";
    image.onerror = () => {
        avatar.innerHTML = `<span class="avatar-fallback">${fallback}</span>`;
    };

    avatar.appendChild(image);
}

function renderUser(user) {
    const level = Number(user.level || 1);
    const exp = Number(user.exp || 0);
    const coins = Number(user.coins || 0);
    const nextLevelExp = window.AuthState.getRequiredExpForLevel(level);
    const expPercent = Math.min((exp / nextLevelExp) * 100, 100);

    setText("#accountUsername", user.username || "Nguoi dung");
    setText("#accountEmail", user.email || "--");
    setText("#accountLevelBadge", level);
    setText("#accountLevel", level);
    setText("#accountExp", formatNumber(exp));
    setText("#accountCoins", formatNumber(coins));
    setText("#accountExpText", `${formatNumber(exp)} / ${formatNumber(nextLevelExp)}`);
    setText(".exp-top span", `EXP toi Level ${level + 1}`);
    setText(".status-pill", "Tai khoan da dong bo tu database");

    const expFill = document.getElementById("accountExpFill");

    if (expFill) {
        expFill.style.width = `${expPercent}%`;
    }

    renderAvatar(user);
}

function setStatus(message) {
    setText(".status-pill", message);
}

async function loadAccount() {
    if (!window.AuthState.getAuthToken()) {
        window.location.href = "login.html";
        return;
    }

    const cachedUser = window.AuthState.getStoredUser();

    if (cachedUser) {
        renderUser(cachedUser);
    }

    try {
        const user = await window.AuthState.fetchCurrentUser();

        if (!user) {
            window.location.href = "login.html";
            return;
        }

        renderUser(user);
    } catch (err) {
        console.error(err);
        setStatus("Khong the ket noi server. Dang hien thi du lieu da luu.");
    }
}

async function handleChangeUsername() {
    const currentUser = window.AuthState.getStoredUser() || {};
    const username = prompt("Nhap username moi:", currentUser.username || "");

    if (username === null) {
        return;
    }

    const cleanUsername = username.trim();

    if (!cleanUsername) {
        setStatus("Username khong duoc de trong.");
        return;
    }

    try {
        setStatus("Dang doi username...");
        const data = await window.AuthState.updateUsername(cleanUsername);
        renderUser(data.user);
        setStatus(data.message || "Doi username thanh cong!");
    } catch (err) {
        console.error(err);
        setStatus(err.message || "Khong the doi username.");
    }
}

async function handleChangePassword() {
    const currentPassword = prompt("Nhap mat khau hien tai:");

    if (currentPassword === null) {
        return;
    }

    const newPassword = prompt("Nhap mat khau moi (toi thieu 6 ky tu):");

    if (newPassword === null) {
        return;
    }

    try {
        setStatus("Dang doi mat khau...");
        const data = await window.AuthState.updatePassword(currentPassword, newPassword);
        renderUser(data.user);
        setStatus(data.message || "Doi mat khau thanh cong!");
    } catch (err) {
        console.error(err);
        setStatus(err.message || "Khong the doi mat khau.");
    }
}

async function handleChangeAvatar() {
    const currentUser = window.AuthState.getStoredUser() || {};
    const avatar = prompt("Nhap emoji, ten file avatar, hoac URL anh:", currentUser.avatar || "");

    if (avatar === null) {
        return;
    }

    const cleanAvatar = avatar.trim();

    if (!cleanAvatar) {
        setStatus("Avatar khong duoc de trong.");
        return;
    }

    try {
        setStatus("Dang doi avatar...");
        const data = await window.AuthState.updateAvatar(cleanAvatar);
        renderUser(data.user);
        setStatus(data.message || "Doi avatar thanh cong!");
    } catch (err) {
        console.error(err);
        setStatus(err.message || "Khong the doi avatar.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const particles = document.getElementById("particles");

    if (particles) {
        for (let i = 0; i < 34; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.animationDelay = Math.random() * 15 + "s";
            particle.style.animationDuration = 15 + Math.random() * 10 + "s";
            particle.style.background = ["#00f5ff", "#b829ff", "#ff29a8"][Math.floor(Math.random() * 3)];
            particles.appendChild(particle);
        }
    }

    const logoutBtn = document.querySelector(".account-btn.logout");
    const changeUsernameBtn = document.getElementById("changeUsernameBtn");
    const changePasswordBtn = document.getElementById("changePasswordBtn");
    const changeAvatarBtn = document.getElementById("changeAvatarBtn");

    if (changeUsernameBtn) {
        changeUsernameBtn.addEventListener("click", handleChangeUsername);
    }

    if (changePasswordBtn) {
        changePasswordBtn.addEventListener("click", handleChangePassword);
    }

    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener("click", handleChangeAvatar);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.AuthState.clearAuthSession();
            window.location.href = "login.html";
        });
    }

    loadAccount();
});
