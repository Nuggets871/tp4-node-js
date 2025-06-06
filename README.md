# Natours API

A RESTful API for managing tours and users built with Node.js, Express, and MongoDB.

## Description

This project is a RESTful API that allows users to perform CRUD operations on tours and users. The API follows a clean architecture pattern with controllers, routes, and services. It uses MongoDB for data persistence and Mongoose as an ODM (Object Data Modeling) library.

## Features

- Tour management (Create, Read, Update, Delete)
- User management (Create, Read, Update, Delete)
- MongoDB database integration
- Advanced filtering, sorting, field limiting, and pagination
- Tour statistics and monthly plan reports
- Input validation
- Error handling
- RESTful API design

## Project Structure

- `app.js`: Main application file
- `.env`: Environment variables
- `controllers/`: Contains the controllers for handling HTTP requests and responses
  - `tour.controller.js`: Controller for tour-related operations
  - `user.controller.js`: Controller for user-related operations
- `routes/`: Contains the route definitions
  - `tour.route.js`: Routes for tour-related endpoints
  - `user.route.js`: Routes for user-related endpoints
- `models/`: Contains the Mongoose models
  - `tour.model.js`: Model for tour data
- `utils/`: Contains utility functions
  - `apiFeatures.js`: Class for building MongoDB queries
- `dev-data/`: Contains development data and scripts
  - `import-dev-data.js`: Script for importing data into MongoDB
- `services/`: Contains the business logic and data access
  - `tour.service.js`: Service for tour-related operations
  - `user.service.js`: Service for user-related operations

## API Endpoints

### Tours

- `GET /api/v1/tours`: Get all tours
- `POST /api/v1/tours`: Create a new tour
- `GET /api/v1/tours/:id`: Get a specific tour by ID
- `PUT /api/v1/tours/:id`: Update a specific tour
- `DELETE /api/v1/tours/:id`: Delete a specific tour
- `GET /api/v1/tours/top-5-cheap`: Get the top 5 cheapest tours
- `GET /api/v1/tours/tour-stats`: Get tour statistics
- `GET /api/v1/tours/monthly-plan/:year`: Get the monthly plan for a specific year

### Users

- `GET /api/v1/users`: Get all users
- `POST /api/v1/users`: Create a new user
- `GET /api/v1/users/:id`: Get a specific user by ID
- `PUT /api/v1/users/:id`: Update a specific user
- `DELETE /api/v1/users/:id`: Delete a specific user

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory with the following variables:

```
LOCAL_DATABASE=mongodb://localhost:27017/natours
PASSWORD=your_mongodb_atlas_password
DATABASE=mongodb+srv://your_username:<PASSWORD>@your_cluster.mongodb.net/natours?retryWrites=true&w=majority
PORT=3000
```

4. Set up MongoDB (see Database Setup section)
5. Run `npm start` to start the server

## Database Setup

You can use either a local MongoDB installation or MongoDB Atlas.

### Local MongoDB

1. Make sure MongoDB is installed and running on your machine
2. The application will connect to the local database by default

### MongoDB Atlas

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Configure the cluster with AWS and free tier options
4. Click on "Connect" and choose "Connect your application"
5. Select the latest version of Node.js driver and "Connection String Only"
6. Copy the connection string and replace the `DATABASE` variable in your `.env` file
7. Replace `<PASSWORD>` with your actual password

## Importing Development Data

To import sample data into your database:

```bash
node dev-data/import-dev-data.js --import
```

To delete all data from the database:

```bash
node dev-data/import-dev-data.js --delete
```

## Query Parameters

The API supports various query parameters for filtering, sorting, field limiting, and pagination:

### Filtering

```
/api/v1/tours?duration=5&difficulty=easy
/api/v1/tours?duration[gte]=5&difficulty=easy
```

### Sorting

```
/api/v1/tours?sort=price
/api/v1/tours?sort=price,ratingsAverage
```

### Field Limiting

```
/api/v1/tours?fields=name,duration,price
```

### Pagination

```
/api/v1/tours?page=1&limit=10
```

## Author

Christopher BONDIER RA1 (p2200025)
