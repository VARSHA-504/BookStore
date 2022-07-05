import Book from '../models/book.model';

export const getAllBooks = async () => {
    const data = await Book.find();
    return data;
  };


  export const getBook = async (id) => {
    const data = await Book.findById({_id: id});
    return data;
 };   