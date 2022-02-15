import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.SECRET;

describe('store api', () => {
  let token: string;
  beforeAll(() => {
    //@ts-ignore
    token = jwt.sign({ first_name: 'name1', last_name: 'name1' }, secret);
  });
  it('add order should return success code', async () => {
    const res = await request
      .post('/orders')
      .send({
        quantity: 5,
        user_id: 2,
      })
      .set({
        authorization: token,
      });
    expect(res.statusCode).toBe(200);
  });
  it('orders by user should return success code', async (done) => {
    const res = await request.get('/orders/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
    done();
  });
  it('completed orders should return success code', async (done) => {
    const res = await request.get('/orders/completed/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
    done();
  });
  it('complete should return success code', async (done) => {
    const res = await request.put('/orders/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
    done();
  });

  it('delete order should return success code', async (done) => {
    const res = await request.delete('/orders/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
    done();
  });
});
