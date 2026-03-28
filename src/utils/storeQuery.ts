import { recipeInfo } from "../data";
import SearchResult from "../models/searchResultModel";
import SearchQuery from "../models/searchTermModel";

export const storeQuery = async (query: String, results: recipeInfo[]) => {
  //Save the query
  const search = new SearchQuery({ queryTerm: query });
  await search.save();

  //Save the results, tying them to the created query entry
  const resultArray = [];
  for (const recipe of results) {
    const result = new SearchResult({
      recipe: recipe,
      queryTerm: search._id, // link back to query
    });
    await result.save();
    resultArray.push(result._id);
  }

  //Update the search query with result references
  search.results = resultArray;
  await search.save();

  return { search, results: resultArray };
};
