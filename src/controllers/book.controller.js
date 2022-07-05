import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

export const getAllBooks = async (req, res, next) => {
    try {
      const data = await BookService.getAllBooks();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };