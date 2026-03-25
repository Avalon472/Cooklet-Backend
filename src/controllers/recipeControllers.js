//editRecipe

import Recipe from "../models/recipeModel";
import SearchResult from "../models/searchResultModel";
import SearchQuery from "../models/searchTermModel";
import cleanRecipe from "../utils/cleanRecipe";
import { storeQuery } from "../utils/storeQuery";

export const searchRecipe = async (req, res) => {
  try {
    //check if search term exists in database
    //if so, return cached results
    //otherwise:
    //search for recipe
    //clean results
    //cache search term
    //cache results and reference term
    //update term in database to include the results
    //return results

    // const { query, amount } = req.body;
    // const userParams = `query=${query}&number=${amount}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
    const { query } = req.body;

    const existingQuery = await SearchQuery.findOne({ queryTerm: query });
    if (!existingQuery) {
      const userParams = `query=${query}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
      const spoonacularParams = `number=5&instructionsRequired=true&addRecipeInformation=true&addRecipeInstructions=true&fillIngredients=true`;
      const url = `https://api.spoonacular.com/recipes/complexSearch?${userParams}&${spoonacularParams}`;
      const response = await fetch(url);
      const data = await response.json();
      if (!data) {
        return res.status(401).json({
          error: "Unable to contact Spoonacular api. Please try again.",
        });
      }
      //data should be of type originalRecipeType, need to map through the result
      //array and ignore the offset and number attributes to get expected data format
      const cleanedData = data.results.map((recipe) => cleanRecipe(recipe));
      storeQuery(query, cleanedData);
      return res.status(200).json(cleanedData);
    } else {
      const existingRecipes = await SearchResult.find({
        queryTerm: existingQuery._id,
      });
      return res.status(200).json(existingRecipes);
    }
  } catch (error) {
    console.log("Error in the recipe search method", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });

    if (recipes.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(recipes);
  } catch (error) {
    console.log("Error in the get all recipes method", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const {
      image,
      title,
      readyInMinutes,
      servings,
      sourceURL,
      recipeTags,
      pricePerServing,
      ingredients,
      summary,
      instructions,
    } = req.body;
    //if user gets added later, search for it here
    //and validate that one was found

    //same for if we allow custom image uploads, cloudinary
    //upload will go here

    //Validate that required fields were submitted
    if (
      !image ||
      !title ||
      !sourceURL ||
      !ingredients ||
      !summary ||
      !instructions
    ) {
      return res.status(400).json({
        error: "Missing required fields",
        image: image || "n/a",
        title: title || "n/a",
        sourceURL: sourceURL || "n/a",
        summary: summary || "n/a",
        instructions: instructions || "n/a",
      });
    }

    //Sanitize optional fields
    const newRecipe = new Recipe({
      image,
      title,
      readyInMinutes: readyInMinutes ?? null,
      servings: servings ?? null,
      sourceURL,
      recipeTags: recipeTags ?? null,
      pricePerServing: pricePerServing ?? null,
      ingredients: Array.isArray(ingredients) ? ingredients : [],
      summary,
      instructions: Array.isArray(instructions) ? instructions : [],
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    console.log("Error in the create recipe method", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.log("Error in the delete recipe method", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
