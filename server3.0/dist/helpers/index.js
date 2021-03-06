"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siginToken = exports.comparedPassword = exports.hashedPassword = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const hashedPassword = (password) => {
    const hashPassword = (0, bcrypt_1.hashSync)(password, 12);
    return hashPassword;
};
exports.hashedPassword = hashedPassword;
const comparedPassword = (password, hashedPassword) => {
    const comparePassword = (0, bcrypt_1.compareSync)(password, hashedPassword);
    return comparePassword;
};
exports.comparedPassword = comparedPassword;
const siginToken = (user) => {
    const accessToken = (0, jsonwebtoken_1.sign)(user, config_1.JWT_SECRET, { expiresIn: "1d" });
    return accessToken;
};
exports.siginToken = siginToken;
//# sourceMappingURL=index.js.map