import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/:_id', userAuth, cartController.addToCart);

router.get('', userAuth, cartController.getCart);

router.put('/update/:_id', userAuth, cartController.updateCart);

router.delete('/remove/:_id', userAuth, cartController.removeFromCart);

export default router;