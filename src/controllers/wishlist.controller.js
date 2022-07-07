import HttpStatus from 'http-status-codes';
import * as WishListService from '../services/wishlist.service';

export const addToWishList = async (req, res, next) => {
    try {
      const data = await WishListService.addToWishlist(req.params._id, req.body.UserID);
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

export const getWishlist = async (req, res, next) => {
    try {
      const data = await WishListService.getWishlist(req.body.UserID);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Wishlist fetched'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  export const removeFromWishlist = async (req, res, next) => {
    try {
      const data = await WishListService.removeFromWishlist(req.params._id, req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book deleted from Wishlist'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };
  
  