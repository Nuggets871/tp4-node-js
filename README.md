# Natours API

A RESTful API for managing tours and users built with Node.js and Express.

## Description

This project is a RESTful API that allows users to perform CRUD operations on tours and users. The API follows a clean architecture pattern with controllers, routes, and services.

## Features

- Tour management (Create, Read, Update, Delete)
- User management (Create, Read, Update, Delete)
- Input validation
- Error handling
- RESTful API design

## Project Structure

- `app.js`: Main application file
- `controllers/`: Contains the controllers for handling HTTP requests and responses
  - `tour.controller.js`: Controller for tour-related operations
  - `user.controller.js`: Controller for user-related operations
- `routes/`: Contains the route definitions
  - `tour.route.js`: Routes for tour-related endpoints
  - `user.route.js`: Routes for user-related endpoints
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

### Users

- `GET /api/v1/users`: Get all users
- `POST /api/v1/users`: Create a new user
- `GET /api/v1/users/:id`: Get a specific user by ID
- `PUT /api/v1/users/:id`: Update a specific user
- `DELETE /api/v1/users/:id`: Delete a specific user

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server

## Author
 
Christopher BONDIER RA1 (p2200025)