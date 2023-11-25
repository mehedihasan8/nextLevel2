# Mongoose Express CRUD Mastery

## Overview

This project is a Node.js Express application developed in TypeScript. It integrates MongoDB with Mongoose for user data and order management. The application focuses on achieving CRUD operations with data integrity through validation using Joi/Zod.

## Prerequisites

Before you begin, ensure you have the following requirements:

- Node.js installed
- MongoDB installed and running
- TypeScript knowledge

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mehedihasan8/nextLevel2.git
   ```

2. **Navigate to the project directory:**

   ```typescript
   cd nextLevele2
   ```

3. **Install dependencies:**

   ```typescript
   npm install
   ```

4. **Run the server**

   ```typescript
   npm run start:prod
   ```

then access the API, make requests to `http://localhost:5000` your local server.

# API Endpoints

### Create new User

- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users`
- **Description:** Create new User

### Get User by ID

- **Method:** `GET`
- **URL:** `http://localhost:5000/users/{userId}`
- **Description:** Get User by ID

### Update User by ID

- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/{userId}`
- **Description:** Update User by ID

### Delete User by ID

- **Method:** `DELETE`
- **URL:** `http://localhost:5000/api/{userId}`
- **Description:** Delete User by ID

### Get All Users

- **Method:** `GET`
- **URL:** `http://localhost:5000/api/users`
- **Description:** Get All Users

## host on vercel

- [Vercel lInk](https://assignment-2-pied-eight.vercel.app/)
