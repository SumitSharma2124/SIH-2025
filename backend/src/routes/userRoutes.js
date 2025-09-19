// src/routes/userRoutes.js
const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");

const router = express.Router();

// Get user profile
router.get("/profile", getUserProfile);

// Update user profile
router.put("/profile", updateUserProfile);

module.exports = router;
