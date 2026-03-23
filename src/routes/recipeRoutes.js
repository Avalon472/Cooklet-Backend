import express from "express";
import { searchRecipe } from "../controllers/recipeControllers";

//fetchAllRecipes - get
//createRecipe - post
//searchRecipe - post
//editRecipe - post (maybe patch)
//deleteRecipe - delete

const router = express.Router();

router.get("/search", searchRecipe);

export default router;
