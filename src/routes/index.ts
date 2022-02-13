import { Router } from 'express';
import ProductRouter from './apis/products';
// import OrdersRouter from './apis/orders';
import UsersRouter from './apis/users';

const routes = Router();
routes.get('/', (req, res) => {
    res.send('Welcome to Store API');
});
routes.use('/products', ProductRouter);
// routes.use('/orders', OrdersRouter);
routes.use('/users', UsersRouter);

export default routes;
