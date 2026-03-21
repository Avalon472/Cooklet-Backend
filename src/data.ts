export type recipeInfo = {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceURL: string;
  recipeTags: tags;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ingredient[];
  summary: string;
  analyzedInstructions: {
    number: number;
    step: string;
    ingredients: string[];
    equipment: string[];
  }[];
  language: string; //make into enum class?
  spoonacularSourceUrl: string;
};
export type tags = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
};
export type ingredient = {
  id: number;
  aisle: string;
  name: string;
  amount: number;
  unit: string; //can make into enum class later
  measures: {
    us: { amount: number; unit: string };
    metric: { amount: number; unit: string };
  };
};
export type originalRecipeType = (typeof obj.results)[0];

export const obj = {
  results: [
    {
      id: 652335,
      image: "https://img.spoonacular.com/recipes/652335-312x231.jpg",
      imageType: "jpg",
      title: "Mongolian Beef",
      readyInMinutes: 45,
      servings: 6,
      sourceUrl: "https://www.foodista.com/recipe/LFPXPS6R/mongolian-beef",
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 15,
      gaps: "no",
      preparationMinutes: null,
      cookingMinutes: null,
      aggregateLikes: 1,
      healthScore: 15,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 315.11,
      extendedIngredients: [
        {
          id: 4042,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "peanut-oil.jpg",
          consistency: "LIQUID",
          name: "peanut oil",
          nameClean: "peanut oil",
          original: "4 cups Peanut oil",
          originalName: "Peanut oil",
          amount: 4,
          unit: "cups",
          meta: [],
          measures: {
            us: { amount: 4, unitShort: "cups", unitLong: "cups" },
            metric: { amount: 864, unitShort: "ml", unitLong: "milliliters" },
          },
        },
        {
          id: 11291,
          aisle: "Produce",
          image: "spring-onions.jpg",
          consistency: "SOLID",
          name: "green onion tops",
          nameClean: "green onion tops",
          original: "15 Green onion tops",
          originalName: "Green onion tops",
          amount: 15,
          unit: "",
          meta: [],
          measures: {
            us: { amount: 15, unitShort: "", unitLong: "" },
            metric: { amount: 15, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 11216,
          aisle: "Produce",
          image: "ginger.png",
          consistency: "SOLID",
          name: "ginger",
          nameClean: "ginger",
          original: "1 tablespoon Minced ginger",
          originalName: "Minced ginger",
          amount: 1,
          unit: "tablespoon",
          meta: ["minced"],
          measures: {
            us: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
            metric: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
          },
        },
        {
          id: 10023003,
          aisle: "Meat",
          image: "tbone-or-porterhouse-raw.jpg",
          consistency: "SOLID",
          name: "sirloin steak",
          nameClean: "sirloin steak",
          original: "1 pound Flank or sirloin steak",
          originalName: "Flank or sirloin steak",
          amount: 1,
          unit: "pound",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "lb", unitLong: "pound" },
            metric: { amount: 453.592, unitShort: "g", unitLong: "grams" },
          },
        },
        {
          id: 99016,
          aisle: "Gourmet",
          image: "gluten-free-flour.jpg",
          consistency: "SOLID",
          name: "water chestnut flour",
          nameClean: "water chestnut flour",
          original: "tablespoon Water chestnut flour",
          originalName: "Water chestnut flour",
          amount: 1,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
            metric: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
          },
        },
        {
          id: 1124,
          aisle: "Milk, Eggs, Other Dairy",
          image: "egg-white.jpg",
          consistency: "SOLID",
          name: "egg whites",
          nameClean: "egg whites",
          original: "2 Egg whites",
          originalName: "Egg whites",
          amount: 2,
          unit: "",
          meta: [],
          measures: {
            us: { amount: 2, unitShort: "", unitLong: "" },
            metric: { amount: 2, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 2047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "SOLID",
          name: "pinch salt",
          nameClean: "pinch salt",
          original: "1 Pinch salt",
          originalName: "Pinch salt",
          amount: 1,
          unit: "",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "", unitLong: "" },
            metric: { amount: 1, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 16112,
          aisle: "Ethnic Foods",
          image: "miso.jpg",
          consistency: "SOLID",
          name: "cornstarch paste",
          nameClean: "cornstarch paste",
          original: "1 tablespoon Cornstarch paste",
          originalName: "Cornstarch paste",
          amount: 1,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
            metric: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
          },
        },
        {
          id: 6973,
          aisle: "Ethnic Foods",
          image: "chili-paste.png",
          consistency: "SOLID",
          name: "chili paste",
          nameClean: "chili paste",
          original: "1 teaspoon Chili paste with garlic",
          originalName: "Chili paste with garlic",
          amount: 1,
          unit: "teaspoon",
          meta: ["with garlic"],
          measures: {
            us: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
            metric: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
          },
        },
        {
          id: 6172,
          aisle: "Canned and Jarred",
          image: "chicken-broth.png",
          consistency: "LIQUID",
          name: "chicken stock",
          nameClean: "chicken stock",
          original: "cup Chicken stock",
          originalName: "Chicken stock",
          amount: 1,
          unit: "cup",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "cup", unitLong: "cup" },
            metric: { amount: 240, unitShort: "ml", unitLong: "milliliters" },
          },
        },
        {
          id: 16124,
          aisle: "Ethnic Foods",
          image: "soy-sauce.jpg",
          consistency: "LIQUID",
          name: "soy sauce",
          nameClean: "soy sauce",
          original: "2 tablespoons Dark soy sauce",
          originalName: "Dark soy sauce",
          amount: 2,
          unit: "tablespoons",
          meta: ["dark"],
          measures: {
            us: { amount: 2, unitShort: "Tbsps", unitLong: "Tbsps" },
            metric: { amount: 2, unitShort: "Tbsps", unitLong: "Tbsps" },
          },
        },
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "SOLID",
          name: "pinch sugar",
          nameClean: "pinch sugar",
          original: "1 Pinch sugar",
          originalName: "Pinch sugar",
          amount: 1,
          unit: "",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "", unitLong: "" },
            metric: { amount: 1, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 10114106,
          aisle: "Alcoholic Beverages",
          image: "dry-sherry.png",
          consistency: "LIQUID",
          name: "sherry",
          nameClean: "sherry",
          original: "tablespoon Dry sherry",
          originalName: "Dry sherry",
          amount: 1,
          unit: "tablespoon",
          meta: ["dry"],
          measures: {
            us: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
            metric: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
          },
        },
      ],
      summary:
        'You can never have too many main course recipes, so give Mongolian Beef a try. This recipe makes 6 servings with <b>474 calories</b>, <b>20g of protein</b>, and <b>41g of fat</b> each. For <b>$3.15 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 1 fans. Head to the store and pick up chicken stock, green onion tops, pinch salt, and a few other things to make it today. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 64%</b>, which is pretty good. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/mongolian-beef-700786">Mongolian Beef</a>, <a href="https://spoonacular.com/recipes/mongolian-beef-247834">Mongolian Beef</a>, and <a href="https://spoonacular.com/recipes/mongolian-beef-965702">Mongolian Beef</a>.',
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: ["gluten free", "dairy free"],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: 'Cut tops of green onions into 2" long pieces.',
              ingredients: [
                {
                  id: 11291,
                  name: "green onions",
                  localizedName: "green onions",
                  image: "spring-onions.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 2,
              step: "Combine sauce ingredients in small bowl & stir thoroughly.",
              ingredients: [
                { id: 0, name: "sauce", localizedName: "sauce", image: "" },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                },
              ],
            },
            {
              number: 3,
              step: 'Cut steak across the grain into thin slices, about 1/2" deep by 2" long. In bowl big enough to hold meat, combine egg whites, salt & water chestnut flour. Beat with chopstick until frothy.',
              ingredients: [
                {
                  id: 99016,
                  name: "chestnut flour",
                  localizedName: "chestnut flour",
                  image: "gluten-free-flour.jpg",
                },
                {
                  id: 1124,
                  name: "egg whites",
                  localizedName: "egg whites",
                  image: "egg-white.jpg",
                },
                { id: 0, name: "grains", localizedName: "grains", image: "" },
                {
                  id: 23232,
                  name: "steak",
                  localizedName: "steak",
                  image: "ribeye-raw.jpg",
                },
                {
                  id: 14412,
                  name: "water",
                  localizedName: "water",
                  image: "water.png",
                },
                {
                  id: 1065062,
                  name: "meat",
                  localizedName: "meat",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 2047,
                  name: "salt",
                  localizedName: "salt",
                  image: "salt.jpg",
                },
              ],
              equipment: [
                {
                  id: 405596,
                  name: "chopsticks",
                  localizedName: "chopsticks",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/chopsticks.jpg",
                },
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                },
              ],
            },
            {
              number: 4,
              step: "Add steak, & use fingers to coat each slice. Deep-frying: In wok, heat oil to moderately hot. When ready, piece of coated meat will rise to surface immediately. 2",
              ingredients: [
                {
                  id: 23232,
                  name: "steak",
                  localizedName: "steak",
                  image: "ribeye-raw.jpg",
                },
                {
                  id: 1065062,
                  name: "meat",
                  localizedName: "meat",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 4582,
                  name: "cooking oil",
                  localizedName: "cooking oil",
                  image: "vegetable-oil.jpg",
                },
              ],
              equipment: [
                {
                  id: 404666,
                  name: "wok",
                  localizedName: "wok",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/wok.png",
                },
              ],
            },
            {
              number: 5,
              step: "Add beef all at once, & toss with sauce until beef is hot & coated. Push beef out of sauce, dribble in cornstarch paste to lightly thicken.",
              ingredients: [
                {
                  id: 20027,
                  name: "corn starch",
                  localizedName: "corn starch",
                  image: "white-powder.jpg",
                },
                { id: 0, name: "sauce", localizedName: "sauce", image: "" },
                {
                  id: 23572,
                  name: "beef",
                  localizedName: "beef",
                  image: "beef-cubes-raw.png",
                },
              ],
              equipment: [],
            },
            {
              number: 6,
              step: "Add beef all at once, & toss with sauce until beef is hot & coated. Push beef out of sauce, dribble in cornstarch paste to lightly thicken.",
              ingredients: [
                {
                  id: 20027,
                  name: "corn starch",
                  localizedName: "corn starch",
                  image: "white-powder.jpg",
                },
                { id: 0, name: "sauce", localizedName: "sauce", image: "" },
                {
                  id: 23572,
                  name: "beef",
                  localizedName: "beef",
                  image: "beef-cubes-raw.png",
                },
              ],
              equipment: [],
            },
            { number: 7, step: "Recombine.", ingredients: [], equipment: [] },
            {
              number: 8,
              step: "Serve immediately.",
              ingredients: [],
              equipment: [],
            },
            { number: 9, step: "Serves 4 -", ingredients: [], equipment: [] },
          ],
        },
      ],
      language: "en",
      spoonacularScore: 60.25965881347656,
      spoonacularSourceUrl: "https://spoonacular.com/mongolian-beef-652335",
      usedIngredientCount: 0,
      missedIngredientCount: 10,
      missedIngredients: [
        {
          id: 11291,
          amount: 15,
          unit: "",
          unitLong: "",
          unitShort: "",
          aisle: "Produce",
          name: "green onion tops",
          original: "15 Green onion tops",
          originalName: "Green onion tops",
          meta: [],
          image:
            "https://img.spoonacular.com/ingredients_100x100/spring-onions.jpg",
        },
        {
          id: 11216,
          amount: 1,
          unit: "tablespoon",
          unitLong: "tablespoon",
          unitShort: "Tbsp",
          aisle: "Produce",
          name: "ginger",
          original: "1 tablespoon Minced ginger",
          originalName: "Minced ginger",
          meta: ["minced"],
          image: "https://img.spoonacular.com/ingredients_100x100/ginger.png",
        },
        {
          id: 10023003,
          amount: 1,
          unit: "pound",
          unitLong: "pound",
          unitShort: "lb",
          aisle: "Meat",
          name: "sirloin steak",
          original: "1 pound Flank or sirloin steak",
          originalName: "Flank or sirloin steak",
          meta: [],
          image:
            "https://img.spoonacular.com/ingredients_100x100/tbone-or-porterhouse-raw.jpg",
        },
        {
          id: 99016,
          amount: 1,
          unit: "tablespoon",
          unitLong: "tablespoon",
          unitShort: "Tbsp",
          aisle: "Gourmet",
          name: "water chestnut flour",
          original: "tablespoon Water chestnut flour",
          originalName: "Water chestnut flour",
          meta: [],
          image:
            "https://img.spoonacular.com/ingredients_100x100/gluten-free-flour.jpg",
        },
        {
          id: 1124,
          amount: 2,
          unit: "",
          unitLong: "",
          unitShort: "",
          aisle: "Milk, Eggs, Other Dairy",
          name: "egg whites",
          original: "2 Egg whites",
          originalName: "Egg whites",
          meta: [],
          image:
            "https://img.spoonacular.com/ingredients_100x100/egg-white.jpg",
        },
        {
          id: 16112,
          amount: 1,
          unit: "tablespoon",
          unitLong: "tablespoon",
          unitShort: "Tbsp",
          aisle: "Ethnic Foods",
          name: "cornstarch paste",
          original: "1 tablespoon Cornstarch paste",
          originalName: "Cornstarch paste",
          meta: [],
          image: "https://img.spoonacular.com/ingredients_100x100/miso.jpg",
        },
        {
          id: 6973,
          amount: 1,
          unit: "teaspoon",
          unitLong: "teaspoon",
          unitShort: "tsp",
          aisle: "Ethnic Foods",
          name: "chili paste",
          original: "1 teaspoon Chili paste with garlic",
          originalName: "Chili paste with garlic",
          meta: ["with garlic"],
          image:
            "https://img.spoonacular.com/ingredients_100x100/chili-paste.png",
        },
        {
          id: 6172,
          amount: 1,
          unit: "cup",
          unitLong: "cup",
          unitShort: "cup",
          aisle: "Canned and Jarred",
          name: "chicken stock",
          original: "cup Chicken stock",
          originalName: "Chicken stock",
          meta: [],
          image:
            "https://img.spoonacular.com/ingredients_100x100/chicken-broth.png",
        },
        {
          id: 16124,
          amount: 2,
          unit: "tablespoons",
          unitLong: "tablespoons",
          unitShort: "Tbsp",
          aisle: "Ethnic Foods",
          name: "soy sauce",
          original: "2 tablespoons Dark soy sauce",
          originalName: "Dark soy sauce",
          meta: ["dark"],
          extendedName: "dark soy sauce",
          image:
            "https://img.spoonacular.com/ingredients_100x100/soy-sauce.jpg",
        },
        {
          id: 10114106,
          amount: 1,
          unit: "tablespoon",
          unitLong: "tablespoon",
          unitShort: "Tbsp",
          aisle: "Alcoholic Beverages",
          name: "sherry",
          original: "tablespoon Dry sherry",
          originalName: "Dry sherry",
          meta: ["dry"],
          extendedName: "dry sherry",
          image:
            "https://img.spoonacular.com/ingredients_100x100/dry-sherry.png",
        },
      ],
      likes: 0,
      usedIngredients: [],
      unusedIngredients: [],
    },
  ],
  offset: 0,
  number: 5,
  totalResults: 1,
};
