import User from '../models/user.model';
import jwt from 'jsonwebtoken';

export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

export const userLogin = async (emailId, password, confirmPassword) => {
  const user = await User.findOne({emailId: emailId});
  if(user == null){
    throw new Error("User doesnt exist")
  }
  else{
      let token = jwt.sign({ firstname: user.firstName, email: user.emailId, id: user._id }, process.env.SECRET_KEY);
      return token;
    }
};

// //get all users
// export const getAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };

// //create new user
// export const newUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };

// //update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };
