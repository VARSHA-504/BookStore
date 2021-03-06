import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

router.post('/newuser', newUserValidator, userController.newUser);

router.post('/login', userController.userLogin);

export default router;
