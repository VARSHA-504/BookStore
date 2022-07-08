import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullName: {
      type: String
    },
    emailId: {
      type: String
    },
    password: {
      type: String
    },
    phone: {
      type:  Number
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
