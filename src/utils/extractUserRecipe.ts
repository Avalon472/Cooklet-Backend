import { recipeInfo } from "../data"

export const extractUserRecipe = (cleanedRecipe:recipeInfo) => {
    const {creditsText, license, sourceName, language, spoonacularSourceUrl, ...recipeData} = cleanedRecipe
    
    return recipeData
}