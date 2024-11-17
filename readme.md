# GX-Backend Assignment

Welcome to the project ! This guide provides instructions on how to set up and run the project locally.

**Checkout for Endpoint**: [API Documentation](./API-Documentation.md)

## Project Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/danishzayan/GX-Backend.git
   cd GX-Backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the .env file**:
   Create a `.env` file in the root of the project and add the following environment variables:
   ```
   MONGO_URI=mongodb://localhost:27017/assignment-portal
   JWT_SECRET=abc123xyz456
   PORT=5000
   ```

## Running the Project

To start the development server, use the following command:

```bash
npm run dev
```

The server will start and run on `http://localhost:5000` (or the port specified in your `.env` file).
