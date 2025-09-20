require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET || "changeme",
  CLOUDINARY: {
    CLOUD_NAME: process.env.cloud_name,
    API_KEY: process.env.api_key,
    API_SECRET: process.env.api_secret,
  }
};
