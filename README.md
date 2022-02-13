# Store RESTAPI

[Installation](#install)

[About project](#about)

[Features](#features)

## install
- to install all required dependencies

    `npm install`

- to build production && start

    `npm run tsc`

## about

    this project is a Fully secure Store api password-decryption and JWT authorization
    created using Express and postgreSQL Database tested using Jasmine.

## features

- users 
    - create user
    - show all users => token required
    - show user by id => token required 
    - update user data => token required 
    - delete user data => token required

- products
    - create product => token required 
    - show all products 
    - show product by id 
    - update product => token required 
    - delete product => token required 
    - show products by category
    - show most ordered products
- orders 
    - create orders by user => token required
    - show order by user => token required 
    - show completed orders by users => token required 
    - delete orders by user => token required 