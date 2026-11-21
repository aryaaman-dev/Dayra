# Dayra

Dayra is a web application built with Node.js, Express, and MongoDB. I created this project to get more practical experience with backend development and understand how the different parts of a web application work together.

The main focus of the project is managing listings and handling the operations behind them — from sending requests to storing and retrieving data from the database.

## What can it do?

- **Create listings:** Add new listings to the application.
- **View listings:** Display the available listings.
- **Update listings:** Edit existing listing information.
- **Delete listings:** Remove listings when they are no longer needed.
- **Validate input:** Use Joi to validate incoming data before processing it.
- **Handle errors:** Use asynchronous error handling and custom Express error middleware to manage errors more cleanly.

## Built with

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – Database
- **Mongoose** – Working with MongoDB through models and schemas
- **Joi** – Input validation
- **EJS** – Rendering dynamic pages
- **Method-Override** – Supporting HTTP methods such as PUT and DELETE through forms

## Getting started

If you want to run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/aryaaman-dev/Dayra.git
   ```

2. Move into the project directory:

   ```bash
   cd Dayra
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add the environment variables required by the application.

   For example:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

   Make sure the variable name matches the one used in your database connection code.

5. Start the application using the command configured in your `package.json` scripts.

## What I learned

Building Dayra helped me understand more than just writing API routes. I got practical experience with:

- Connecting an Express application to MongoDB.
- Structuring routes and handling CRUD operations.
- Working with Mongoose models.
- Validating user input.
- Managing asynchronous errors.
- Understanding how middleware fits into the request-response cycle.
- Rendering dynamic pages using EJS.

I'm still improving the project and learning how to make its backend structure cleaner and more maintainable.

## Project

[View Dayra on GitHub](https://github.com/aryaaman-dev/Dayra)
