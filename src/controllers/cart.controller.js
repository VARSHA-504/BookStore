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

export const updateCart = async (req, res, next) => {
  try {
    const data = await CartService.updateCart(req.params._id, req.body);
    console.log(req.body);
    console.log(req.body.quantity)
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Cart updated'
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
    const data = await CartService.getCart(req.body.UserId, req.body._id);
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

export const removeFromCart = async (req, res, next) => {
  try {
    const data = await CartService.removeFromCart(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book deleted from cart'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};