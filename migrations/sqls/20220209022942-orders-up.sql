CREATE TABLE orders( 
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    order_status VARCHAR(10) NOT NULL,
    product_id BIGINT REFERENCES products(id),
    user_id BIGINT REFERENCES users(id) );