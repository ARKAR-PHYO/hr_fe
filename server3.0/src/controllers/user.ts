import { NextFunction, Request, Response } from "express";
import { comparedPassword, siginToken } from "../helpers";
import { CreateError } from "../helpers/errors";
import prisma from "../lib/prisma";

export const SigninUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return next(CreateError(404, "USER NOT FOUND !!"));
    // if (!user)
    //   return res.status(422).json({
    //     statusCode: 422,
    //     message: "USER NOT FOUND .!!",
    //   });

    const isPasswordCorrect = comparedPassword(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(CreateError(404, "WRONG USER NAME OR PASSWORD !!!"));

    const accessToken: string = siginToken({
      email: user.email,
      id: user.id,
      password: user.password,
      // isAdmin: user.isAdmin,
      updatedAt: user.updatedAt.toDateString(),
      createdAt: user.createdAt.toDateString(),
    });
    if (accessToken) {
      const { password, isAdmin, ...otherDetails } = user;
      res
        .cookie("accessToken", accessToken, {
          httpOnly: true,
        })
        .status(200)
        .json({ ...otherDetails, accessToken });
      console.log("Client connected");
    }
  } catch (error: any) {
    next(error);
  }
};
