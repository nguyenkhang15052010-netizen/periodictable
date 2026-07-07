const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Backend Chemistry Learning đang chạy 🚀");
});

app.get("/users", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, username, email, avatar, level, exp, coins, created_at FROM users");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Lỗi kết nối Database"
        });
    }
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});
