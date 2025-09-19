// src/routes/adminRoutes.js
const express = require("express");
const { getAllUsers, deleteUser } = require("../controllers/adminController");

const router = express.Router();

// Get all users (Admin only)
router.get("/users", getAllUsers);

// Delete a user (Admin only)
router.delete("/users/:id", deleteUser);

module.exports = router;
