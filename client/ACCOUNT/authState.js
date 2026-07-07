const AUTH_API_BASE = "http://localhost:3000/api/auth";

function getAuthToken() {
    return localStorage.getItem("token");
}

function getStoredUser() {
    try {
        return JSON.parse(localStorage.getItem("user")) || null;
    } catch (err) {
        return null;
    }
}

function saveAuthSession(token, user) {
    if (token) {
        localStorage.setItem("token", token);
    }

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function clearAuthSession() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

function getAccountPath() {
    const path = window.location.pathname.replace(/\\/g, "/");

    if (path.includes("/ACCOUNT/")) {
        return "account.html";
    }

    if (path.includes("/GAME/")) {
        return "../../ACCOUNT/account.html";
    }

    if (path.includes("/periodic table/")) {
        return "../ACCOUNT/account.html";
    }

    return "ACCOUNT/account.html";
}

function updateAuthNav() {
    const token = getAuthToken();
    const nav = document.querySelector(".tab-nav");

    if (!nav || !token) {
        return;
    }

    const accountPath = getAccountPath();
    const authLinks = Array.from(nav.querySelectorAll("a.tab-btn")).filter((link) => {
        const href = link.getAttribute("href") || "";
        return href.endsWith("login.html") || href.endsWith("signup.html");
    });

    if (authLinks.length === 0) {
        return;
    }

    const accountLink = document.createElement("a");
    accountLink.href = accountPath;
        const isAccountPage = window.location.pathname.replace(/\\/g, "/").endsWith("/ACCOUNT/account.html");
    accountLink.className = `tab-btn account-nav-btn${isAccountPage ? " active" : ""}`;
    if (isAccountPage) {
        accountLink.setAttribute("aria-current", "page");
    }
    accountLink.innerHTML = '<span class="tab-icon">👤</span><span>Tài khoản</span>';

    authLinks[0].replaceWith(accountLink);
    authLinks.slice(1).forEach((link) => link.remove());
}

async function fetchCurrentUser() {
    const token = getAuthToken();

    if (!token) {
        return null;
    }

    const response = await fetch(`${AUTH_API_BASE}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        clearAuthSession();
        return null;
    }

    const data = await response.json();
    saveAuthSession(null, data.user);
    return data.user;
}

async function authFetch(path, options = {}) {
    const token = getAuthToken();

    if (!token) {
        throw new Error("Ban can dang nhap de thuc hien thao tac nay.");
    }

    const response = await fetch(`${AUTH_API_BASE}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...(options.headers || {})
        }
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(data.message || "Khong the ket noi server.");
    }

    if (data.user) {
        saveAuthSession(null, data.user);
    }

    return data;
}

function getRequiredExpForLevel(level) {
    return Math.max(Number(level || 1), 1) * 100;
}

async function updateUsername(username) {
    return authFetch("/me/username", {
        method: "PATCH",
        body: JSON.stringify({ username })
    });
}

async function updatePassword(currentPassword, newPassword) {
    return authFetch("/me/password", {
        method: "PATCH",
        body: JSON.stringify({ currentPassword, newPassword })
    });
}

async function updateAvatar(avatar) {
    return authFetch("/me/avatar", {
        method: "PATCH",
        body: JSON.stringify({ avatar })
    });
}

async function addExperience(exp = 100, coins = 0) {
    return authFetch("/me/experience", {
        method: "POST",
        body: JSON.stringify({ exp, coins })
    });
}

window.AuthState = {
    apiBase: AUTH_API_BASE,
    getAuthToken,
    getStoredUser,
    saveAuthSession,
    clearAuthSession,
    fetchCurrentUser,
    authFetch,
    getRequiredExpForLevel,
    updateUsername,
    updatePassword,
    updateAvatar,
    addExperience,
    updateAuthNav
};

document.addEventListener("DOMContentLoaded", updateAuthNav);

