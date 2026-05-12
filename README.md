# Cooklet Backend

REST API for a recipe management app built with Node.js, Express, TypeScript, and MongoDB. Designed to minimize external API usage and control third-party credit costs through persistent caching and atomic rate limiting.

Utilizes the [Spoonacular API](https://spoonacular.com/) for pre-filled recipe entries, while also supporting custom user-defined recipes.

## Highlighted Features

- **Search result caching** — checks MongoDB for a matching query before touching Spoonacular; only genuinely new searches hit the external API, with results stored via a two-model `SearchQuery → SearchResult[]` relationship and automatically purged after 7 days via MongoDB TTL index
- **Atomic daily rate limiting** — custom Express middleware uses `findOneAndUpdate` with `$inc` and `upsert` to safely count daily Spoonacular requests, rolling back the increment and returning `429` if the cap is exceeded, without requiring database transactions
- **Two-stage data cleaning pipeline** — `cleanRecipe` normalizes raw Spoonacular responses into a consistent internal shape before storage, while `extractUserRecipe` trims stored data to only what the client needs, keeping API responses lean
- **Safe partial updates** — edit endpoint applies only fields explicitly present in the request body, leaving untouched fields unchanged and validating array fields before assignment to prevent accidental overwrites

## Tech Stack

- **Node.js / Express** — HTTP server and routing
- **TypeScript** — type safety across models, utilities, and data pipelines
- **MongoDB / Mongoose** — persistent storage with sub-schemas for ingredients, instructions, and tags
- **Spoonacular API** — external recipe search source
- **ESLint + Prettier** — enforced code style

## Getting Started

```bash
npm install
```

Create a `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
SPOONACULAR_API_KEY=your_api_key
PORT=4000
```

```bash
npm run dev     # Development with nodemon
npm run build   # Compile TypeScript
npm start       # Run compiled output
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/recipe/all` | Fetch all saved recipes |
| `GET` | `/api/recipe/search?query=` | Search Spoonacular (cached) |
| `POST` | `/api/recipe/create` | Save a new recipe |
| `PUT` | `/api/recipe/:id` | Edit a saved recipe |
| `DELETE` | `/api/recipe/:id` | Delete a saved recipe |

The `/search` endpoint is protected by the daily rate limit middleware.
