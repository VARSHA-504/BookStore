import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    emailId: {
      type: String
    },
    password: {
      type: String
    },
    confirmPassword: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
