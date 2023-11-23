import { User } from '../user.mode';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};