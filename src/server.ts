import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  //   res.send("API is running");
  res.status(200).json({ message: "Server is running" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
