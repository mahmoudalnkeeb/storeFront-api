import { Router } from 'express';
const router = Router();
import * as userRoutes from '../../controllers/users';
import * as jwt from '../../middlewares/authorization'

// POST route to add new user
router.post('/',jwt.sign,userRoutes.create);

// GET route to show all users
router.get('/',jwt.verify,userRoutes.index );

// GET route to show user
router.get('/:id',jwt.verify,userRoutes.show);

// Put route to update user's data
router.put('/' ,jwt.verify,userRoutes.update);

// Delete route to delete user's data
router.delete('/:id',jwt.verify,userRoutes.destroy);

export default router;
