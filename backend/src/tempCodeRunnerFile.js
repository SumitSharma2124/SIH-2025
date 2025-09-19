const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const { PORT } = require("./config/env");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));