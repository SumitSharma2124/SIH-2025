const express = require("express");
const { createReport, getReports } = require("../controllers/reportController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", protect, upload.single("photo"), createReport);
router.get("/", protect, getReports);

module.exports = router;
