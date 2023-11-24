import { z } from 'zod';

// Define Zod schemas
const userFullNameSchema = z.object({
  firstName: z.string().min(1, 'First name must not be empty'),
  lastName: z.string().min(1, 'Last name must not be empty'),
});

const userAddressSchema = z.object({
  street: z.string().min(1, 'Street must not be empty'),
  city: z.string().min(1, 'City must not be empty'),
  country: z.string().min(1, 'Country must not be empty'),
});

const ordersSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userMainSchemaZodValidation = z.object({
  userId: z.number({ required_error: 'User ID is required' }).transform(Number),
  username: z.string({ required_error: 'Username is required' }),
  password: z.string(),
  fullName: userFullNameSchema,
  age: z.number({ required_error: 'Age is required' }).transform(Number),
  email: z.string({ required_error: 'Email is required' }).email(),
  isActive: z.boolean({ required_error: 'isActive is required' }),
  hobbies: z.array(z.string({ required_error: 'Hobbies are required' })),
  address: userAddressSchema,
  orders: z.array(ordersSchema).optional().default([]),
});

export { userMainSchemaZodValidation };
