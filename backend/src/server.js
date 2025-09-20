// src/server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const { PORT } = require("./config/env");

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration
app.use(cors({
  origin: [
    'http://localhost:5000',
    'http://0.0.0.0:5000',
    'http://127.0.0.1:5000',
    'http://localhost:5173',
    'http://0.0.0.0:5173',
    'http://127.0.0.1:5173',
    'http://10.7.20.45:5000',
    'http://10.7.20.45:5173',
    'http://10.7.20.45',
  ],
  credentials: true
}));

// Ensure Access-Control-Allow-Credentials header is always set
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend server is running!", timestamp: new Date().toISOString() });
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(process.env.PORT || PORT, "0.0.0.0", () => console.log(`🚀 Server running on 0.0.0.0:${process.env.PORT || PORT}`));
