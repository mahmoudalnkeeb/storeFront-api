import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);


describe('store api', () => {
  it('add order should return success code', async () => {
    const res = await request
      .post('/orders')
      .send({
        quantity: 5,
        user_id: 2,
      })
      .set({
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0OTE2Njg1fQ.-AiCmZD_uoUqTcjLymHFH1QWIhZ15Rmw6pI8Gpqim2k',
      });
    expect(res.statusCode).toBe(200);
  });
  it('orders by user should return success code', async (done) => {
    const res = await request.get('/orders/2').set({
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0OTE2Njg1fQ.-AiCmZD_uoUqTcjLymHFH1QWIhZ15Rmw6pI8Gpqim2k',
    });
    expect(res.statusCode).toBe(200);
    done();
  });
  it('completed orders should return success code', async (done) => {
    const res = await request.get('/orders/completed/2').set({
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0OTE2Njg1fQ.-AiCmZD_uoUqTcjLymHFH1QWIhZ15Rmw6pI8Gpqim2k',
    });
    expect(res.statusCode).toBe(200);
    done();
  });
  it('complete should return success code', async (done) => {
    const res = await request.put('/orders/2').set({
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0OTE2Njg1fQ.-AiCmZD_uoUqTcjLymHFH1QWIhZ15Rmw6pI8Gpqim2k',
    });
    expect(res.statusCode).toBe(200);
    done();
  });

  it('delete order should return success code', async (done) => {
    const res = await request.delete('/orders/2').set({
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjQ0OTE2Njg1fQ.-AiCmZD_uoUqTcjLymHFH1QWIhZ15Rmw6pI8Gpqim2k',
    });
    expect(res.statusCode).toBe(200);
    done();
  });
});
