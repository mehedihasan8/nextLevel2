"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_mode_1 = require("../user.mode");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_mode_1.User.create(userData);
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_mode_1.User.find({}, {
        username: 1,
        'fullName.firstName': 1,
        'fullName.lastName': 1,
        age: 1,
        email: 1,
        'address.street': 1,
        'address.city': 1,
        'address.country': 1,
        _id: 0,
    });
    return result;
});
const getSingleUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_mode_1.User.findOne({ userId }, { password: 0, 'fullName._id': 0, _id: 0, 'address._id': 0 });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setUpdateUser = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = user_mode_1.User.findOneAndUpdate({ userId }, data, {
        new: true,
        projection: { password: 0 },
    });
    return updatedUser;
});
const deletUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_mode_1.User.findOneAndDelete({ userId });
    return result;
});
const orderProducts = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_mode_1.User.findOne({ userId });
    return result;
});
exports.UserServices = {
    createUserIntoDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    setUpdateUser,
    deletUser,
    orderProducts,
};
