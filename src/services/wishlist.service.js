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
            let wishlistData = await Wishlist.findOneAndUpdate({UserID: UserID},{books: wishlistCheck.books}, {new: true});
            return wishlistData;
        }
    }   
    };

    export const getWishlist = async (UserID) => {
        const data = await Wishlist.findOne({UserID: UserID})
        if(data == null) {
            throw Error(' does not exist')
        }
        return data;
    };


    export const removeFromWishlist = async (bookId, data) => {
        let wishlistData = await Wishlist.findOne({UserID: data.UserID});
        if(wishlistData == null) {
            throw Error('Wishlist not exist for the user')
        }else {
            let books = wishlistData.books;
            let bookIndex = books.findIndex(book => book.productId == bookId);
            if(bookIndex) {
                books.splice(bookIndex,1)
                wishlistData = await Wishlist.findOneAndUpdate({UserID: data.UserID},{books: books},{new: true});
            }else{
                throw Error('Book does not exist')
            }
        }
        return wishlistData;
    };
    