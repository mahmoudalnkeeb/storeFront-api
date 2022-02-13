# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- Delete [token required]
- Update [token required]
- [OPTIONAL] Top 5 most popular products <!-- TODO -->
- [OPTIONAL] Products by category (args: product category) <!-- TODO -->

#### Users
- Index [token required]
- Show [token required]
- Create [return token]
- Delete [token required]
- Update [token required]
#### Orders
- Create [token required]
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required] <!-- TODO -->

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


