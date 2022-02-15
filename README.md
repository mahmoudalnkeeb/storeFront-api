# Store RESTAPI

[About project](#about)

[Installation](#Installation-and-other-scripts-available)

[Features](#features)

## about

    this project is a Fully secure Store api password-decryption and JWT authorization
    created using Express and postgreSQL Database tested using Jasmine.


## Installation and other scripts available

- ### to install all required dependencies

    `npm install`

- ### migrate production and test database

    first create production and testing database 
    and update database.json with correct data
    and then run.

    `npm i -g db-migrate db-migrate-pg`
    
        "npm run migrate-up" => migrate up production database
        "npm run migrate-down" => migrate down production database
        "npm run migrate-up-test" => migrate up testing database
        "npm run migrate-down-test" => migrate down testing database


- ### enviroment variables

    #### database is running on default port (5432)
        POSTGRES_HOST=database host
        POSTGRES_USER=database user
        POSTGRES_PASS=database password
        POSTGRES_DB=production database name
        POSTGRES_TEST_DB=testing database name
        ENV=dev
        SALT=SALT added to password 
        HASH_ROUNDS="10"
        SECRET=secert string to make token signeture
- ### to build production && start

    `npm run start`

- ### to test app

    `npm run test`

    testing should run in specific order to prevent conflict bettween endpoints and models
  
        "spec_files": [
        "../src/models/tests/userSpec.ts",
        "../src/models/tests/productSpec.ts",
        "../src/models/tests/orderSpec.ts",
        "../src/handlers/tests/usersSpec.ts",
        "../src/**/tests/*[sS]pec.ts"]

- ### linting 

    `npm run lint`

- ### prettify code 

    `npm run prettier`

## features

- #### users 
    - create user
    - show all users => token required
    - show user by id => token required 
    - update user data => token required 
    - delete user data => token required

- #### products
    - create product => token required 
    - show all products 
    - show product by id 
    - update product => token required 
    - delete product => token required 
    - show products by category
    - show most ordered products
- #### orders 
    - create orders by user => token required
    - show order by user => token required 
    - show completed orders by users => token required 
    - delete orders by user => token required 
