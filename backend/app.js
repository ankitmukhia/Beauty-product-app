import express from "express";
import { db } from "./db.js";
import post from "./router/post.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
db();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello word");
});


app.use(cors());

app.use(express.json());

app.use("/products", post);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
