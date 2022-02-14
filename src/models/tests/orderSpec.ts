import { Order, OrdersModel } from '../order';
const order = new OrdersModel();
describe('order model test', () => {
  it('should have an addOrder method', () => {
    expect(order.addOrder).toBeDefined();
  });

  it('should have a completeOrder method', () => {
    expect(order.completeOrder).toBeDefined();
  });

  it('should have a completedOrders method', () => {
    expect(order.completedOrders).toBeDefined();
  });

  it('should have a deleteOrder method', () => {
    expect(order.deleteOrder).toBeDefined();
  });

  it('should have a ordersBuUser method', () => {
    expect(order.ordersBuUser).toBeDefined();
  });
  //-----------------
  it('should add order', async () => {
    const res = await order.addOrder({
      quantity: 10,
      order_status: 'active',
      user_id: 1,
    });

    expect(res).toEqual({
      id: 1,
      quantity: 10,
      order_status: 'active',
      user_id: 1,
    });
  });

  it('should return orders by user list', async () => {
    const res = await order.ordersBuUser(1);

    expect(res).toEqual([
      {
        id: 1,
        quantity: 10,
        order_status: 'active',
        user_id: 1,
      },
    ]);
  });

  it('should set order status to complete', async () => {
    const res = await order.completeOrder(1);

    expect(res).toEqual({
      id: 1,
      quantity: 10,
      order_status: 'complete',
      user_id: 1,
    });
  });

  it('should return completed orders by user', async () => {
    const res = await order.completedOrders(1);
    expect(res).toEqual([
      {
        id: 1,
        quantity: 10,
        order_status: 'complete',
        user_id: 1,
      },
    ]);
  });
  it('should delete order and return empty array', async () => {
    const res = await order.deleteOrder(1);
    expect(res).toEqual([
      {
        id: 1,
        quantity: 10,
        order_status: 'complete',
        user_id: 1,
      },
    ]);
  });
});
