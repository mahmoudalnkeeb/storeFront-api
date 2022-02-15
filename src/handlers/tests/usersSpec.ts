import supertest from 'supertest';
import app from '../../server';
const request = supertest(app);

let token: string;

describe('store api', () => {
  it('add user should return success code', async (done) => {
    const res = await request.post('/users').send({
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'name@mail.com',
      password: 'password',
    });
    token = res.body.token;
    expect(res.statusCode).toBe(200);
    done();
  });
  it('index should return success code', async (done) => {
    const res = await request.get('/users').set({ authorization: token });
    expect(res.statusCode).toBe(200);
    done();
  });
  it('show user should return success code', async (done) => {
    const res = await request.get('/users/1').set({ authorization: token });
    expect(res.statusCode).toBe(200);
    done();
  });
  it('update user should return success code', async (done) => {
    const res = await request
      .put('/users')
      .send({
        firstname: 'firstname1',
        lastname: 'lastname1',
        email: 'name@mail.com',
      })
      .set({ authorization: token });
    expect(res.statusCode).toBe(200);
    done();
  });

  it('delete user should return success code', async (done) => {
    const res = await request.delete('/users/1').set({ authorization: token });
    expect(res.statusCode).toBe(200);
    done();
  });
});
