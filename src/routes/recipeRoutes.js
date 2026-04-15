import express from "express";
import {
  createRecipe,
  deleteRecipe,
  editRecipe,
  getAllRecipes,
  searchRecipe,
} from "../controllers/recipeControllers";

const router = express.Router();

router.get("/search", searchRecipe);
router.get("/all", getAllRecipes);
router.post("/create", createRecipe);
router.delete("/:id", deleteRecipe);
router.put("/:id", editRecipe)
// router.get("/searchMore", searchAdditionalRecipes)

export default router;
