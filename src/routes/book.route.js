import express from 'express';
import * as BookController from '../controllers/book.controller';
import { userAuth } from '../middlewares/auth.middleware';


const router = express.Router();

router.get('/getAll', BookController.getAllBooks);

router.get('/getbyId/:_id', BookController.getBook);


export default router;
