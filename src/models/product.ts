import client from '../config/db';
export interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
}
export class ProductsModel {
  // Show all Products

  async index(): Promise<Product[]> {
    try {
      const sql = 'SELECT * FROM products';
      const con = await client.connect();
      const res = await con.query(sql);
      return res.rows;
    } catch (error) {
      throw error;
    }
  }

  // Show one Product with id

  async show(id: number): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id = $1';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Add Product

  async create(product: Product): Promise<Product> {
    try {
      const sql =
        'INSERT INTO products(name , price , category) VALUES($1 , $2 , $3) RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [
        product.name,
        product.price,
        product.category,
      ]);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Update Product

  async update(product: Product): Promise<Product> {
    try {
      const sql =
        'UPDATE products SET name = $1 , price = $2 , category = $3 WHERE id = $4 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [
        product.name,
        product.price,
        product.category,
        product.id,
      ]);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Delete Product

  async destroy(id: number): Promise<Product> {
    try {
      const sql = 'DELETE FROM products WHERE id = $1 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  }
}
