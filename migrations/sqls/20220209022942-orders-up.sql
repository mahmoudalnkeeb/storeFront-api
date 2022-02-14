CREATE TABLE orders( 
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    order_status VARCHAR(10) NOT NULL,
user_id INTEGER);