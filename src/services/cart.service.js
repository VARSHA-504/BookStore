import Book from '../models/book.model';
import Cart from '../models/cart.model';

export const addToCart = async (bookId,UserID) => {
    const bookToAdd = await Book.findById({_id: bookId});
    if (bookToAdd == null){
        throw new Error('Book does not exists');
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

export const updateCart = async (bookId, data) => {
    let cartData = await Cart.findOne({UserID: data.UserID});
    if(cartData == null) {
        throw Error('Cart not exist for the user')
    }else {
        let books = cartData.books;
        let bookIndex = books.findIndex(book => book.productId == bookId);
        if(bookIndex == -1) {
            throw Error('Book does not exist in the cart')
        }else {
            let book = books[bookIndex];
            book.quantity = data.quantity;
            books[bookIndex] = book;
            cartData = await Cart.findOneAndUpdate({UserID: data.UserID},{books: books},{new: true});
        }
    }
    return cartData;
};


export const removeFromCart = async (bookId, data) => {
    let cartData = await Cart.findOne({UserID: data.UserID});
    if(cartData == null) {
        throw Error('Cart not exist for the user')
    }else {
        let books = cartData.books;
        let bookIndex = books.findIndex(book => book.productId == bookId);
        if(bookIndex == -1) {
            throw Error('Book does not exist in the cart')
        }else {
            books.splice(bookIndex,1)
            cartData = await Cart.findOneAndUpdate({UserID: data.UserID},{books: books},{new: true});
            console.log(cartData)
        }
    }
    return cartData;
};


