import { UsersModel } from '../user';

const user = new UsersModel();
describe('user model test', () => {
  let originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  it('should have an index method', () => {
    expect(user.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(user.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(user.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(user.update).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(user.destroy).toBeDefined();
  });

  it('1 should create user', async (done) => {
    const res = await user.create({
      first_name: 'name',
      last_name: 'name',
      email: 'mail@email.com',
      hash_string: 'pasword',
    });
    //@ts-ignore
    delete res.hash_string;
    //@ts-ignore
    expect(res).toEqual({
      id: 1,
      first_name: 'name',
      last_name: 'name',
      email: 'mail@email.com',
    });
    done();
  });
  it('should return users list', async (done) => {
    const res = await user.index();
    //@ts-ignore
    delete res[0].hash_string;
    //@ts-ignore
    expect(res[0]).toEqual({
      id: 1,
      first_name: 'name',
      last_name: 'name',
      email: 'mail@email.com',
    });
    done();
  });

  it('should return user with id = 2', async (done) => {
    const res = await user.show(1);
    //@ts-ignore
    delete res.hash_string;
    //@ts-ignore
    expect(res).toEqual({
      id: 1,
      first_name: 'name',
      last_name: 'name',
      email: 'mail@email.com',
    });
    done();
  });

  it('should update user', async (done) => {
    const res = await user.update('name1', 'name1', 'mail@email.com');
    //@ts-ignore
    delete res.hash_string;
    //@ts-ignore
    expect(res).toEqual({
      id: 1,
      first_name: 'name1',
      last_name: 'name1',
      email: 'mail@email.com',
    });
    done();
  });

  it('should delete user and return empty array', async (done) => {
    const res = await user.destroy(1);
    //@ts-ignore
    delete res.hash_string;
    //@ts-ignore
    expect(res).toEqual({
      id: 1,
      first_name: 'name1',
      last_name: 'name1',
      email: 'mail@email.com',
    });
    done();
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
