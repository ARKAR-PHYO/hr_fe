import { Router } from "express";
import { body } from "express-validator";
import { SigninUser } from "../controllers/user";

export const userRouter = Router();

userRouter.post(
  "/login",

  [body("email").notEmpty().isEmail(), body("password").notEmpty()],
  SigninUser
);
