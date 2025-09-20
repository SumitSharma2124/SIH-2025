# CivicReport Platform

A full-stack civic issue reporting and management platform with:
- **Mobile App** (React Native/Expo): For citizens to report issues with photos, location, and category.
- **Admin Dashboard** (React + Vite): For authorities to view, filter, and manage reports, with analytics and map view.
- **Backend API** (Node.js/Express + MongoDB): RESTful API for reports, users, and departments.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Citizens can submit reports with category, description, photo, and geolocation.
- Admin dashboard for filtering, updating, and tracking reports.
- Map view and analytics for authorities.
- Reverse geocoding to display area names.
- Real-time status and priority updates.
- Mobile and web responsive UI.

---

## Tech Stack

- **Frontend (Dashboard):** React, TypeScript, Vite, Tailwind CSS
- **Mobile App:** React Native, Expo, TypeScript
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Other:** Cloudinary (image upload), Nominatim (reverse geocoding)

---

## Setup & Installation

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (for image uploads)
- Expo CLI (for mobile app)

### 1. Clone the repository

```sh
git clone https://github.com/SumitSharma2124/SIH-2025.git
cd SIH-2025
```

### 2. Backend Setup

```sh
cd backend
npm install
# Create a .env file with your MongoDB URI and Cloudinary credentials
npm start
```

### 3. Dashboard Frontend

```sh
cd ../frontend/dashboard
npm install
npm run dev
```

### 4. Mobile App

```sh
cd ../app
npm install
npx expo start
```

---

## Project Structure

```
SIH-2025/
  backend/           # Node.js/Express API
  frontend/
    dashboard/       # React + Vite admin dashboard
    app/             # React Native mobile app
  docs/              # Documentation and assets
  tests/             # Test scripts
```

---

## API Endpoints

- `POST /api/reports` — Create a new report (with image, location, category, etc.)
- `GET /api/reports` — List all reports
- `PATCH /api/reports/:id` — Update report (status, priority, department, area)
- `GET /api/users` — List users (if implemented)
- `GET /api/departments` — List departments (if implemented)

---

## Usage

- **Mobile App:** Citizens can submit new issues, including photos and location, and track their status.
- **Dashboard:** Admins can view, filter, and update reports, see analytics, and view reports on a map.
- **Reverse Geocoding:** Area names are fetched once and saved to the backend for each report.

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

MIT

---

Let me know if you want more detailed API docs, environment variable examples, or anything else!
