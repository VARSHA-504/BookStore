import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

export const addToCart = async (req, res, next) => {
    try {
      const data = await CartService.addToCart(req.params._id, req.body.UserID);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Book added to cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
};

export const getCart = async (req, res, next) => {
  try {
    const data = await CartService.getCart(req.body.UserID);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Cart fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const updateCart = async(req, res, next) => {
  try{
    const data = await CartService.updateCart(req.params._id, req.body)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Cart updated successfully' 
    });
  }catch(error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
  }
} 