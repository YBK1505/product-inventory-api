# Product Inventory API

A production-ready REST API for managing product inventory, built with **Node.js** and **Express**. Features JWT authentication, input validation, and consistent error handling.

---

## Features

- JWT-based authentication (register, login, protected routes)
- Full CRUD for products (create, read, update, delete)
- Input validation via `express-validator`
- Centralised error handling middleware
- Category and stock filtering
- In-memory data store (zero setup, runs instantly)
- Clean, modular folder structure

---

## Requirements

- Node.js v18+
- npm

---

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YBK1505/product-inventory-api.git
cd product-inventory-api

# 2. Install dependencies
npm install

# 3. Copy env file
cp .env.example .env   # Mac/Linux
Copy-Item .env.example .env  # Windows PowerShell

# 4. Start the server
npm start
```

Server runs on `http://localhost:3000`

---

## API Reference

### Auth

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login, returns JWT | No |

### Products

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/products` | List all products | Yes |
| GET | `/api/products/:id` | Get single product | Yes |
| POST | `/api/products` | Create product | Yes |
| PUT | `/api/products/:id` | Update product | Yes |
| DELETE | `/api/products/:id` | Delete product | Yes |

---

## Example Requests

### Register
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Kiril","email":"kiril@example.com","password":"secret123"}'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"kiril@example.com","password":"secret123"}'
```

### Create Product (with token)
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Wireless Keyboard",
    "price": 49.99,
    "stock": 120,
    "category": "Electronics",
    "sku": "WK-001"
  }'
```

### Get All Products
```bash
curl http://localhost:3000/api/products \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## Project Structure

```
product-inventory-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js     # Register and login logic
│   │   └── productController.js  # CRUD logic for products
│   ├── middleware/
│   │   ├── auth.js               # JWT verification middleware
│   │   ├── errorHandler.js       # Centralised error handler
│   │   └── validate.js           # Validation middleware helper
│   ├── routes/
│   │   ├── auth.js               # /auth routes
│   │   └── products.js           # /api/products routes
│   ├── validators/
│   │   ├── authValidators.js     # Register/login validation rules
│   │   └── productValidators.js  # Product validation rules
│   ├── data/
│   │   └── store.js              # In-memory data store
│   └── app.js                    # Express app setup
├── .env.example
├── .gitignore
├── package.json
└── server.js                     # Entry point
```

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port to run the server on |
| `JWT_SECRET` | - | Secret key for signing JWT tokens |
| `JWT_EXPIRES_IN` | `7d` | Token expiry duration |

---

## License

MIT
