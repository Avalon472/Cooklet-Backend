/* eslint-disable import/extensions */
import { ingredient, originalRecipeType, recipeInfo } from "../data";

// const cleanRecipe = (recipes) => <recipeInfo>{
const cleanRecipe = (recipe: originalRecipeType) => {
  const ingredients: ingredient[] = recipe.extendedIngredients.map((item) => ({
    id: item.id,
    aisle: item.aisle,
    name: item.name,
    amount: item.amount,
    unit: item.unit && item.unit.trim() ? item.unit : "unit(s)",
    measures: {
      us: {
        amount: item.measures.us.amount,
        unit:
          item.measures.us.unitShort && item.measures.us.unitShort.trim()
            ? item.measures.us.unitShort
            : "unit(s)",
      },
      metric: {
        amount: item.measures.metric.amount,
        unit:
          item.measures.metric.unitShort &&
          item.measures.metric.unitShort.trim()
            ? item.measures.metric.unitShort
            : "unit(s)",
      },
    },
  }));

  const instructions = recipe.analyzedInstructions[0].steps.map((step) => ({
    number: step.number,
    step: step.step,
    ingredients: step.ingredients.map((i) => i.name),
    equipment: step.equipment.map((e) => e.name),
  }));

  const cleanedRecipe: recipeInfo = {
    id: recipe.id,
    image: recipe.image,
    title: recipe.title,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    sourceURL: recipe.sourceUrl,
    recipeTags: {
      vegetarian: recipe.vegetarian,
      vegan: recipe.vegan,
      glutenFree: recipe.glutenFree,
      dairyFree: recipe.dairyFree,
      veryHealthy: recipe.veryHealthy,
      cheap: recipe.cheap,
    },
    creditsText: recipe.creditsText,
    license: recipe.license || "none",
    sourceName: recipe.sourceName || "none",
    pricePerServing: recipe.pricePerServing * 0.011, //Price is in INR, needs to be converted to USD
    extendedIngredients: ingredients,
    summary: recipe.summary,
    analyzedInstructions: instructions,
    language: recipe.language || "eng",
    spoonacularSourceUrl: recipe.spoonacularSourceUrl || "none",
  };
  return cleanedRecipe;
};

export default cleanRecipe;
