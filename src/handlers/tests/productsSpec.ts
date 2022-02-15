import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);

describe('store api', () => {
  it('add product should return success code', async () => {
    const res = await request
      .post('/products')
      .send({
        name: 'product',
        price: 15,
        category: 'products',
      })
      .set({
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0ODU5ODcyfQ.X4mRczNsSYteN5r1oG9JV39XTllgDhY5N75k-818wc4',
      });
    expect(res.statusCode).toBe(200);
  });
  it('index should return success code', async (done) => {
    const res = await request.get('/products');
    expect(res.statusCode).toBe(200);
    done();
  });
  it('show product should return success code', async (done) => {
    const res = await request.get('/products/1');
    expect(res.statusCode).toBe(200);
    done();
  });
  it('update product should return success code', async (done) => {
    const res = await request
      .put('/products')
      .send({
        id: 1,
        name: 'product1',
        price: 10,
        category: 'products',
      })
      .set({
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0ODU5ODcyfQ.X4mRczNsSYteN5r1oG9JV39XTllgDhY5N75k-818wc4',
      });
    expect(res.statusCode).toBe(200);
    done();
  });

  it('delete product should return success code', async (done) => {
    const res = await request.delete('/products/1').set({
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0ODU5ODcyfQ.X4mRczNsSYteN5r1oG9JV39XTllgDhY5N75k-818wc4',
    });
    expect(res.statusCode).toBe(200);
    done();
  });
});
