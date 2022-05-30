"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = require("../controllers/user");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/login", [(0, express_validator_1.body)("email").notEmpty().isEmail(), (0, express_validator_1.body)("password").notEmpty()], user_1.SigninUser);
//# sourceMappingURL=userRouter.js.map