import { z } from 'zod';

// Define Zod schemas
const userFullNameSchema = z.object({
  firstName: z.string({ required_error: 'First name is required' }),
  lastName: z.string(),
});

const userAddressSchema = z.object({
  street: z.string({ required_error: 'Street is required' }),
  city: z.string({ required_error: 'City is required' }),
  country: z.string({ required_error: 'Country is required' }),
});

const userMainSchemaZodValidation = z.object({
  userId: z.number({ required_error: 'User ID is required' }).transform(Number),
  username: z.string({ required_error: 'Username is required' }),
  password: z.string(),
  fullName: userFullNameSchema,
  age: z.number({ required_error: 'Age is required' }).transform(Number),
  email: z.string({ required_error: 'Email is required' }),
  isActive: z.boolean({ required_error: 'isActive is required' }),
  hobbies: z.array(z.string({ required_error: 'Hobbies are required' })),
  address: userAddressSchema,
});

export { userMainSchemaZodValidation };
