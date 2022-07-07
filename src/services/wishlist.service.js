import Book from '../models/book.model';
import Wishlist from '../models/wishlist.model';

export const addToWishlist = async (bookId,UserID) => {
    const bookToAdd = await Book.findById({_id: bookId});
    if (bookToAdd == null){
        throw new Error('Book does not exists');
    }
    else{
        const wishlistCheck = await Wishlist.findOne({UserID: UserID});
        if(wishlistCheck == null) {
            let wishlistData = await Wishlist.create({UserID: UserID,
                                        books:{
                                                productId: bookId,
                                                description: bookToAdd.description,
                                                bookName: bookToAdd.bookName,
                                                author: bookToAdd.author,
                                                quantity: 1,
                                                price: bookToAdd.price
                                                }})
            return wishlistData;
        }
        else {
            let book ={productId: bookId,
                        description: bookToAdd.description,
                        bookName: bookToAdd.bookName,
                        author: bookToAdd.author,
                        quantity: 1,
                        price: bookToAdd.price}
            wishlistCheck.books.push(book);
            let wishlistData = await Wishlist.findOneAndUpdate({UserID: UserID},{books: wishlistCheck.books});
            return wishlistData;
        }
    }   
    };

    export const getWishlist = async (UserID) => {
        const data = await Wishlist.findOne({UserID: UserID})
        if(data == null) {
            throw Error('Cart does not exist')
        }
        return data;
    };