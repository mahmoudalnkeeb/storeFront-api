import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.SECRET;

describe('store api products', () => {
  let token: string;
  beforeAll(() => {
    //@ts-ignore
    token = jwt.sign({ first_name: 'name1', last_name: 'name1' }, secret);
  });
  it('add product should return success code', async () => {
    const res = await request
      .post('/products')
      .send({
        name: 'product',
        price: 15,
        category: 'products',
      })
      .set({
        authorization: token,
      });
    expect(res.statusCode).toBe(200);
  });
  it('index should return success code', async (done) => {
    const res = await request.get('/products');
    expect(res.statusCode).toBe(200);
    done();
  });
  it('show product should return success code', async (done) => {
    const res = await request.get('/products/2');
    expect(res.statusCode).toBe(200);
    done();
  });
  it('update product should return success code', async (done) => {
    const res = await request
      .put('/products')
      .send({
        id: 2,
        name: 'product1',
        price: 10,
        category: 'products',
      })
      .set({
        authorization: token,
      });
    expect(res.statusCode).toBe(200);
    done();
  });

  it('delete product should return success code', async (done) => {
    const res = await request.delete('/products/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
    done();
  });
});
