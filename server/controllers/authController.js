const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

function createToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );
}

function getRequiredExpForLevel(level) {
    return Math.max(Number(level || 1), 1) * 100;
}

function calculateProgress(user, expGained) {
    let level = Math.max(Number(user.level || 1), 1);
    let exp = Math.max(Number(user.exp || 0), 0) + Math.max(Number(expGained || 0), 0);
    let leveledUp = 0;

    while (exp >= getRequiredExpForLevel(level)) {
        exp -= getRequiredExpForLevel(level);
        level++;
        leveledUp++;
    }

    return {
        level,
        exp,
        leveledUp,
        requiredExp: getRequiredExpForLevel(level)
    };
}

async function register(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Vui long nhap day du thong tin."
        });
    }

    try {
        const emailExists = await userModel.getUserByEmail(email);

        if (emailExists) {
            return res.status(400).json({
                message: "Email da duoc su dung."
            });
        }

        const usernameExists = await userModel.findUserByUsername(username);

        if (usernameExists) {
            return res.status(400).json({
                message: "Ten dang nhap da ton tai."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await userModel.createUser(username, email, hashedPassword);
        const user = await userModel.getUserById(createdUser.insertId);
        const token = createToken(user);

        res.status(201).json({
            message: "Dang ky thanh cong!",
            token,
            user
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Vui long nhap email va mat khau."
        });
    }

    try {
        const user = await userModel.getUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                message: "Email khong ton tai."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Sai mat khau."
            });
        }

        const token = createToken(user);

        res.status(200).json({
            message: "Dang nhap thanh cong!",
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                level: user.level,
                exp: user.exp,
                coins: user.coins,
                created_at: user.created_at,
                updated_at: user.updated_at
            }
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

async function getMe(req, res) {
    try {
        const user = await userModel.getUserById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "Khong tim thay tai khoan."
            });
        }

        res.status(200).json({
            message: "Lay thong tin tai khoan thanh cong!",
            user
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

async function updateUsername(req, res) {
    const { username } = req.body;
    const cleanUsername = String(username || "").trim();

    if (!cleanUsername) {
        return res.status(400).json({
            message: "Vui long nhap ten moi."
        });
    }

    if (cleanUsername.length < 3 || cleanUsername.length > 30) {
        return res.status(400).json({
            message: "Ten dang nhap can tu 3 den 30 ky tu."
        });
    }

    try {
        const existingUser = await userModel.findUserByUsername(cleanUsername);

        if (existingUser && existingUser.id !== req.user.id) {
            return res.status(400).json({
                message: "Ten dang nhap da ton tai."
            });
        }

        await userModel.updateUsername(req.user.id, cleanUsername);
        const user = await userModel.getUserById(req.user.id);

        res.status(200).json({
            message: "Doi ten thanh cong!",
            user
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

async function updatePassword(req, res) {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        return res.status(400).json({
            message: "Vui long nhap mat khau hien tai va mat khau moi."
        });
    }

    if (String(newPassword).length < 6) {
        return res.status(400).json({
            message: "Mat khau moi can it nhat 6 ky tu."
        });
    }

    try {
        const user = await userModel.getUserByEmail(req.user.email);

        if (!user) {
            return res.status(404).json({
                message: "Khong tim thay tai khoan."
            });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Mat khau hien tai khong dung."
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await userModel.updatePassword(req.user.id, hashedPassword);
        const updatedUser = await userModel.getUserById(req.user.id);

        res.status(200).json({
            message: "Doi mat khau thanh cong!",
            user: updatedUser
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

async function updateAvatar(req, res) {
    const avatar = String(req.body.avatar || "").trim();

    if (!avatar) {
        return res.status(400).json({
            message: "Vui long nhap avatar moi."
        });
    }

    if (avatar.length > 255) {
        return res.status(400).json({
            message: "Avatar qua dai."
        });
    }

    try {
        await userModel.updateAvatar(req.user.id, avatar);
        const user = await userModel.getUserById(req.user.id);

        res.status(200).json({
            message: "Doi avatar thanh cong!",
            user
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

async function addExperience(req, res) {
    const requestedExp = Number(req.body.exp || 100);
    const expGained = Number.isFinite(requestedExp)
        ? Math.min(Math.max(Math.floor(requestedExp), 1), 1000)
        : 100;
    const coinsGained = Number(req.body.coins || 0);

    try {
        const user = await userModel.getUserById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "Khong tim thay tai khoan."
            });
        }

        const progress = calculateProgress(user, expGained);
        const coins = Math.max(Number(user.coins || 0), 0) + Math.max(Math.floor(coinsGained || 0), 0);

        await userModel.updateProgress(req.user.id, progress.level, progress.exp, coins);
        const updatedUser = await userModel.getUserById(req.user.id);

        res.status(200).json({
            message: `Nhan ${expGained} EXP thanh cong!`,
            expGained,
            leveledUp: progress.leveledUp,
            requiredExp: progress.requiredExp,
            user: updatedUser
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Loi server"
        });
    }
}

module.exports = {
    register,
    login,
    getMe,
    updateUsername,
    updatePassword,
    updateAvatar,
    addExperience
};
