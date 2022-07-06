import Book from '../models/book.model';
import Cart from '../models/cart.model';

export const addToCart = async (bookId,UserID) => {
    const bookToAdd = await Book.findById({_id: bookId});
    if (bookToAdd == null){
        throw new Error('Books does not exists');
    }
    else{
        const cartCheck = await Cart.findOne({UserID: UserID});
        if(cartCheck == null) {
            let cartData = await Cart.create({UserID: UserID,
                                        books:{
                                                productId: bookId,
                                                description: bookToAdd.description,
                                                bookName: bookToAdd.bookName,
                                                author: bookToAdd.author,
                                                quantity: 1,
                                                price: bookToAdd.price
                                                }})
            return cartData;
        }
        else {
            let book ={productId: bookId,
                        description: bookToAdd.description,
                        bookName: bookToAdd.bookName,
                        author: bookToAdd.author,
                        quantity: 1,
                        price: bookToAdd.price}
            cartCheck.books.push(book);
            let cartData = await Cart.findOneAndUpdate({UserID: UserID},{books: cartCheck.books});
            return cartData;
        }
    }   
    };

export const getCart = async (UserID) => {
    const data = await Cart.findOne({UserID: UserID})
    if(data == null) {
        throw Error('Cart does not exist')
    }
    return data;
};
    