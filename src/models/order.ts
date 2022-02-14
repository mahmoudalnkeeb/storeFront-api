import client from '../config/db';

export interface Order {
  id?: number;
  quantity: number;
  order_status: 'active' | 'complete';
  user_id: number;
}

export class OrdersModel {
  async addOrder(order: Order): Promise<Order> {
    try {
      const sql =
        'INSERT INTO orders(quantity , order_status ,user_id) VALUES($1 , $2 , $3 ) RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [
        order.quantity,
        order.order_status,
        order.user_id,
      ]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (err) {
      throw err;
    }
  }
  async ordersBuUser(user_id: number): Promise<Order[]> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id = $1';
      const con = await client.connect();
      const res = await con.query(sql, [user_id]);
      const data = res.rows;
      con.release();
      return data;
    } catch (err) {
      throw err;
    }
  }
  async completedOrders(user_id: number): Promise<Order[]> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id = $1 AND order_status=$2';
      const con = await client.connect();
      const res = await con.query(sql, [user_id, 'complete']);
      const data = res.rows;
      con.release();
      return data;
    } catch (err) {
      throw err;
    }
  }
  async deleteOrder(order_id: number): Promise<Order[]> {
    try {
      const sql = 'DELETE FROM orders WHERE id = $1 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, [order_id]);
      const data = res.rows;
      con.release();
      return data;
    } catch (err) {
      throw err;
    }
  }
  async completeOrder(order_id: number): Promise<Order> {
    try {
      const sql = 'UPDATE orders SET order_status=$1 WHERE id=$2 RETURNING *';
      const con = await client.connect();
      const res = await con.query(sql, ['complete', order_id]);
      const data = res.rows[0];
      con.release();
      return data;
    } catch (err) {
      throw err;
    }
  }
}
