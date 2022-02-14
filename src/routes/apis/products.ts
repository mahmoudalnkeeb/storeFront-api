import { Router } from 'express';
const router = Router();
import * as productsRoutes from '../../handlers/products';
import {verify} from '../../middlewares/authorization'; 

// POST route to add new product
router.post('/',verify,productsRoutes.create);//TODO add auth that requet from logged user

// GET route to show all products
router.get('/',productsRoutes.index );

// GET route to show specific product
router.get('/:id',productsRoutes.show);

// Put route to update product info
router.put('/' ,verify,productsRoutes.update );//TODO add auth that requet from logged user

// Delete route to delete product
router.delete('/:id',verify,productsRoutes.destroy);//TODO add auth that requet from logged user

export default router;
