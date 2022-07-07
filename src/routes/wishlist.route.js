import express from 'express';
import * as wishListController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/:_id', userAuth, wishListController.addToWishList);

router.get('', userAuth, wishListController.getWishlist);

router.delete('/remove/:_id', userAuth, wishListController.removeFromWishlist);

export default router;
