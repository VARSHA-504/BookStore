import Cart from '../models/cart.model';

export const orderBooks = async (UserID) => {
    const checkCart = await Cart.findOne({UserID: UserID});
    if(checkCart == null) {
        throw Error('Cart does not exist');
    }else {
        const cartData = await Cart.findOneAndUpdate({UserID: UserID},{isPurchased: true},{new: true});
        return cartData;
    }
};