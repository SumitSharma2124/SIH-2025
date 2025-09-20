const cloudinary = require("cloudinary").v2;
const { CLOUDINARY } = require("./env");
cloudinary.config({
  cloud_name: 'djmtzch27',
  api_key: 155916919421255,
  api_secret: 'R7zsZpRPhExVehfugc3Z3mIAicg',
});
module.exports = cloudinary;