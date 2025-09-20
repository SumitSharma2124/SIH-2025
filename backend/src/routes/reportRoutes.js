// src/routes/reportRoutes.js
const express = require("express");

const upload = require("../middleware/upload");
const { createReport, getReports, updateReport } = require("../controllers/reportController");

const router = express.Router();

router.post("/", upload.single("image"), createReport);
router.get("/", getReports);


// PATCH /reports/:id
router.patch("/:id", updateReport);

module.exports = router;
