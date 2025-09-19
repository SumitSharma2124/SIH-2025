// src/controllers/adminController.js
exports.getAllUsers = async (req, res) => {
  try {
    res.status(200).json({
      message: "All users fetched successfully",
      users: [
        { id: 1, name: "User One" },
        { id: 2, name: "User Two" }
      ]
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    res.status(200).json({ message: `User with id ${userId} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
