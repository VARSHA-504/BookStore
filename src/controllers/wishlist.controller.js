import HttpStatus from 'http-status-codes';
import * as WishListService from '../services/wishlist.service';

export const addToWishList = async (req, res, next) => {
    try {
      const data = await WishListService.addToWishlist(req.params._id, req.body.userId);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Book added to the WishList successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};