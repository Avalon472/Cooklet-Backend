/* eslint-disable import/extensions */
import { ingredient, originalRecipeType, recipeInfo } from "../data";

// const cleanRecipe = (recipes) => <recipeInfo>{
const cleanRecipe = (recipe: originalRecipeType) => {
  const ingredients: ingredient[] = recipe.extendedIngredients.map((item) => ({
    id: item.id,
    aisle: item.aisle,
    name: item.name,
    amount: item.amount,
    unit: item.unit,
    measures: {
      us: { amount: item.measures.us.amount, unit: item.measures.us.unitShort },
      metric: {
        amount: item.measures.metric.amount,
        unit: item.measures.metric.unitShort,
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
    license: recipe.license,
    sourceName: recipe.sourceName,
    pricePerServing: recipe.pricePerServing,
    extendedIngredients: ingredients,
    summary: recipe.summary,
    analyzedInstructions: instructions,
    language: recipe.language,
    spoonacularSourceUrl: recipe.spoonacularSourceUrl,
  };
  return cleanedRecipe;
};

export default cleanRecipe;
