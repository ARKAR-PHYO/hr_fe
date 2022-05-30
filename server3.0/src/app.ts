import express from "express";
import { SERVER_PORT } from "./config";
import { userRouter } from "./routes/userRouter";

const app = express();
app.use(express.json({ limit: "100mb" }));

app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVER_PORT}`);
  app.use("/api/user", userRouter);
});
