import { Order, OrdersModel } from '../models/order';
import { Request, Response, NextFunction } from 'express';

const Orders = new OrdersModel();

// list Orders endpoint.
export async function orderByUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user_id = parseInt(req.params.user_id);
    const OrderInfo = await Orders.ordersBuUser(user_id);
    res.status(200).json(OrderInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: 'something went wrong' });
  }
}
// list Orders endpoint.
export async function completedOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user_id = parseInt(req.params.user_id);
    const OrderInfo = await Orders.completedOrders(user_id);
    res.status(200).json(OrderInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: 'something went wrong' });
  }
}

// create Order endpoint.

export async function addOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const order: Order = {
      quantity: req.body.quantity,
      order_status: req.body.quantity,
      product_id: req.body.product_id,
      user_id: req.body.user_id,
    };
    const newOrder = await Orders.addOrder(order);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400);
    res.json({ message: 'data entered is not valid' });
  }
}

// delete Order end point

export async function deleteOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const OrderInfo = await Orders.deleteOrder(parseInt(id));
    res.status(200).json(OrderInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: `cannot find Order with id : ${req.params.id}` });
  }
}
// complete Order end point

export async function completeOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const OrderInfo = await Orders.completeOrder(parseInt(id));
    res.status(200).json(OrderInfo);
  } catch (error) {
    res.status(400);
    res.json({ message: `cannot find Order with id : ${req.params.id}` });
  }
}
