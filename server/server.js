import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogsRoutes from "./routes/blogsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import colors from "colors";
import connectDB from "./db/connect.js";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/blogs", blogsRoutes);
app.use("/api/v1/user", usersRoutes);

// db connect then app run

connectDB();

app.listen(port, () => {
  console.log(`App is running on port ${port}`.bgMagenta);
});
