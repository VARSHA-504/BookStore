import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};


export const userLogin = async (req, res, next) => {
  try {
    const data = await UserService.userLogin(req.body.emailId, req.body.password, req.body.confirmPassword);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User logged in successfully'
    });
  } catch (error) {
    next(error);
  }
};



