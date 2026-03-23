//fetchAllRecipes
//createRecipe
//searchRecipe
//editRecipe
//deleteRecipe

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

    const existingQuery = await SearchQuery.findOne({ query });
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
      const existingRecipes = await SearchResult.find({ queryTerm: query });
      return res.status(200).json(existingRecipes);
    }
  } catch (error) {
    console.log("Error in the recipe search method", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
