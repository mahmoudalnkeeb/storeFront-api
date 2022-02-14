import { User, UsersModel } from '../user';
const user = new UsersModel();
describe('user model test', () => {
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
  //-----------------
  it('should create user', async () => {
    const res = await user.create({
      first_name: 'firstname',
      last_name: 'lastname',
      email: 'name@email.com',
      hash_string: 'pasword123',
    });
    //@ts-ignore
    let { id, first_name, last_name, email } = res;
    expect({ id, first_name, last_name, email }).toEqual({
      id: 1,
      first_name: 'firstname',
      last_name: 'lastname',
      email: 'name@email.com',
    });
  });

  it('should return users list', async () => {
    const res = await user.index();
    //@ts-ignore
    let { id, first_name, last_name, email } = res[0];

    expect({ id, first_name, last_name, email }).toEqual(
      //@ts-ignore
      {
        id: 1,
        first_name: 'firstname',
        last_name: 'lastname',
        email: 'name@email.com',
      }
    );
  });

  it('should return user with id = 2', async () => {
    const res = await user.show(1);
    //@ts-ignore
    let { id, first_name, last_name, email } = res;

    expect({ id, first_name, last_name, email }).toEqual(
      //@ts-ignore
      {
        id: 1,
        first_name: 'firstname',
        last_name: 'lastname',
        email: 'name@email.com',
      }
    );
  });

  it('should update user', async () => {
    const res = await user.update('firstname1', 'lastname1', 'name@email.com');
    //@ts-ignore
    let { id, first_name, last_name, email } = res;

    expect({ id, first_name, last_name, email }).toEqual(
      //@ts-ignore
      {
        id: 1,
        first_name: 'firstname1',
        last_name: 'lastname1',
        email: 'name@email.com',
      }
    );
  });

  it('should delete user and return empty array', async () => {
    const res = await user.destroy(1);

    //@ts-ignore
    let { id, first_name, last_name, email } = res;

    expect({ id, first_name, last_name, email }).toEqual(
      //@ts-ignore
      {
        id: 1,
        first_name: 'firstname1',
        last_name: 'lastname1',
        email: 'name@email.com',
      }
    );
  });
});
