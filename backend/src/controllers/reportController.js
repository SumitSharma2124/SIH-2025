const Report = require("../models/Report");
const cloudinary = require("../config/cloudinary");

exports.createReport = async (req, res) => {
  try {
    let photoUrl = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload_stream({ resource_type: "image" });
      photoUrl = result.secure_url;
    }

    const report = await Report.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      photoUrl,
      location: { type: "Point", coordinates: req.body.coordinates },
      createdBy: req.user._id,
    });

    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReports = async (req, res) => {
  const reports = await Report.find().populate("createdBy", "name email");
  res.json(reports);
};
