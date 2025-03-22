# Node.js API Starter

A complete Node.js API starter template with Express.

## Project Structure

```
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middlewares/        # Custom middlewares
├── models/             # Database models
├── routes/             # API routes
├── tests/              # Test files
├── .env                # Environment variables
├── app.js              # Express app setup
├── index.js            # Server entry point
└── package.json        # Project dependencies
```

## Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
# Development with hot-reload
npm run dev

# Production
npm start
```

### Running Tests

```bash
npm test
```

## API Endpoints

- `GET /`: Welcome message
- `GET /health`: Health check endpoint

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3001
NODE_ENV=development
# MONGODB_URI=mongodb://localhost:27017/your_database
# JWT_SECRET=your_jwt_secret
```

## Dependencies

- Express - Web framework
- Cors - Cross-origin resource sharing
- Morgan - HTTP request logger
- Dotenv - Environment variables
- Jest - Testing framework
- Supertest - HTTP testing
- Nodemon - Development auto-reload
- ESLint - Code linting 