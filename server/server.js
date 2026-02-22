const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// 🔐 Load environment variables
dotenv.config();

// 🗄 Connect Database
const connectDB = require("./config/db");
connectDB();

const app = express();

// 🧩 Production-Ready CORS Configuration (Local + Production)
const allowedOrigins = [
  "http://localhost:5173", // Local frontend (Vite)
  "https://furniro-frontend-cgcm.onrender.com", // Production frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked CORS request from:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allow cookies/auth headers
  })
);

app.use(express.json());

// 🔑 Auth Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const cartRoutes = require("./routes/cartRoutes");
app.use("/api", cartRoutes);
app.use("/api/cart", cartRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

// 🆕 Contact Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// 🔐 Protected Middleware
const { protect } = require("./middleware/authMiddleware");

// 🛡 Protected Test Route
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// 🚀 Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});