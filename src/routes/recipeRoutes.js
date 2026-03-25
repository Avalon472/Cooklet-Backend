import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  searchRecipe,
} from "../controllers/recipeControllers";

const router = express.Router();

router.get("/search", searchRecipe);
router.get("/all", getAllRecipes);
router.post("/create", createRecipe);
router.delete("/:id", deleteRecipe);
// router.patch(":/id", editRecipe)
// router.get("/searchMore", searchAdditionalRecipes)

export default router;
