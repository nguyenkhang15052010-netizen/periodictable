const db = require("../config/db");

async function createUser(username, email, password) {
    const sql = `
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
    `;

    const [result] = await db.query(sql, [username, email, password]);

    return result;
}

async function getUserByEmail(email) {
    const sql = `
        SELECT *
        FROM users
        WHERE email = ?
    `;

    const [rows] = await db.query(sql, [email]);

    return rows[0];
}

async function findUserByUsername(username) {
    const sql = `
        SELECT *
        FROM users
        WHERE username = ?
    `;

    const [rows] = await db.query(sql, [username]);

    return rows[0];
}

async function getUserById(id) {
    const sql = `
        SELECT id, username, email, avatar, level, exp, coins, created_at
        FROM users
        WHERE id = ?
    `;

    const [rows] = await db.query(sql, [id]);

    return rows[0];
}

async function updateUsername(id, username) {
    const sql = `
        UPDATE users
        SET username = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [username, id]);

    return result;
}

async function updatePassword(id, password) {
    const sql = `
        UPDATE users
        SET password = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [password, id]);

    return result;
}

async function updateAvatar(id, avatar) {
    const sql = `
        UPDATE users
        SET avatar = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [avatar, id]);

    return result;
}

async function updateProgress(id, level, exp, coins) {
    const sql = `
        UPDATE users
        SET level = ?, exp = ?, coins = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [level, exp, coins, id]);

    return result;
}

module.exports = {
    createUser,
    getUserByEmail,
    findUserByUsername,
    getUserById,
    updateUsername,
    updatePassword,
    updateAvatar,
    updateProgress
};
