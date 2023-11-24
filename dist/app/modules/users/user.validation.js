"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMainSchemaZodValidation = void 0;
const zod_1 = require("zod");
// Define Zod schemas
const userFullNameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'First name must not be empty'),
    lastName: zod_1.z.string().min(1, 'Last name must not be empty'),
});
const userAddressSchema = zod_1.z.object({
    street: zod_1.z.string().min(1, 'Street must not be empty'),
    city: zod_1.z.string().min(1, 'City must not be empty'),
    country: zod_1.z.string().min(1, 'Country must not be empty'),
});
const ordersSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
const userMainSchemaZodValidation = zod_1.z.object({
    userId: zod_1.z.number({ required_error: 'User ID is required' }).transform(Number),
    username: zod_1.z.string({ required_error: 'Username is required' }),
    password: zod_1.z.string(),
    fullName: userFullNameSchema,
    age: zod_1.z.number({ required_error: 'Age is required' }).transform(Number),
    email: zod_1.z.string({ required_error: 'Email is required' }).email(),
    isActive: zod_1.z.boolean({ required_error: 'isActive is required' }),
    hobbies: zod_1.z.array(zod_1.z.string({ required_error: 'Hobbies are required' })),
    address: userAddressSchema,
    orders: zod_1.z.array(ordersSchema).optional().default([]),
});
exports.userMainSchemaZodValidation = userMainSchemaZodValidation;
