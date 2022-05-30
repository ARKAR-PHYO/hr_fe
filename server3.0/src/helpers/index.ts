import { compareSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { User } from "../types";

export const hashedPassword = (password: string): string => {
  const hashPassword = hashSync(password, 12);
  return hashPassword;
};

export const comparedPassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const comparePassword = compareSync(password, hashedPassword);
  return comparePassword;
};

export const siginToken = (user: User) => {
  const accessToken = sign(user, JWT_SECRET, { expiresIn: "1d" });
  return accessToken;
};
