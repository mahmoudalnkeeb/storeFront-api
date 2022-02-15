import { Router } from 'express';
const router = Router();
import * as ordersRoutes from '../../handlers/orders';
import {verify} from '../../middlewares/authorization'

// POST route to add new order
router.post('/', verify, ordersRoutes.addOrder);

// GET route to show order's data with order_id
router.get('/:id', verify, ordersRoutes.orderByUser);

// GET route to show completed orders' data with user_id
router.get('/completed/:id', verify, ordersRoutes.completedOrders);

// Delete route to delete order
router.delete('/:id', verify, ordersRoutes.deleteOrder);

// PUT route to Update completed order to complete status
router.put('/:id', verify, ordersRoutes.completeOrder);

export default router;
