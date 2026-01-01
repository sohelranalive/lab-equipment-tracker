import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userService.createUser(payload);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Post creation failed",
      error: error.message,
    });
  }
};

export const userController = {
  createUser,
};
