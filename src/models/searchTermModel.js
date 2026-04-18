import mongoose, { Schema } from "mongoose";

//Search query will include an array of the results returned from that query
const searchQuerySchema = new Schema(
  {
    queryTerm: { type: String, required: true, unique: true },
    results: [{ type: Schema.Types.ObjectId, ref: "SearchResult" }],
    createdAt: { type: Date, expires: '7d', default: Date.now}
  },
  { timestamps: true},
);

const SearchQuery = mongoose.model("SearchQuery", searchQuerySchema);
export default SearchQuery;
