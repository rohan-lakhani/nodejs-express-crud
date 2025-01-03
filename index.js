import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());

app.use("/", userRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
