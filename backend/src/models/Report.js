const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: { type: String, enum: ["pothole", "streetlight", "garbage", "other"], required: true },
  photoUrl: String,
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true }, // [lng, lat]
  },
  status: { type: String, enum: ["submitted", "acknowledged", "in-progress", "resolved"], default: "submitted" },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
  department: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignedDept: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
}, { timestamps: true });

reportSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Report", reportSchema);
