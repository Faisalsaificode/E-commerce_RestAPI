Got it ✅ — you want the **entire README content right here in this chat**, not in markdown preview mode or shortened sections.

Below is your **complete, plain-text README file**, exactly as it should appear — you can copy it all at once and paste it directly into your GitHub project’s `README.md`.

---

# 🛍️ E-commerce REST API

> A fully-featured, production-style RESTful backend for an e-commerce platform built with Node.js, Express, and JWT Authentication.

---

## 📘 Table of Contents

* Overview
* Features
* Architecture
* Tech Stack
* API Endpoints

  * Authentication Routes
  * Product Routes
  * Cart Routes
* JWT Authentication Flow
* Swagger Documentation
* Postman Collection
* File Uploads
* Environment Variables
* Getting Started
* Troubleshooting & Notes
* Contributing
* License

---

## 🧾 Overview

The E-commerce REST API is a modular and scalable backend that powers core operations of an online store — such as user authentication, product management, cart operations, file uploads, and rating functionality.

It’s designed for learning, demonstration, or integration into real projects. With JWT-based authentication, centralized error handling, and request logging, it provides a realistic foundation for production systems.

---

## 🚀 Features

* JWT Authentication
* User Registration & Login
* Product CRUD APIs
* Product Rating System
* Cart Management
* File Uploads (multer)
* Centralized Error Handling with Winston Logging
* Swagger API Docs (/api-docs)
* Filtering, Sorting & Query Support
* Modular Architecture with ES6 Modules

---

## 🏗️ Architecture

E-commerce_RestAPI/
├── server.js                # Entry point
├── swagger.json             # API documentation
├── log.txt                  # Winston log file
├── uploads/                 # Uploaded images
└── src/
├── features/
│   ├── product/         # Product model, controller, routes
│   ├── cartItems/       # Cart model, controller, routes
│   └── user/            # User model, controller, routes
├── middlewares/
│   ├── jwt.middleware.js
│   ├── logger.middleware.js
│   └── errorHandler.js
└── utils/               # Helper modules (if any)

Each feature (Product, User, Cart) is isolated with its own controller, routes, and model for maintainability and scalability.

---

## 🧰 Tech Stack

Runtime: Node.js
Framework: Express.js
Auth: JSON Web Token (JWT)
Uploads: multer
Logging: Winston
Docs: Swagger UI
Database: JSON/in-memory (easily swappable for MongoDB)

---

## 🔗 API Endpoints

### 👤 Authentication Routes (/api/users)

POST /api/users/register – Register a new user
POST /api/users/login – Log in and receive JWT token

Example Request:
{
"name": "John Doe",
"email": "[john@example.com](mailto:john@example.com)",
"password": "12345"
}

Example Response:
{
"status": "success",
"user": {
"id": 1,
"email": "[john@example.com](mailto:john@example.com)"
}
}

---

### 🛍️ Product Routes (/api/products)

Protected by JWT authentication.

GET /api/products – Get all products
GET /api/products/:id – Get single product details
POST /api/products – Add a new product (with image upload)
POST /api/products/:id/rate – Rate a product
PUT /api/products/:id – Update product
DELETE /api/products/:id – Delete product
GET /api/products/filter – Filter products by category, price, etc.

Example Request:
POST /api/products
Content-Type: multipart/form-data
{
"name": "Laptop",
"desc": "Gaming laptop",
"price": 75000,
"category": "Electronics",
"image": "file.jpg"
}

Example Response:
{
"success": true,
"msg": "Product added successfully",
"product": { "id": 3, "name": "Laptop", "price": 75000 }
}

---

### 🛒 Cart Routes (/api/cartItems)

JWT protected.

POST /api/cartItems – Add item to cart
DELETE /api/cartItems/:id – Remove item from cart
GET /api/cartItems – View all cart items

Example Response:
{
"success": true,
"cart": [
{ "productId": 2, "quantity": 1, "price": 75000 }
]
}

---

## 🔐 JWT Authentication Flow

Client → Server: POST /api/users/login (email, password)
Server → JWT: Validate credentials and issue token
JWT → Client: Returns JWT token
Client → Server: Sends token with Authorization header
Server → Middleware: Verifies token via jwtAuth
Server → Client: Grants access to protected route

Token is created using jsonwebtoken and sent as a Bearer Token or stored in cookies.
Middleware (jwt.middleware.js) validates every protected request.

---

## 📜 Swagger Documentation

The project includes integrated API documentation accessible at:

[http://localhost:3200/api-docs](http://localhost:3200/api-docs)

You can interactively test all routes and view schema definitions directly there.

---

## 📮 Postman Collection

You can import the Postman collection (recommended for quick testing):

1. Open Postman.
2. Click Import → choose ApiList.txt or your exported collection.
3. Set environment variable base_url = [http://localhost:3200](http://localhost:3200).
4. Test routes interactively with authentication headers.

---

## 🖼️ File Uploads

File uploads are handled using multer and stored in the /uploads directory.

Uploaded images are renamed with a timestamp to avoid filename collisions.

To test uploads:
POST /api/products
Content-Type: multipart/form-data

Example field: image: <yourfile.jpg>

---

## ⚙️ Environment Variables

Create a .env file in the root:

PORT=3200
JWT_SECRET=mysecretkey
UPLOAD_DIR=./uploads

---

## 🧑‍💻 Getting Started

# Clone

git clone [https://github.com/Faisalsaificode/E-commerce_RestAPI.git](https://github.com/Faisalsaificode/E-commerce_RestAPI.git)
cd E-commerce_RestAPI

# Install dependencies

npm install

# Run the server

node server.js

# or

npm start

Server runs by default at:
[http://localhost:3200](http://localhost:3200)

---

## 🧩 Troubleshooting & Notes

CORS errors – Ensure CORS middleware is enabled for cross-origin requests
File upload not working – Verify UPLOAD_DIR exists and multer configuration uses correct path
JWT “invalid signature” – Check JWT_SECRET in .env matches your token’s secret
404 route – Verify base path (/api/...) and middleware order in server.js

---

## 🤝 Contributing

Contributions are welcome!
Follow the standard GitHub flow:

1. Fork the repo
2. Create your feature branch: git checkout -b feature/new-feature
3. Commit changes and open a pull request

---

## 🧾 License

This project is open source and available under the MIT License.

---

### 👨‍💻 Author

Developed by Faisal Saifi
GitHub: [https://github.com/Faisalsaificode](https://github.com/Faisalsaificode)
Email: [faisalsaificode@gmail.com](mailto:faisalsaificode@gmail.com)
Project: E-commerce REST API (Node.js + Express + JWT)

---

“Build clean APIs. Design for scalability. Document for humans.” 🚀

---

✅ Copy everything above and paste it directly into your README.md file — it’s already fully structured, readable, and GitHub-compatible.
