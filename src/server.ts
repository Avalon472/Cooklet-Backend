/* eslint-disable import/extensions */
import dotenv from "dotenv";
import express from "express";
import { obj } from "./data";
import connectMongoDB from "./utils/connectDB";
import cleanRecipe from "./utils/cleanRecipe";
import recipeRoutes from "./routes/recipeRoutes";

const app = express();
dotenv.config();

app.use(express.json());

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.send("API is running");
  res.status(200).json({
    message: "Server is running",
    orig: obj,
    cleaned: cleanRecipe(obj.results[0]),
  });
});

//TODO: Move into controller file after testing
app.get("/search", async (req, res) => {
  try {
    const { query, amount } = req.body;
    console.log(query);
    const userParams = `query=${query}&number=${amount}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
    const spoonacularParams = `instructionsRequired=true&addRecipeInformation=true&addRecipeInstructions=true`;
    const url = `https://api.spoonacular.com/recipes/complexSearch?${userParams}&${spoonacularParams}`;
    const response = await fetch(url);
    const data = await response.json();
    //RECIPE COST PER SERVING IS IN INDIAN RUPIES (INR), CONVERT TO DOLLARS BEFORE SAVING

    if (!data) {
      res.status(404).json({ error: "Unable to query recipes" });
    }
    // console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.use("/api/recipe", recipeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectMongoDB();
});
