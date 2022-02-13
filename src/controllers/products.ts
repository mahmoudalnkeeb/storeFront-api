import { Product, ProductsModel } from '../models/product';
import { Request, Response, NextFunction } from 'express';

const Products = new ProductsModel();

// list Products endpoint.
export async function index(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const ProductInfo = await Products.index();
    res.status(200).json(ProductInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: `something went wrong${error}` });
  }
}

//  get Product by id endpoint.
export async function show(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const ProductInfo = await Products.show(parseInt(id));
    res.status(200).json(ProductInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: `cannot find Product with id : ${req.params.id}` });
  }
}
// create Product endpoint.

export async function create(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const Product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await Products.create(Product);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400);
    res.json({ message: 'data entered is not valid' });
  }
}
// update Product endpoint.

export async function update(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const Product: Product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await Products.update(Product);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400);
    res.json({ message: 'data entered is not valid'+error });
  }
}

// delete Product end point

export async function destroy(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const ProductInfo = await Products.destroy(parseInt(id));
    res.status(200).json(ProductInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: `cannot find Product with id : ${req.params.id}` });
  }
}
