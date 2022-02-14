import client from '../config/db';
import {hash , compareHash}from '../utils/bcrypt';
export interface User {
    id?:number;
    first_name:string;
    last_name:string;
    email:string;
    hash_string:string;
}
export class UsersModel {
  // Show all Users

  async index(): Promise<User[] | Error> {
    try {
      const sql = 'SELECT * FROM users';
      const con = await client.connect();
      const res = await con.query(sql);
      const data = res.rows;
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  // Show one User with id

  async show(id: number): Promise<User | Error> {
    try {
      const sql = 'SELECT * FROM users WHERE id = $1';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  // Add User

  async create(user: User): Promise<User | Error> {
    try {
      const sql =
        'INSERT INTO users(first_name , last_name , email , hash_string) VALUES($1 , $2 , $3 , $4) RETURNING *';
      const con = await client.connect();
      const hashed = hash(user.hash_string);
      const res = await con.query(sql, [
        user.first_name,
        user.last_name,
        user.email,
        hashed,
      ]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  // Update User

  async update(
    firstName: string,
    lastName: string,
    email: string
  ): Promise<User | Error> {
    try {
      const sql =
        'UPDATE users SET first_name = $1 , last_name = $2 WHERE email = $3 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [firstName, lastName, email]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }

  // Delete User

  async destroy(id: number): Promise<User | Error> {
    try {
      const sql = 'DELETE FROM users WHERE id = $1 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [id]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (error) {
      return new Error(`something went wrong ${error}`);
    }
  }
}
