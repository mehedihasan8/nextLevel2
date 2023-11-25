"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMainSchemaZodValidation = exports.updateUserValidationSchema = void 0;
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
    productName: zod_1.z.string().min(1, 'product name must not be empty'),
    price: zod_1.z.number().min(1, 'price must not be empty'),
    quantity: zod_1.z.number().min(1, 'quantity must not be empty'),
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
exports.updateUserValidationSchema = zod_1.z.object({
    userId: zod_1.z.number().optional(),
    username: zod_1.z.string().optional(),
    fullName: zod_1.z
        .object({
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
    })
        .optional(),
    age: zod_1.z.number().optional(),
    email: zod_1.z.string().email().optional(),
    isActive: zod_1.z.boolean().optional(),
    hobbies: zod_1.z.array(zod_1.z.string()).optional(),
    address: zod_1.z
        .object({
        street: zod_1.z.string().optional(),
        city: zod_1.z.string().optional(),
        country: zod_1.z.string().optional(),
    })
        .optional(),
});
