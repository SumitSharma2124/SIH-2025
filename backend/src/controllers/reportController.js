// PATCH /reports/:id - update report fields (priority, department, status)
exports.updateReport = async (req, res) => {
  try {
    const { id } = req.params;
  const update = {};
  if (typeof req.body.priority !== 'undefined') update.priority = req.body.priority;
  if (typeof req.body.status !== 'undefined') update.status = req.body.status;
  if (typeof req.body.department !== 'undefined') update.department = req.body.department;
  // Support legacy field
  if (typeof req.body.assignedDept !== 'undefined') update.assignedDept = req.body.assignedDept;
    const report = await Report.findByIdAndUpdate(id, update, { new: true });
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const Report = require("../models/Report");
const cloudinary = require("../config/cloudinary");

exports.createReport = async (req, res) => {
  try {
    let photoUrl = null;
    if (req.file) {
      // Upload buffer to Cloudinary using upload_stream
      const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });
          stream.end(buffer);
        });
      };
      const result = await streamUpload(req.file.buffer);
      photoUrl = result.secure_url;
    }


    // Accept latitude and longitude from the request (as strings)
    let coordinates = null;
    if (req.body.latitude && req.body.longitude) {
      coordinates = [parseFloat(req.body.longitude), parseFloat(req.body.latitude)];
    } else if (Array.isArray(req.body.coordinates) && req.body.coordinates.length === 2) {
      coordinates = req.body.coordinates;
    }

    const report = await Report.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      photoUrl,
      location: coordinates ? { type: "Point", coordinates } : undefined,
      createdBy: req.user ? req.user._id : undefined,
      priority: req.body.priority,
      department: req.body.department,
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
