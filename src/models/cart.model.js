
import { Schema, model } from 'mongoose';

const cartSchema = new Schema(
    {
        UserID: {
          type: String
        },
        books: [{
          productId: {
            type: String
          },
          description: {
            type: String
          },
          bookName: {
            type: String
          },
          author: {
            type: String
          },
          quantity: {
            type: Number
          },
          price: {
            type: Number
          }
        }],
        cart_total: {
          type: Number
        },
        isPurchased: {
          type: Boolean,
          default: false
        }
    }
)

export default model('Cart', cartSchema);