import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);
import dotenv from 'dotenv';
dotenv.config();

describe('store api users', () => {
  let token: string;
  beforeAll(() => {
    const secret = process.env.SECRET;
    //@ts-ignore
    token = jwt.sign({ firstname: 'name0', lastname: 'name0' }, secret);
  });
  it('add user should return success code', async () => {
    const res = await request.post('/users').send({
      firstname: 'name0',
      lastname: 'name0',
      email: 'mail@email.com',
      password: 'password',
    });

    expect(res.statusCode).toBe(200);
  });

  it('index should return success code', async () => {
    const res = await request.get('/users').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
  });
  it('show user should return success code', async () => {
    const res = await request.get('/users/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
  });
  it('update user should return success code', async () => {
    const res = await request
      .put('/users')
      .send({
        firstname: 'name1',
        lastname: 'name1',
        email: 'name@mail.com',
      })
      .set({
        authorization: token,
      });
    expect(res.statusCode).toBe(200);
  });

  it('delete user should return success code', async () => {
    const res = await request.delete('/users/2').set({
      authorization: token,
    });
    expect(res.statusCode).toBe(200);
  });
});
