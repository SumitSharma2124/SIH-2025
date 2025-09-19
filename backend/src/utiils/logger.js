// src/utils/logger.js
const fs = require("fs");
const path = require("path");

// Log file path
const logFile = path.join(__dirname, "../../logs/app.log");

// Utility to write log messages
const writeLog = (level, message) => {
  const logMessage = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}\n`;
  console.log(logMessage); // print on console
  fs.appendFileSync(logFile, logMessage, "utf8"); // save to file
};

// Logger functions
exports.info = (message) => {
  writeLog("info", message);
};

exports.warn = (message) => {
  writeLog("warn", message);
};

exports.error = (message) => {
  writeLog("error", message);
};
