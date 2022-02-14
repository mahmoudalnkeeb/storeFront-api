# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index
    - '/products'[GET] 
- Show 
    - '/products/:id'[GET] 
- Create [token required]
    - '/products'[POST] 
- Delete [token required]
    - '/products'[DELETE]
- Update [token required]
    - '/products'[PUT]

#### Users
- Index [token required]
    - '/users'[GET]
- Show [token required]
    - '/users/:id'[GET] 
- Create [return token]
    - '/users'[POST]
- Delete [token required]
    - '/users/:id'[DELETE]
- Update [token required]
    - '/users'[PUT]
#### Orders
- Create [token required]
    - '/orders'[POST]
- Current Order by user (args: user id)[token required]
    - '/orders/:id'[GET]
- Completed Orders by user (args: user id)[token required]
    - '/orders/completed/:id'[GET]
- Set Completed Order to complete status [token required]
    - '/orders/:id'[PUT]
- Delete order [token required]
    - '/orders/:id'[DELETE]

## Data Shapes
#### Product
-  id
- name
- price
- category

#### User
- id
- firstName
- lastName
- email
- password

#### Orders
- id
- quantity of each product in the order
- status of order (active or complete)
- id of each product in the order
- user_id


