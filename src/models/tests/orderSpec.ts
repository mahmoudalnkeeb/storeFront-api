import { Order, OrdersModel } from '../order';
const order = new OrdersModel();
describe('order model test', () => {
    let originalTimeout: number;

    beforeEach(function () {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });
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
      expect(order.ordersByUser).toBeDefined();
    });
    //-----------------
    it('1 should add order', async (done) => {
      const res = await order.addOrder({
        quantity: 10,
        order_status: 'active',
        user_id: 2,
      });

      expect(res).toEqual({
        id: 2,
        quantity: 10,
        order_status: 'active',
        user_id: 2,
      });
      done();
    });

    it('2 should return orders by user list', async (done) => {
      const res = await order.ordersByUser(2);

      expect(res).toEqual([
        {
          id: 2,
          quantity: 10,
          order_status: 'active',
          user_id: 2,
        },
      ]);
      done();
    });

    it('3 should set order status to complete', async (done) => {
      const res = await order.completeOrder(2);

      expect(res).toEqual({
        id: 2,
        quantity: 10,
        order_status: 'complete',
        user_id: 2,
      });
      done();
    });

    it('4 should return completed orders by user', async (done) => {
      const res = await order.completedOrders(2);
      expect(res).toEqual([
        {
          id: 2,
          quantity: 10,
          order_status: 'complete',
          user_id: 2,
        },
      ]);
      done();
    });
    it('5 should delete order and return empty array', async (done) => {
      const res = await order.deleteOrder(2);
      expect(res).toEqual([
        {
          id: 2,
          quantity: 10,
          order_status: 'complete',
          user_id: 2,
        },
      ]);
      done();
    });
    afterEach(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});
