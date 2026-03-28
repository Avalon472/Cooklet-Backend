import mongoose, { Schema } from "mongoose";
import { IngredientSchema, InstructionSchema, TagsSchema } from "./recipeModel";

//Search result will include a reference to the term used to fetch the result
//The result itself is a reference to the recipe model, effectively caching the spoonacular recipe
const SearchResultSchema = new Schema(
  {
    recipe: {
      id: { type: Number, required: true},
      image: { type: String, required: true },
      title: { type: String, required: true },
      readyInMinutes: { type: Number, required: true },
      servings: { type: Number, required: true },
      sourceURL: { type: String, required: true },
      recipeTags: { type: TagsSchema, required: true },
      creditsText: { type: String, required: true },
      license: { type: String, required: true },
      sourceName: { type: String, required: true },
      pricePerServing: { type: Number, required: true },
      extendedIngredients: { type: [IngredientSchema], required: true },
      summary: { type: String, required: true },
      analyzedInstructions: { type: [InstructionSchema], required: true },
      language: { type: String, required: true },
      spoonacularSourceUrl: { type: String, required: true },
    },
    queryTerm: { type: Schema.Types.ObjectId, ref: "SearchQuery" },
  },
  { timestamps: true },
);

const SearchResult = mongoose.model("SearchResult", SearchResultSchema);
export default SearchResult;
