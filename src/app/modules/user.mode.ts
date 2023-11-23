import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TUser, userModel } from './users/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const userFullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
});

const userAddressSchema = new Schema<TAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userMainSchema = new Schema<TUser>({
  userId: { type: Number, unique: true, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  fullName: { type: userFullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: userAddressSchema, required: true },
});

userMainSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userMainSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser, userModel>('User', userMainSchema);
