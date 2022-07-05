
import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    description: {
      type: String
    },
    discountPrice: {
      type: Number
    },
    bookImage: {
      type: String
    },
    admin_user_id: {
        type: Number
      },
    bookName: {
      type: String
    },
    author: {
      type: String
    },
    price: {
        type: Number
      },
    bookName: {
        type: String
      },
      author: {
        type: String
      },
  },
  {
    timestamps: true
  }
);

export default model('Book', bookSchema);
