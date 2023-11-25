import { User } from '../user.mode';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = User.find(
    {},
    {
      username: 1,
      'fullName.firstName': 1,
      'fullName.lastName': 1,
      age: 1,
      email: 1,
      'address.street': 1,
      'address.city': 1,
      'address.country': 1,
      _id: 0,
    },
  );
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = User.findOne(
    { userId },
    { password: 0, 'fullName._id': 0, _id: 0, 'address._id': 0 },
  );
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setUpdateUserFromDB = async (userId: string, data: any) => {
  const updatedUser = User.findOneAndUpdate({ userId }, data, {
    new: true,
    projection: { password: 0 },
  });

  return updatedUser;
};

const deletUserFromDB = async (userId: string) => {
  const result = User.findOneAndDelete({ userId });
  return result;
};

const orderProductsFromDB = async (userId: string) => {
  const result = User.findOne({ userId });
  return result;
};

const getAllOrderProductsFromDB = async (userId: string) => {
  const result = User.findOne({ userId });
  return result;
};

const calculateTotalPriceFromDB = async (userId: string) => {
  const result = User.findOne({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  setUpdateUserFromDB,
  deletUserFromDB,
  orderProductsFromDB,
  getAllOrderProductsFromDB,
  calculateTotalPriceFromDB,
};
