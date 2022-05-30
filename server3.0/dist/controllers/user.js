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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninUser = void 0;
const helpers_1 = require("../helpers");
const errors_1 = require("../helpers/errors");
const prisma_1 = __importDefault(require("../lib/prisma"));
const SigninUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findFirst({
            where: {
                email: req.body.email,
            },
        });
        if (!user)
            return next((0, errors_1.CreateError)(404, "USER NOT FOUND !!"));
        // if (!user)
        //   return res.status(422).json({
        //     statusCode: 422,
        //     message: "USER NOT FOUND .!!",
        //   });
        const isPasswordCorrect = (0, helpers_1.comparedPassword)(req.body.password, user.password);
        if (!isPasswordCorrect)
            return next((0, errors_1.CreateError)(404, "WRONG USER NAME OR PASSWORD !!!"));
        const accessToken = (0, helpers_1.siginToken)({
            email: user.email,
            id: user.id,
            password: user.password,
            // isAdmin: user.isAdmin,
            updatedAt: user.updatedAt.toDateString(),
            createdAt: user.createdAt.toDateString(),
        });
        if (accessToken) {
            const { password, isAdmin } = user, otherDetails = __rest(user, ["password", "isAdmin"]);
            res
                .cookie("accessToken", accessToken, {
                httpOnly: true,
            })
                .status(200)
                .json(Object.assign(Object.assign({}, otherDetails), { accessToken }));
            console.log("Client connected");
        }
    }
    catch (error) {
        next(error);
    }
});
exports.SigninUser = SigninUser;
//# sourceMappingURL=user.js.map