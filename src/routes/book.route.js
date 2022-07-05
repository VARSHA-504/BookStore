import express from 'express';
import * as BookController from '../controllers/book.controller';

const router = express.Router();

router.get('/getAll', BookController.getAllBooks);


export default router;
