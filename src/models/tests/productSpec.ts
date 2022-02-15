import { Product, ProductsModel } from '../product';

const product = new ProductsModel();
let originalTimeout: number;

beforeEach(function () {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});
describe('product model test', () => {
  it('should have an index method', () => {
    expect(product.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(product.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(product.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(product.update).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(product.destroy).toBeDefined();
  });
  //-----------------
  it('should create product', async (done) => {
    const res = await product.create({
      name: 'book',
      price: 15,
      category: 'books',
    });

    expect(res).toEqual({
      id: 2,
      name: 'book',
      price: 15,
      category: 'books',
    });
    done();
  });

  it('should return products list', async (done) => {
    const res = await product.index();

    expect(res).toEqual([
      {
        id: 2,
        name: 'book',
        price: 15,
        category: 'books',
      },
    ]);
    done();
  });

  it('should return product with id = 1', async (done) => {
    const res = await product.show(2);

    expect(res).toEqual({
      id: 2,
      name: 'book',
      price: 15,
      category: 'books',
    });
    done();
  });

  it('should update product', async (done) => {
    const res = await product.update({
      id: 2,
      name: 'book1',
      price: 10,
      category: 'books',
    });

    expect(res).toEqual({
      id: 2,
      name: 'book1',
      price: 10,
      category: 'books',
    });
    done();
  });

  it('should delete product and return empty array', async (done) => {
    const res = await product.destroy(2);

    expect(res).toEqual({
      id: 2,
      name: 'book1',
      price: 10,
      category: 'books',
    });
    done();
  });
  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
