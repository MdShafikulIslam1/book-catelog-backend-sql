# Introduction And Description For Book Catalog Backend

---

## Description:

This project has made for management books including read,write and order.Here user have two role ,one is customer who can read any book based on category and see all book,can create an order;another role is admin who can perform major task in this project.He can create book,update,also manage any user(customer)

## Technology Stack:

- Use TypeScript as the Programming Language.
- Use Express.js as the web framework.
- Use Prisma as the Object Relational Model (ORM)
- Use postgreSQL as the database

## Features

### User(customer,admin):

- signup with giving his/her some basic information
- signin with email and password
- get profile data

### Customer:

- get all categories
- get a specific category
- get all book
- get Books By CategoryId
- get single book
- create order
- get all order for specific customer
- get single order for specific customer

### Admin:

- see all users
- get a single user
- update user
- delete user
- create category for book
- get all categories
- get a specific category
- update category
- delete category
- create book
- get all book
- get Books By CategoryId
- get single book
- update book
- delete book
- get all orders
- get single order for specific admin

## Application Routes:

### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)(Get all user)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE)
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE)

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)
  Orders
- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)

## [Api Documentation](https://documenter.getpostman.com/view/26339421/2s9Y5ctzu6)
