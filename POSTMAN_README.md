# Using the Postman Collection for Natours API

This README provides instructions on how to use the Postman collection to test the Natours API.

## Importing the Collection

1. Open Postman
2. Click on "Import" in the top left corner
3. Select "File" and choose the `postman_collection.json` file
4. Click "Import"

## Setting Up Environment Variables

The collection uses environment variables to make it easier to work with different environments and to avoid hardcoding values.

1. In Postman, click on the "Environments" tab in the left sidebar
2. Click on "Create Environment"
3. Name your environment (e.g., "Natours Local")
4. Add the following variables:
   - `baseUrl`: Set to `http://localhost:3000` (or your server URL)
   - `tourId`: Leave empty for now
   - `userId`: Leave empty for now
5. Click "Save"
6. Select your new environment from the environment dropdown in the top right corner

## Getting Tour and User IDs

Before you can test endpoints that require IDs, you need to get valid IDs from the database:

1. Run the "Get All Tours" request
2. From the response, copy an ID from one of the tours
3. Update the `tourId` environment variable with this ID
4. Run the "Get All Users" request
5. From the response, copy an ID from one of the users
6. Update the `userId` environment variable with this ID

## Testing the API

### Basic CRUD Operations

1. **Tours**:
   - Use "Get All Tours" to retrieve all tours
   - Use "Get Tour by ID" to retrieve a specific tour
   - Use "Create Tour" to create a new tour
   - Use "Update Tour" to update an existing tour
   - Use "Delete Tour" to delete a tour

2. **Users**:
   - Use "Get All Users" to retrieve all users
   - Use "Get User by ID" to retrieve a specific user
   - Use "Create User" to create a new user
   - Use "Update User" to update an existing user
   - Use "Delete User" to delete a user

### Advanced Queries

The collection includes examples of advanced query features:

1. **Filtering**:
   - "Filter Tours by Duration" - Filter tours by specific criteria
   - "Filter Tours with Advanced Operators" - Use operators like gte, gt, lte, lt

2. **Sorting**:
   - "Sort Tours" - Sort results by one or more fields

3. **Field Limiting**:
   - "Limit Fields" - Specify which fields to include in the response

4. **Pagination**:
   - "Paginate Tours" - Paginate results with page and limit parameters

5. **Combined Queries**:
   - "Combined Query" - Use multiple query features together

### Special Endpoints

1. **Top 5 Cheap Tours**:
   - "Get Top 5 Cheap Tours" - Get the top 5 cheapest tours sorted by rating

2. **Tour Statistics**:
   - "Get Tour Statistics" - Get statistics about tours grouped by difficulty

3. **Monthly Plan**:
   - "Get Monthly Plan" - Get the monthly plan for a specific year

## Troubleshooting

If you encounter issues:

1. Ensure your server is running
2. Check that the environment variables are set correctly
3. Verify that you're using valid IDs for tour and user endpoints
4. Check the request body format for POST and PUT requests

## Data Import

If you need to populate your database with sample data, run:

```bash
node dev-data/import-dev-data.js --import
```

To delete all data from the database:

```bash
node dev-data/import-dev-data.js --delete
```