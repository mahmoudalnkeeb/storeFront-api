import { Product, ProductsModel } from '../product';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.SECRET;
const product = new ProductsModel();
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
  it('should create product', async () => {
    const res = await product.create({
      name: 'book',
      price: 15,
      category: 'books',
    });

    expect(res).toEqual({
      id: 1,
      name: 'book',
      price: 15,
      category: 'books',
    });
  });

  it('should return products list', async () => {
    const res = await product.index();

    expect(res).toEqual([
      {
        id: 1,
        name: 'book',
        price: 15,
        category: 'books',
      },
    ]);
  });

  it('should return product with id = 1', async () => {
    const res = await product.show(1);

    expect(res).toEqual({
      id: 1,
      name: 'book',
      price: 15,
      category: 'books',
    });
  });

  it('should update product', async () => {
    const res = await product.update({
      id: 1,
      name: 'book1',
      price: 10,
      category: 'books',
    });

    expect(res).toEqual({
      id: 1,
      name: 'book1',
      price: 10,
      category: 'books',
    });
  });

  it('should delete product and return empty array', async () => {
    const res = await product.destroy(1);

    expect(res).toEqual({
      id: 1,
      name: 'book1',
      price: 10,
      category: 'books',
    });
  });
});
