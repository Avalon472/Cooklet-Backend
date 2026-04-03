import mongoose, { Schema } from "mongoose";

//Sub-schemas to make typing of main schema cleaner
export const TagsSchema = new Schema({
  vegetarian: { type: Boolean, default: false },
  vegan: { type: Boolean, default: false },
  glutenFree: { type: Boolean, default: false },
  dairyFree: { type: Boolean, default: false },
  veryHealthy: { type: Boolean, default: false },
  cheap: { type: Boolean, default: false },
});

export const IngredientSchema = new Schema({
  id: { type: Number, required: true },
  aisle: { type: String, required: false },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String, required: true },
  measures: {
    type: {
      us: {
        amount: { type: Number, required: true },
        unit: { type: String, required: true },
      },
      metric: {
        amount: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    },
    required: true,
  },
});

export const InstructionSchema = new Schema({
  number: { type: Number, required: true },
  step: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  equipment: [{ type: String, required: false }],
});

//Main schema
const RecipeSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    readyInMinutes: { type: Number, required: false },
    servings: { type: Number, required: false },
    sourceURL: { type: String, required: true },
    recipeTags: { type: TagsSchema, required: false },
    pricePerServing: { type: Number, required: false },
    extendedIngredients: { type: [IngredientSchema], required: true },
    summary: { type: String, required: true },
    analyzedInstructions: { type: [InstructionSchema], required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Recipe = mongoose.model("Recipe", RecipeSchema);
export default Recipe;
