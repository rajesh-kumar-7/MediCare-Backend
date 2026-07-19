# MediCare Backend

This repository contains the backend of the **MediCare Doctor Appointment System**. It is built with **Node.js**, **Express.js**, and **MongoDB**, providing secure REST APIs for authentication, appointment management, doctor management, and user management.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Bcrypt.js
- Multer

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/medicare-backend.git
```

### Navigate to the project

```bash
cd medicare-backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

### Start the server

```bash
npm start
```

or (if using nodemon)

```bash
npm run server
```

The backend server will run at:

```
http://localhost:5000
```

## API Features

- User Authentication
- JWT Authorization
- Doctor Management
- Appointment Booking
- Patient Management
- RESTful APIs
- Admin dashboard

## Frontend

Make sure the frontend application is running and connected to the backend server.
frontend repo : https://github.com/rajesh-kumar-7/MediCare-frontend

## Author

Rajesh Kumar
