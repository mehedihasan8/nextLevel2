import { Request, Response } from 'express';
import { UserServices } from './user.service';
import {
  updateUserValidationSchema,
  userMainSchemaZodValidation,
} from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const zodPassValidData = userMainSchemaZodValidation.parse(userData);

    const result = await UserServices.createUserIntoDB(zodPassValidData);

    const newUserWithoutPassword = {
      ...result.toObject(),
      password: undefined,
      _id: undefined,
      orders: undefined,
    };

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: newUserWithoutPassword,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const alluser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const singleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserServices.getSingleUserFromDB(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: user,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const singleUserUpdate = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const updateUserZodPassValidData =
      updateUserValidationSchema.parse(updatedData);

    const updated_user = await UserServices.setUpdateUserFromDB(
      userId,
      updateUserZodPassValidData,
    );

    if (!updated_user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: updated_user,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const deleteSingelUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const deletedUser = await UserServices.deletUserFromDB(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const addToProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const { productName, price, quantity } = req.body;

    const user = await UserServices.functionFindONe(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    user.orders = user.orders || [];

    user.orders.push({
      productName,
      price,
      quantity,
    });

    await user.save();
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const getToProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserServices.functionFindONe(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    if (!user.orders || user.orders.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No orders found for the user',
        data: {
          orders: [],
        },
      });
    }

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: {
        orders: user.orders,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

const calculateTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserServices.functionFindONe(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    if (!user.orders || user.orders.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No orders found for the user',
        data: {
          orders: [],
        },
      });
    }

    const totalPrice = user.orders.reduce(
      (sum, order) => sum + order.price * order.quantity,
      0,
    );

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice: totalPrice,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      data: error,
    });
  }
};

export const UserController = {
  createUser,
  alluser,
  singleUser,
  singleUserUpdate,
  deleteSingelUser,
  addToProduct,
  getToProduct,
  calculateTotalPrice,
};
