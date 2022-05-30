"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const userRouter_1 = require("./routes/userRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "100mb" }));
app.listen(config_1.SERVER_PORT, () => {
    console.log(`Server is running at http://localhost:${config_1.SERVER_PORT}`);
    app.use("/api/user", userRouter_1.userRouter);
});
//# sourceMappingURL=app.js.map