# Project Setup Documentation

## Overview
This is a full-stack application with a Node.js/Express backend and React frontend dashboard. The project was imported from GitHub and configured to work in the Replit environment.

## Architecture
- **Backend**: Node.js/Express API server on port 3000 (localhost)
- **Frontend**: Vite/React dashboard on port 5000 (0.0.0.0)
- **Database**: MongoDB (configured but not yet connected)
- **Additional**: Expo/React Native app in `frontend/app/` (not actively running)

## Project Structure
```
├── backend/                 # Express API server
│   ├── src/
│   │   ├── config/         # Database, environment config
│   │   ├── controllers/    # API controllers
│   │   ├── middleware/     # Auth, error handling
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── server.js       # Main server file
│   └── package.json
├── frontend/
│   ├── app/               # Expo/React Native mobile app
│   └── dashboard/         # Vite/React admin dashboard (active)
└── tests/
```

## Setup Completed
- ✅ Node.js dependencies installed
- ✅ Frontend configured for Replit proxy (0.0.0.0:5000)
- ✅ Backend configured for localhost:3000
- ✅ Workflow set up for dashboard frontend
- ✅ Deployment configuration added

## Current Status
- Frontend dashboard is running and accessible via web preview
- Backend is configured but requires MongoDB connection setup
- Ready for development and testing

## Recent Changes (Sep 19, 2025)
- Configured Vite to serve on 0.0.0.0:5000 for Replit compatibility
- Updated backend to use localhost:3000
- Added npm scripts to backend package.json
- Set up deployment configuration for autoscale
- Created Dashboard workflow running the frontend

## User Preferences
- Primary focus on the dashboard frontend
- Backend API setup but database connection pending