// src/helpers/responseHelper.js

const successResponse = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, message, statusCode = 500, error = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.toString() : undefined,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
